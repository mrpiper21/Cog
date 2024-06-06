import axios from "axios";
import React, { useEffect } from "react";
import { baseURL, getUserConfig } from "../../Services/authorization";
import { initialUserState, UserInterface } from "./UserInterface";
// import { writeImageAsync } from "../../Global/UploadImage";

// interface UserStateHooks extends UserInterface {
//   updateUser: (name: string, email: string) => void;
// }

export const useUserContext =
  React.createContext<UserInterface>(initialUserState);

export const UserContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserInterface>(initialUserState);

  const updateUser = (name: string, email: string) => {
    if (name) {
      setUser((prevState) => ({
        ...prevState,
        name: name,
      }));
    } else if (email) {
      setUser((prevState) => ({
        ...prevState,
        email: email,
      }));
    }
  };

  const updateUserProfile = async (UserData: UserInterface) => {
    try {
      const res = await axios.put(
        baseURL + "user/get-user" + user.user.user._id,
        UserData,
        getUserConfig
      );
      console.log("Response data:", res.data);
      setUser(res.data);
    } catch (err) {
      console.error("Error updating user data:", err);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(baseURL + "user/get-user", getUserConfig);
      // console.log("Response data:", res.data);
      setUser(res.data);

      if (res.data && res.data.user && res.data.user.profilePic) {
        const profilePicUrl = `${baseURL}${res.data.user.profilePic}`;
        // await writeImageAsync(profilePicUrl, "profile-Pic");
        console.log("Image saved successfully");
      } else {
        console.log("User data or profilePic not found in response");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <useUserContext.Provider value={{ user, updateUser, updateUserProfile }}>
      {children}
    </useUserContext.Provider>
  );
};
