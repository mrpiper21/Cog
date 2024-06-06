export interface VerificationInterface {
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
  handleProfilePhotoSubmit: (
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoto: React.Dispatch<React.SetStateAction<boolean>>,
    photo: any,
    value?: any
  ) => void;
}

export const initialVerificationState: VerificationInterface = {
  isVerified: {
    CNIC_FRONT: "unCompleted",
    CNIC_BACK: "unCompleted",
    Profile_Photo: "unCompleted",
    Driving_License: "unCompleted",
    Velicle_Registeration: "unCompleted",
  },
  uploadProfilePhoto: () => {},
  uploadLicense: () => {},
  handleLicenseSubmit: () => {},
  handleProfilePhotoSubmit: () => {},
};