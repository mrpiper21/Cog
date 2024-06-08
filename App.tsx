import React from "react";
import VerificationContext from "./src/hooks/Verificationcontext/VerificationContext";
import { registerRootComponent } from "expo";
import AppNavigation from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useVerificationContext } from "./src/Context";
import { UserContext } from "./src/hooks/Usercontext/UserContext";

export default function App() {
  return (
    <NavigationContainer>
      <UserContext>
        <VerificationContext>
          <AppNavigation />
        </VerificationContext>
      </UserContext>
    </NavigationContainer>
  );
}

registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);
