import React from "react";
import { StatusBar } from "expo-status-bar";

const STATUSBAR = () => {
  return (
    <StatusBar
      style="dark"
      backgroundColor="white"
      translucent={true}
      animated={true}
    />
  );
};

export default STATUSBAR;
