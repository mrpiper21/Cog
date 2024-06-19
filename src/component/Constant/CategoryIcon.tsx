import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

const CategoryIcon = (category: any, activeCategory: String) => {
  return (
    <View>
      {category === "Promotion" ? (
        <Fontisto
          name="bookmark-alt"
          size={24}
          color={activeCategory === "Promotion" ? "white" : "black"}
        />
      ) : (
        category === "Ready" && (
          <MaterialCommunityIcons
            name="car-clock"
            size={24}
            color={activeCategory === "Ready" ? "white" : "black"}
          />
        )
      )}
    </View>
  );
};

export default CategoryIcon;
