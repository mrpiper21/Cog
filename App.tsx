import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import VerificationContext from "./src/hooks/VerificationContext";
import DrawerNavigation from "./src/navigation/ProtectedNavigationStack/DrawNavigation";
const isAthenticated = false;

export default function App() {
  return (
    <NavigationContainer>
      <VerificationContext>
        {isAthenticated ? <DrawerNavigation /> : <AuthNavigation />}
      </VerificationContext>
    </NavigationContainer>
  );
}
