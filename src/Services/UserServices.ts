// import { useCallback } from "react";
// import { baseURL } from "./authorization";
// import { mytoken } from "./authorization";
// import axios from "axios";
// import { Alert } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const handleLicenseSubmit = useCallback(async (
//     setIsLoading: (value: boolean) => void,
//     setPhoto: (value: any) => void,
//     photo: any
//   ) => {
//     const navigation = useNavigation() as any
//     setIsLoading(true);
//     const formData = new FormData();
//     let uri = photo?.uri;

//     try {
//       let uriParts = uri.split(".");
//       let fileType = uriParts[uriParts.length - 1];

//       formData.append("driversLicense", {
//         uri: uri,
//         type: "image/jpg",
//         name: `driversLicense.${fileType}`,
//       });

//       const config = {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${mytoken}`,
//         },
//         transformRequest: () => {
//           return formData;
//         },
//       };

//       const response = await axios.post(
//         baseURL + "user/upload/drivers-license",
//         formData,
//         config
//       );

//       if (response.status === 201) {
//         console.log("Image uploaded successfully!");
//         console.log(response.headers);
//         Alert.alert("Success", "Image uploaded successfully!");
//         setIsLoading(false);
//         User?.updateUserProfile({driversLicenseStatus: "pending"})
//         navigation.navigate("Verification");
//       } else {
//         alert(`Error uploading image try again`);
//         setIsLoading(false);
//         setPhoto(undefined);
//       }
//     } catch (error) {
//       alert(`Error uploading image try again`);
//       console.error("Error uploading image:", error);
//       setPhoto(undefined);
//       setIsLoading(false);
//     }
//   },[])