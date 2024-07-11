import * as ImagePicker from "expo-image-picker";

const pickImage = async (mode: string, setImage: React.Dispatch<React.SetStateAction<any>>) => {
    // ... your image picking code here ...
    if (mode === "gallery") {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result?.canceled) {
        setImage(result?.assets[0].uri);
        // User?.updateUserProfile({ profilePic: image }, setIsLoading);
      }
    //   setVisibleModal(false);
    }
  };

  export default pickImage;