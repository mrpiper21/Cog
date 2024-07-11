import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "../../../widget/Buttons/BackButton";
import ProgressBar from "../../../component/Verification/ProgressBar";
import Btn from "../../../widget/Btn";
import { useNavigation } from "@react-navigation/native";

const LicenseFrontScreen = () => {
  const navigation = useNavigation() as any;
  return (
    <View style={{ flex: 1, paddingHorizontal: wp(3) }}>
      <View style={{ marginTop: wp(12) }}>
        <BackButton />
      </View>
      <ProgressBar />
      <View>
        <Text className="text-xl" style={{ fontWeight: "500" }}>
          Take a picture of your driving license (Front Side)
        </Text>
        <View style={{ flexDirection: "row", marginTop: wp(3) }}>
          <Text className="text-base">1.</Text>
          <Text className="text-base">
            Upload the N.O.C. (Notary Lease Agreement or Sales Agreement) first
            if the name on the vehicle document doesn't match the name on the
            DL/Pan Card. Then, upload the RC, Insurance, and Permit documents.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: wp(2) }}>
          <Text className="text-base">2.</Text>
          <Text className="text-base">
            Ensure that all details such as the Model number, Vehicle number,
            Chassis number, Registration name, Start date, Expiry Date, and
            financier/company name on the commercial insurance are clearly
            visible in the photo without any blurring.
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: wp(2) }}>
          <Text className="text-base">3.</Text>
          <Text className="text-base">
            Ensure the registration certificate photo clearly displays the Fuel
            type, Model, Year, Vehicle number, Chassis number, Registration
            name, Expiry date, and government logo without blurring.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: wp(5) }}>
        <Image source={require("../../../../assets/Maskgroup.png")} />
      </View>
      <View style={{ marginTop: wp(12), alignItems: "center" }}>
        <Btn
          type="action"
          label={"Take photo"}
          callback={() => navigation.navigate("upload-front")}
        />
      </View>
    </View>
  );
};

export default LicenseFrontScreen;
