import axios from "axios";
import React, { useCallback, useEffect, Dispatch, useState, SetStateAction } from "react";
import { baseURL, config, getUserConfig } from "../../Services/authorization";
import { initialUserState, UserInterface } from "./UserInterface";
import { ToastAndroid, Alert } from "react-native";
import { mytoken } from "../../Services/authorization";
import { useNavigation } from "@react-navigation/native";
// import { writeImageAsync } from "../../Global/UploadImage";

type HandleSubmitType = (setIsLoading: Dispatch<React.SetStateAction<boolean>>, setPhoto: (value: any)=> void, photo: String, edit?: boolean | never ) => Promise<void>
interface UserContextProps {
  user: UserInterface;
  updateUser: (updatedFields: UserInterface) => void;
  updateUserProfile: (
    UserData: UserInterface,
    setIsLoading: Dispatch<React.SetStateAction<boolean>>,
    errormsg?: string
  ) => Promise<void>;
  getUser: () => Promise<void>;
  loginUser: (email: String, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>)=> Promise<void>;
  handleLicenseSubmit: HandleSubmitType
  handleProfilePhotoSubmit: HandleSubmitType,
  appLoading: boolean
  handleVehicleRegisteration: HandleSubmitType
}

export const useUserContext = React.createContext<UserContextProps | undefined>(
  undefined
);

export const UserContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<UserInterface>(initialUserState);
  console.log("User from hook...", user)
  const [appLoading, setAppLoading] = useState<boolean>(false)
  const navigation = useNavigation() as any

  const updateUser = useCallback((updatedFields: UserInterface) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedFields,
    }));
  }, [])

  const updateUserProfile = useCallback(async (
    UserData: UserInterface,
    setIsLoading?: Dispatch<React.SetStateAction<boolean>>,
    errorMsg?: string
  ) => {
    try {
      setIsLoading && setIsLoading(true);
      await axios
        .put(baseURL + "user/update-user/" + user._id, UserData, config)
        .then((res) => {
          setUser(res.data.user);
          setIsLoading && setIsLoading(false);
          Alert.alert("✔✔✔", errorMsg)
          console.log("User profile updated", res.data);
        })
        .catch((err) => {
          setIsLoading && setIsLoading(false);
          console.log("There was an Error: ", err);
          Alert.alert("❌❌❌❌", "There was an Error Please try again")
        });
    } catch (err) {
      console.error("Error updating user data:", err);
      Alert.alert("❌❌❌❌", "There was an Error Please try again")
    }
  },[])

  const getUser = async () => {
    setAppLoading(true)
    try {
      const res = await axios.get(baseURL + "user/get-user", getUserConfig);
      // console.log("Response data:", res.data);
      setUser(res?.data.user);
      console.log("User data from api... ",res?.data.user)
      setAppLoading(false)

      // res.data && setUser(res.data.user);

      if (res.data && res.data.user && res.data.user.profilePic) {
        const profilePicUrl = `${baseURL}${res.data.user.profilePic}`;
        // await writeImageAsync(profilePicUrl, "profile-Pic");
        console.log("Image saved successfully");
      } else {
        console.log("User data or profilePic not found in response");
        setAppLoading(false)
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setAppLoading(false)
    }
  };

  const loginUser = async (email: String, setIsLoading: Dispatch<React.SetStateAction<boolean>>) => {
    console.log(email)
      try {
        setIsLoading(true)
        const response = await axios.post(baseURL + "user/login", {email: email})
        if(response.status === 200){
          setIsLoading(false)
          console.log("login succeful")
          ToastAndroid.show("Login succeful", ToastAndroid.SHORT)
        }  else if(response.status === 404){
          console.log("user Not found")
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        console.log("Error: ", error)
      }
  }

  const handleLicenseSubmit = useCallback(async (
    setIsLoading: Dispatch<React.SetStateAction<boolean>>,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    let uri = photo?.uri;

    try {
      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      formData.append("driversLicense", {
        uri: uri,
        type: "image/jpg",
        name: `driversLicense.${fileType}`,
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        transformRequest: () => {
          return formData;
        },
      };

      const response = await axios.post(
        baseURL + "user/upload/drivers-license",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("Image uploaded successfully!");
        console.log(response.headers);
        Alert.alert("Success", "Image uploaded successfully!");
        setIsLoading(false);
        updateUserProfile({ driversLicenseStatus: "Submitted" }).then((res)=> console.log(res)).catch((err)=> Alert.alert("Failed", "Something went wrong", err))
        navigation.navigate("Verification");
      } else {
        alert(`Error uploading image try again`);
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      alert(`Error uploading image try again`);
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  },[])
  
  const handleVehicleRegisteration = useCallback(async (
    setIsLoading: Dispatch<React.SetStateAction<boolean>>,
    setPhoto: (value: any) => void,
    photo: any
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    let uri = photo?.uri;

    try {
      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      formData.append("vehicleRegistration", {
        uri: uri,
        type: "image/jpg",
        name: `vehicleRegistration.${fileType}`,
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        transformRequest: () => {
          return formData;
        },
      };

      const response = await axios.post(
        baseURL + "user/upload/vehicle-registration",
        formData,
        config
      );

      if (response.status === 201) {
        console.log("Image uploaded successfully!");
        console.log(response.headers);
        Alert.alert("Success", "Image uploaded successfully!");
        setIsLoading(false);
        navigation.navigate("document");
      } else {
        Alert.alert(`Error uploading image try again`);
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      alert(`Error uploading image try again`);
      console.error("Error uploading image:", error);
      setPhoto(undefined);
      setIsLoading(false);
    }
  },[])

  const handleProfilePhotoSubmit = useCallback(async (
    setIsLoading: (value: boolean) => void,
    setPhoto: (value: any) => void,
    photo: any,
    edit?: boolean
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    // console.log("base....", photo.base64);
    let ProfilePhoto_Url

    try {
      ProfilePhoto_Url = "data:image/jpg;base64" + photo.base64;
      formData.append("file", {
        uri: photo.uri,
        type: "image/jpeg",
        name: "profile_picture.jpg",
      });

      const response = await fetch(baseURL + "user/profile-pic", {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${mytoken}`,
        },
        body: formData,
      });

      if (response.status === 201) {
        console.log(response.json());
        setIsLoading(false);
        setPhoto(undefined);

        Alert.alert("Submitted", "Image submitted succefully");
        navigation.navigate("Verification");
      } else {
        // console.log(response.headers);
        Alert.alert(
          "Error",
          "There was an error while uploading your photo, Please try again"
        );
        setIsLoading(false);
        setPhoto(undefined);
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "There was an error while uploading your photo, Please try again"
      );
      setPhoto(undefined);
      setIsLoading(false);
    }
  },[])

  useEffect(() => {
    getUser();
  }, []);
  return (
    <useUserContext.Provider
      value={{ user, updateUser, updateUserProfile, getUser, loginUser, handleLicenseSubmit, handleProfilePhotoSubmit, appLoading, handleVehicleRegisteration }}
    >
      {children}
    </useUserContext.Provider>
  );
};
