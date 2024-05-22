import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import MessageScreen from "../../screens/ProtectedScreens/MessageScreen";

const Drawer = createDrawerNavigator();

const DrawStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="profile"
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          ),
        }}
        component={MessageScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawStack;
