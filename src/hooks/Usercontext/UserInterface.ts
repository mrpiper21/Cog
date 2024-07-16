export type UserInterface = {
  __v?: number;
  _id?: string;
  cnicBackStatus?: "Submitted" | "unCompleted" | "completed",
  cnicFrontStatus?: "Submitted" | "unCompleted" | "completed",
  createdAt?: string;
  currentLocation?: {
    coordinates?: number[];
    type?: string;
  };
  driverRegistrationStatus?: "Submitted" | "unCompleted" | "completed",
  driversLicenseStatus?: "Submitted" | "unCompleted" | "completed",
  email?: string;
  emailVerified?: boolean;
  gender?: string;
  homeLocation?: {
    coordinates?: number[];
    type?: string;
  };
  likedVendors?: string[];
  otp?: string;
  otpExpires?: string;
  password?: string;
  profilePic?: string;
  referrals?: string[];
  updatedAt?: string;
  userAgent?: string[];
  userType?: string;
  vehicleRegistrationStatus?: "Submitted" | "unCompleted" | "completed",
  walletBalance?: number;
  workLocation?: {
    coordinates?: number[];
    type?: string;
  };
}



export const  initialUserState: UserInterface =  {
  __v: 0,
  _id: '',
  cnicBackStatus: "unCompleted",
  cnicFrontStatus: "unCompleted",
  createdAt: '',
  currentLocation: {
    coordinates: [],
    type: '',
  },
  driverRegistrationStatus: 'unCompleted',
  driversLicenseStatus: 'unCompleted',
  email: '',
  emailVerified: false,
  gender: '',
  homeLocation: {
    coordinates: [],
    type: '',
  },
  likedVendors: [],
  otp: '',
  otpExpires: '',
  password: '',
  profilePic: '',
  referrals: [],
  updatedAt: '',
  userAgent: [],
  userType: '',
  vehicleRegistrationStatus: 'unCompleted',
  walletBalance: 0,
  workLocation: {
    coordinates: [],
    type: '',
  },
};