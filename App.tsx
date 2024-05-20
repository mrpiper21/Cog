import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import ProtectStack from "./src/navigation/ProtectedNavigationStack/ProtectStack";

const isAthenticated = true;
export default function App() {
  return (
    <NavigationContainer>
      {isAthenticated ? <ProtectStack /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
