import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export const writeImageAsync = async (imageUrl: string, filename?: string) => {
  try {
     await requestPermissions().then((res)=> console.log(res)).catch(err=> console.log(err))
    const fileUri = `${FileSystem.documentDirectory}${filename}.jpg`;
    const downloadedFile = await FileSystem.downloadAsync(imageUrl, fileUri);

    if (downloadedFile.status === 200) {
      // Save to media library (Android only)
      await MediaLibrary.saveToLibraryAsync(downloadedFile.uri);
      console.log("Photo saved successfully");
    } else {
      console.log("Error downloading image");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const requestPermissions = async () => {
  try {
   const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      // Proceed with saving the image or any other relevant action
      // ...
    } else {
      console.log('Permission not granted');
    }
  } catch (error) {
    console.error('Error requesting permissions:', error);
  }
};
