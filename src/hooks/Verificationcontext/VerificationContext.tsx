import React, { createContext, useCallback, useState } from "react";
import { baseURL, config, mytoken, token } from "../../Services/authorization";
import { useNavigation } from "@react-navigation/native";
import {
  VerificationInterface,
  initialVerificationState,
} from "./VerifyInitialState";
import axios from "axios";
import { Alert } from "react-native";

type verState = {
  CNIC_FRONT: "Submitted" | "Completed" | "unCompleted";
  CNIC_BACK: "Submitted" | "Completed" | "unCompleted";
  Profile_Photo: "Submitted" | "Completed" | "unCompleted";
  Driving_License: "Submitted" | "Completed" | "unCompleted";
  Velicle_Registeration: "Submitted" | "Completed" | "unCompleted";
  isAuthentication: true | false;
  ProfilePhoto_Url: string;
};

const IsVerified: verState = {
  CNIC_FRONT: "unCompleted",
  CNIC_BACK: "unCompleted",
  Profile_Photo: "unCompleted",
  Driving_License: "unCompleted",
  Velicle_Registeration: "unCompleted",
  isAuthentication: false,
  ProfilePhoto_Url: "",
};

export const VerifyContext = createContext<VerificationInterface>(
  initialVerificationState
);

export const VerificationContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVerified, setIsVerified] = useState<verState>(IsVerified);
  const navigation = useNavigation() as any;

  React.useEffect(() => {
    setIsVerified(IsVerified);
  }, []);

  const AuthenticateUser = () => {
    setIsVerified((prevState) => ({
      ...prevState,
      isAuthentication: true,
    }));
  };

  const uploadProfilePhoto = () => {
    setIsVerified((prev) => ({
      ...prev,
      Profile_Photo: "Submitted",
    }));
    console.log("Verifying photo...", isVerified.Profile_Photo);
    // navigation.navigate("Verification");
  };

  const uploadLicense = useCallback(() => {
    setIsVerified((prev) => ({
      ...prev,
      Driving_License: "Submitted",
    }));
    // navigation.navigate("Verification");
  }, []);

  let ProfilePhoto_Url: string = "";

  const handleLicenseSubmit = async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    let uri = photo?.uri;

    try {
      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      formData.append("driversLicense", {
        uri: uri,
        type: "image/jpg",
        name: `driversLicense.${fileType}`,
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        transformRequest: (data: any) => {
          return data;
        },
      };

      const response = await axios.post(
        baseURL + "user/upload/drivers-license",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("Image uploaded successfully!");
        console.log(response.headers);
        Alert.alert("Success", "Image uploaded successfully!");
        setIsLoading(false);
        uploadLicense();
        navigation.navigate("Verification");
      } else {
        alert(`Error uploading image try again`);
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      alert(`Error uploading image try again`);
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  };

  const handleProfilePhotoSubmit = async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any,
    edit?: boolean
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    // console.log("base....", photo.base64);

    try {
      ProfilePhoto_Url = "data:image/jpg;base64" + photo.base64;
      formData.append("file", {
        uri: photo.uri,
        type: "image/jpeg",
        name: "profile_picture.jpg",
      });

      const response = await fetch(baseURL + "user/profile-pic", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        console.log(response.json());
        setIsLoading(false);
        setPhoto(undefined);

        Alert.alert("Submitted", "Image submitted succefully");
        uploadProfilePhoto();
        navigation.navigate("Verification");
      } else {
        // console.log(response.headers);
        Alert.alert(
          "Error",
          "There was an error while uploading your photo, Please try again"
        );
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "There was an error while uploading your photo, Please try again"
      );
      setPhoto(undefined);
      setIsLoading(false);
    }
  };

  return (
    <VerifyContext.Provider
      value={{
        AuthenticateUser,
        isVerified,
        uploadProfilePhoto,
        uploadLicense,
        handleLicenseSubmit,
        handleProfilePhotoSubmit,
        ProfilePhoto_Url,
      }}
    >
      {children}
    </VerifyContext.Provider>
  );
};

export default VerificationContext;
