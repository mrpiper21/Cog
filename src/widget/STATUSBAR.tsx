import React from "react";
import { StatusBar } from "expo-status-bar";

// type StatusbarProps

const STATUSBAR = (color?: string) => {
  return (
    <StatusBar
      style="dark"
      backgroundColor={color ? color: "white"}
      translucent={true}
      animated={true}
    />
  );
};

export default STATUSBAR;
