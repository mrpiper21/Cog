import { View } from "react-native";
import React from "react";
import TripInformation from "../../../component/Profile/TripInformation";
import RateHeaderView from "../../../component/Profile/RateHeaderView";
import MoreIformationItem from "../../../component/Profile/MoreIformationItem";

const AcceptanceScreen = () => {
  return (
    <View>
      {/**Rate Header Container */}
      <RateHeaderView
        Title={"Acceptance Rate"}
        lable={"Acceptance Rate"}
        Rate={87}
        date={"18% Mar 06 - Apr 06"}
        category="Acceptance"
      />
      {/**Trip information */}
      <TripInformation />
      {/**mare information Item */}
      <MoreIformationItem />
    </View>
  );
};

export default AcceptanceScreen;
