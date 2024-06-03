import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../../component/Drawer/CustomDrawerContent";
import ProtectStack from "./ProtectStack";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        options={{ headerShown: false }}
        name="ProtectStack"
        component={ProtectStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
