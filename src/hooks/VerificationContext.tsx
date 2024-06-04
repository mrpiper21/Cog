import React, { createContext, Dispatch, useCallback, useState } from "react";
import { baseURL, config } from "../Services/authorization";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

interface VerifyState {
  isVerified: {
    CNIC_FRONT: "Submitted" | "Completed" | "unCompleted";
    CNIC_BACK: "Submitted" | "Completed" | "unCompleted";
    Profile_Photo: "Submitted" | "Completed" | "unCompleted";
    Driving_License: "Submitted" | "Completed" | "unCompleted";
    Velicle_Registeration: "Submitted" | "Completed" | "unCompleted";
  };
  uploadProfilePhoto: () => void;
  uploadLicense: () => void;
  handleLicenseSubmit: (
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoto: React.Dispatch<React.SetStateAction<boolean>>,
    photo: any,
    value?: any
  ) => void;
}

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

export const VerifyContext = createContext<VerifyState>(VerifyContext);

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
  }, [isVerified]);

  const uploadLicense = useCallback(() => {
    setIsVerified((prev) => ({
      ...prev,
      Driving_License: "Submitted",
    }));
  }, [isVerified]);

  const handleLicenseSubmit = async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();

    formData.append("driversLicense", {
      uri: photo.uri,
      name: "driversLicense.jpg",
      type: "image/jpeg",
    });

    formData.append("Content-Type", "image/jpeg");
    // console.log(formData);
    try {
      await axios.post(
        baseURL + "user/upload/drivers-license",
        formData,
        config
      );
      // console.log(res.headers);

      await uploadLicense();
      setIsLoading(false);
      setPhoto(undefined);
      navigation.navigate("Account-ready");
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
      }}
    >
      {children}
    </VerifyContext.Provider>
  );
};

export default VerificationContext;
