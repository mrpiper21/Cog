import { View, Text, Image, Button } from 'react-native'
import React, {useContext, useState} from 'react'
import BackButton from '../../widget/Buttons/BackButton';
import { shareAsync } from "expo-sharing";
import { useNavigation } from '@react-navigation/native';
import Loading from '../../widget/Loading';
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Btn from '../../widget/Btn';
import { useUserContext } from '../../hooks/Usercontext/UserContext';

interface PreviewProps {
    photo: any;
    setPhoto: (value: any) => void;
    hasMediaLibraryPermission: any;
}

const PreviewCertificatePhoto: React.FC<PreviewProps> = ({photo, setPhoto, hasMediaLibraryPermission}) => {
  const User = useContext(useUserContext)
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation() as any;
  let sharePhoto = () => {
    shareAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  let savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  if (isLoading) return <Loading />;
  return (
    <View style={{ flex: 1 }}>
    <View className='pl-4' style={{marginTop: wp(10)}}>
        <BackButton />
    </View>
    <View style={{ alignItems: "center", marginTop: wp(20) }}>
      <Image
        style={{ height: wp(50), width: wp(90) }}
        source={{ uri: "data:image/jpg;base64," + photo.base64 }}
      />
    </View>
    {hasMediaLibraryPermission ? (
      <Button title="Save" onPress={savePhoto} />
    ) : undefined}
    {/* <Button title="Discard" onPress={() => setPhoto(undefined)} /> */}

    <View style={{ alignItems: "center" }}>
      <Text style={{ fontSize: wp(4), fontWeight: "500", marginTop: wp(5) }}>
        Do you want to use this photo?
      </Text>
      <Text
        style={{
          width: wp(80),
          marginTop: wp(5),
          fontSize: wp(3.5),
        }}
      >
        Make sure your Registration Certificate
        is readable.
      </Text>
    </View>
    <View style={{ alignItems: "center", marginTop: wp(42) }}>
      <View className="mb-2">
        <Btn
          type="action"
          label={"Submit"}
          callback={() => User?.handleVehicleRegisteration(setIsLoading={setIsLoading}, photo={photo}, setPhoto={setPhoto})}
        />
      </View>
      <View>
        <Btn
            type="cancel"
            label={"Retake"}
            callback={() => setPhoto(undefined)}
        />
      </View>
    </View>
  </View>
  )
}

export default PreviewCertificatePhoto