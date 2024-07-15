import React from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import AppProviders from "./src/Global/Provider";

export default function App() {
  return (
    <NavigationContainer>
      <AppProviders/>
    </NavigationContainer>
  );
}

registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);
