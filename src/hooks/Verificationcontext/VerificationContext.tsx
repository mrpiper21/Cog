import React, { createContext, useCallback, useState } from "react";
import { baseURL, config, mytoken, token } from "../../Services/authorization";
import { useNavigation } from "@react-navigation/native";
import {
  VerificationInterface,
  initialVerificationState,
} from "./VerifyInitialState";
import { writeImageAsync } from "../../Global/UploadImage";

type verState = {
  CNIC_FRONT: "Submitted" | "Completed" | "unCompleted";
  CNIC_BACK: "Submitted" | "Completed" | "unCompleted";
  Profile_Photo: "Submitted" | "Completed" | "unCompleted";
  Driving_License: "Submitted" | "Completed" | "unCompleted";
  Velicle_Registeration: "Submitted" | "Completed" | "unCompleted";
};

const IsVerified: verState = {
  CNIC_FRONT: "unCompleted",
  CNIC_BACK: "unCompleted",
  Profile_Photo: "unCompleted",
  Driving_License: "unCompleted",
  Velicle_Registeration: "unCompleted",
};

export const VerifyContext = createContext<VerificationInterface>(
  initialVerificationState
);

export const VerificationContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVerified, setIsVerified] = useState<verState>(IsVerified);
  const navigation = useNavigation() as any;

  const uploadProfilePhoto = useCallback(() => {
    setIsVerified((prev) => ({
      ...prev,
      Profile_Photo: "Submitted",
    }));
    navigation.navigate("Verification");
  }, [isVerified]);

  const uploadLicense = useCallback(() => {
    setIsVerified((prev) => ({
      ...prev,
      Driving_License: "Submitted",
    }));
    navigation.navigate("Verification");
  }, [isVerified]);

  const handleLicenseSubmit = async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    console.log(photo.uri);
    try {
      formData.append("file", {
        uri: photo.uri,
        type: "image/jpeg",
        name: "driversLicense.jpg",
      });

      const response = await fetch(baseURL + "user/upload/drivers-license", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        console.error(`Error uploading image: ${response.status}`);
        setIsLoading(false);
        setPhoto(undefined);
      } else {
        console.log("Image uploaded successfully!");
        setIsLoading(false);
        await uploadLicense();
      }
    } catch (error) {
      console.log();
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  };

  const handleProfilePhotoSubmit = async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();

    // formData.append("driversLicense", photo.uri, photo.name);
    // formData.append("Content-Type", "image/jpeg");

    // formData.append("Content-Type", "image/jpeg");
    // console.log(formData);
    try {
      formData.append("file", {
        uri: photo?.uri,
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

      if (response.ok) {
        console.log(response.headers);
        setIsLoading(false);
        setPhoto(undefined);
        await writeImageAsync(photo.uri, "Profile-Photo");
        uploadProfilePhoto();
      } else {
        // console.log(response.headers);
        console.log("There was an error uploading image");
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  };

  return (
    <VerifyContext.Provider
      value={{
        isVerified,
        uploadProfilePhoto,
        uploadLicense,
        handleLicenseSubmit,
        handleProfilePhotoSubmit,
      }}
    >
      {children}
    </VerifyContext.Provider>
  );
};

export default VerificationContext;
