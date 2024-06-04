import axios from "axios";
import React from "react";
import { baseURL, config } from "../Services/authorization";

interface UserState {
  user: { id: string; name: string; email: string };
  updateUser: (name: string, email: string) => void;
}
type User = { id: string; name: string; email: string };

export const useUserContext = React.createContext<UserState>(UserContext);

export const UserContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User>({
    id: "",
    name: "",
    email: "",
  });
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
  React.useEffect(() => {
    const getUser = async () => {
      await axios
        .get(baseURL + "user/get-user", config)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log(err));
    };

    getUser();
  }, [user, setUser, updateUser]);

  return (
    <useUserContext.Provider value={{ updateUser, user }}>
      {children}
    </useUserContext.Provider>
  );
};
