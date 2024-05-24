import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import ProtectStack from "./src/navigation/ProtectedNavigationStack/ProtectStack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./src/component/Drawer/CustomDrawerContent";
import { useActiveCategory } from "./src/Context";
import { ActiveCategoryContext } from "./src/Context";
const Drawer = createDrawerNavigator();
const isAthenticated = true;

export default function App() {
  const [activeCategory, setActiveCategory] = useState("");
  return (
    <ActiveCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      <NavigationContainer>
        {isAthenticated ? (
          <Drawer.Navigator drawerContent={CustomDrawerContent}>
            <Drawer.Screen
              options={{ headerShown: false }}
              name="ProtectStack"
              component={ProtectStack}
            />
          </Drawer.Navigator>
        ) : (
          <AuthNavigation />
        )}
      </NavigationContainer>
    </ActiveCategoryContext.Provider>
  );
}
