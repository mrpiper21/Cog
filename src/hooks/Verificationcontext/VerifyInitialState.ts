export interface VerificationInterface {
  isVerified: {
    CNIC_FRONT: "Submitted" | "Completed" | "unCompleted";
    CNIC_BACK: "Submitted" | "Completed" | "unCompleted";
    Profile_Photo: "Submitted" | "Completed" | "unCompleted";
    Driving_License: "Submitted" | "Completed" | "unCompleted";
    Velicle_Registeration: "Submitted" | "Completed" | "unCompleted";
    isAuthentication: true | false
    
  };
  ProfilePhoto_Url: string
  uploadProfilePhoto: () => void;
  uploadLicense: () => void;
  handleLicenseSubmit: (
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoto: React.Dispatch<React.SetStateAction<any>>,
    photo: any,
    value?: any
  ) => void;
  handleProfilePhotoSubmit: (
    setIsloading: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoto: React.Dispatch<React.SetStateAction<any>>,
    photo: any,
    value?: any,
    edit?: boolean
  ) => void;
  AuthenticateUser: ()=> void
}

export const initialVerificationState: VerificationInterface = {
  isVerified: {
    CNIC_FRONT: "unCompleted",
    CNIC_BACK: "unCompleted",
    Profile_Photo: "unCompleted",
    Driving_License: "unCompleted",
    Velicle_Registeration: "unCompleted",
    isAuthentication: false,
    
  },
  ProfilePhoto_Url: "",
  uploadProfilePhoto: () => {},
  uploadLicense: () => {},
  handleLicenseSubmit: () => {},
  handleProfilePhotoSubmit: () => { },
  AuthenticateUser: ()=> {},
};