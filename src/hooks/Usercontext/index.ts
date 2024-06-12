// import { baseURL, getUserConfig } from "../../Services/authorization";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { UserInfoContext } from "../../Context";
// import { initialUserState, UserInterface } from "./UserInterface";

// export default class UserObject {
//   private user: UserInterface;
//   private updateUser: (name: string, email: string) => void;
//   private updateUserProfile: (UserData: UserInterface) => Promise<void>;
//   private getUser: () => Promise<void>;

//   constructor() {
//     this.user = initialUserState;
//     this.updateUser = ( email: string) => {
//      if (email) {
//         this.user.email = email;
//       }
//     };
//     this.updateUserProfile = async (UserData: UserInterface) => {
//       try {
//         const res = await axios.put(
//           baseURL + "user/get-user" + this.user._id,
//           UserData,
//           getUserConfig
//         );
//         console.log("Response data:", res.data);
//         this.user = res.data.user;
//       } catch (err) {
//         console.error("Error updating user data:", err);
//       }
//     };
//     this.getUser = async () => {
//       try {
//         const res = await axios.get(baseURL + "user/get-user", getUserConfig);
//         console.log("Response data:", res.data);
//         this.user = res.data.user;
//         console.log("User from state manager.....", this.user);

//         if (res.data && res.data.user && res.data.user.profilePic) {
//           const profilePicUrl = `${baseURL}${res.data.user.profilePic}`;
//           // await writeImageAsync(profilePicUrl, "profile-Pic");
//           console.log("Image saved successfully");
//         } else {
//           console.log("User data or profilePic not found in response");
//         }
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//       }
//     };
//   };
// };
