import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/authNavigationStack/AuthNavigation";
import VerificationContext, {
  VerifyContext,
} from "./src/hooks/Verificationcontext/VerificationContext";
import DrawerNavigation from "./src/navigation/ProtectedNavigationStack/DrawNavigation";
import { registerRootComponent } from "expo";
import LocationHook from "./src/hooks/Usercontext/LocationHook";
import { UserInfoContext, useVerificationContext } from "./src/Context";
import {
  UserContext,
  useUserContext,
} from "./src/hooks/Usercontext/UserContext";
// import { AppRegistry } from "react-native";
const isAthenticated = false;

export default function App() {
  const Verification = React.useContext(VerifyContext);
  const User = UserInfoContext();
  // const User = useContext(useUserContext)

  console.log("me.....", User?.user);

  // console.log("Is Verified ", isVerified);
  console.log("is Verified......", Verification?.isVerified.Profile_Photo);

  return (
    <NavigationContainer>
      <VerificationContext>
        {Verification?.isVerified.Profile_Photo === "Submitted" ? (
          <LocationHook>
            <DrawerNavigation />
          </LocationHook>
        ) : (
          <AuthNavigation />
        )}
      </VerificationContext>
    </NavigationContainer>
  );
}

registerRootComponent(App);

// AppRegistry.registerComponent("main", () => App);
