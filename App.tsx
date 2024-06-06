import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import VerificationContext from "./src/hooks/Verificationcontext/VerificationContext";
import DrawerNavigation from "./src/navigation/ProtectedNavigationStack/DrawNavigation";
import {
  UserContext,
  useUserContext,
} from "./src/hooks/Usercontext/UserContext";
import { registerRootComponent } from "expo";
import LocationHook from "./src/hooks/Usercontext/LocationHook";
// import { AppRegistry } from "react-native";
const isAthenticated = false;
// const User = useContext(useUserContext);

export default function App() {
  return (
    <NavigationContainer>
      <UserContext>
        <VerificationContext>
          {isAthenticated ? (
            <LocationHook>
              <DrawerNavigation />
            </LocationHook>
          ) : (
            <AuthNavigation />
          )}
        </VerificationContext>
      </UserContext>
    </NavigationContainer>
  );
}

registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);
