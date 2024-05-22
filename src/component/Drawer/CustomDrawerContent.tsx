import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProfileItem from "./ProfileItem";
import NavBarItem from "./NavBarItem";

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={({ focused, color }) => (
          <View>
            <ProfileItem />
            <View style={{ marginTop: hp(3.5) }}>
              <NavBarItem
                label={"Messges"}
                msg={3}
                icon={
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={wp(6)}
                    color="black"
                  />
                }
              />
              <NavBarItem
                label={"Opportunities"}
                icon={
                  <MaterialCommunityIcons
                    name="lightbulb-on-outline"
                    size={wp(6)}
                    color="black"
                  />
                }
              />
              <NavBarItem
                label={"Earnings"}
                icon={<Feather name="dollar-sign" size={wp(6)} color="black" />}
              />
              <NavBarItem
                label={"Wallet"}
                icon={
                  <Ionicons name="wallet-outline" size={wp(6)} color="black" />
                }
              />
              <NavBarItem
                label={"Account"}
                icon={
                  <FontAwesome5 name="user-circle" size={wp(6)} color="black" />
                }
              />
              <NavBarItem
                label={"Help"}
                icon={<Feather name="help-circle" size={wp(6)} color="black" />}
              />
              <NavBarItem
                label={"Refer Friends"}
                icon={<AntDesign name="adduser" size={24} color="black" />}
              />
            </View>
          </View>
        )}
      />
      {/* Add any additional drawer items here, such as a logout button */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
