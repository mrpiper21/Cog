export interface UserInterface {
  user: {
    user: {
      __v: number;
      _id: string;
      createdAt: string;
      currentLocation: {
        coordinates: number[];
        type: string;
      };
      email: string;
      emailVerified: boolean;
      gender: string;
      homeLocation: {
        coordinates: number[];
        type: string;
      };
      likedVendors: string[];
      otp: string;
      otpExpires: string;
      password: string;
      profilePic: string;
      referrals: string[];
      updatedAt: string;
      userAgent: string[];
      userType: string;
      walletBalance: number;
      workLocation: {
        coordinates: number[];
        type: string;
      };
    }
  };
}


export const  initialUserState: UserInterface = {
  user: {
    user: {
      __v: 0,
      _id: "",
      createdAt: "",
      currentLocation: {
        coordinates: [],
        type: "",
      },
      email: "",
      emailVerified: false,
      gender: "",
      homeLocation: {
        coordinates: [],
        type: "",
      },
      likedVendors: [],
      otp: "",
      otpExpires: "",
      password: "",
      profilePic: "",
      referrals: [],
      updatedAt: "",
      userAgent: [],
      userType: "",
      walletBalance: 0,
      workLocation: {
        coordinates: [],
        type: "",
      },
    },
  },
};