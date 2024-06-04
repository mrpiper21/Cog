export default interface UserInterface {
    _id: string;
    email: string;
    profilePic: string;
    gender: string;
    password: string;
    walletBalance: number;
    userType: string;
    otp: string;
    otpExpires: string;
    emailVerified: boolean;
    userAgent: string[];
    referrals: any[]; // You can replace 'any' with a more specific type if needed
    likedVendors: any[]; // Same here
    createdAt: string;
    updatedAt: string;
    __v: number;
    homeLocation: {
        type: string;
        coordinates: [number, number];
    };
    workLocation: {
        type: string;
        coordinates: [number, number];
    };
    currentLocation: {
        type: string;
        coordinates: [number, number];
    };
}


export const  initialUserState: UserInterface = {
    _id: "",
    email: "",
    profilePic: "",
    gender: "",
    password: "",
    walletBalance: 0,
    userType: "",
    otp: "",
    otpExpires: "",
    emailVerified: false,
    userAgent: [],
    referrals: [],
    likedVendors: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
    homeLocation: {
        type: "",
        coordinates: [0, 0],
    },
    workLocation: {
        type: "",
        coordinates: [0, 0],
    },
    currentLocation: {
        type: "",
        coordinates: [0, 0],
    },
};
