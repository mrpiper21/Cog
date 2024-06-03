import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import VerificationContext from "./src/Global/VerificationContext";
import DrawerNavigation from "./src/navigation/ProtectedNavigationStack/DrawNavigation";
const isAthenticated = true;

export default function App() {
  return (
    <NavigationContainer>
      {isAthenticated ? (
        <DrawerNavigation />
      ) : (
        <VerificationContext>
          <AuthNavigation />
        </VerificationContext>
      )}
    </NavigationContainer>
  );
}
