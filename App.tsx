import React from "react";
import VerificationContext from "./src/hooks/Verificationcontext/VerificationContext";
import { registerRootComponent } from "expo";
import AppNavigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useVerificationContext } from "./src/Context";

export default function App() {
  return (
    <NavigationContainer>
      <VerificationContext>
        <AppNavigation />
      </VerificationContext>
    </NavigationContainer>
  );
}

registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);
