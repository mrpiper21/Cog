import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import VerificationContext from "./src/hooks/VerificationContext";
import DrawerNavigation from "./src/navigation/ProtectedNavigationStack/DrawNavigation";
import { UserContext } from "./src/hooks/UserContext";
const isAthenticated = true;

export default function App() {
  return (
    <NavigationContainer>
      <UserContext>
        <VerificationContext>
          {isAthenticated ? <DrawerNavigation /> : <AuthNavigation />}
        </VerificationContext>
      </UserContext>
    </NavigationContainer>
  );
}
