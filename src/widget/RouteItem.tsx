import { View } from "react-native";
import React from "react";

const RouteItem = () => {
  return (
    <View className="items-center">
      <View
        style={{
          padding: 3,
          backgroundColor: "#4460EF",
          borderRadius: 10,
        }}
      />
      <View
        style={{
          padding: 1,
          width: 2.5,
          height: 55,
          backgroundColor: "#4460EF",
        }}
      />
      <View
        style={{
          padding: 3,
          backgroundColor: "#4460EF",
        }}
      />
    </View>
  );
};

export default RouteItem;
