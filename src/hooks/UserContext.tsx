import axios from "axios";
import React, { useEffect } from "react";
import { baseURL, config, getUserConfig } from "../Services/authorization";
import UserInterface, { initialUserState } from "../Global/UserInterface";

interface UserState {
  user: UserInterface;
  updateUser: (name: string, email: string) => void;
}

export const useUserContext = React.createContext<UserState>(useUserContext);

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

  const getUser = async () => {
    try {
      const res = await axios.get(baseURL + "user/get-user", getUserConfig);
      setUser(res.data);
      console.log(user);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <useUserContext.Provider value={{ updateUser, user }}>
      {children}
    </useUserContext.Provider>
  );
};
