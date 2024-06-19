import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { categories } from "../Constant/categories";
import CategoryIcon from "../Constant/CategoryIcon";

interface SortButton {
  children?: String;
  isActive?: Boolean;
  buttonType?: "navigate" | "cancel" | "callToAction";
  sortType?: "New" | "Saved" | "promotion" | "Ready";
  setActiveCategory: React.Dispatch<React.SetStateAction<String>>;
  activeCategory: String;
}

const SortButton: React.FC<SortButton> = ({
  children,
  isActive,
  setActiveCategory,
  activeCategory,
}) => {
  return (
    <View className="flex-row gap-2 px-4">
      {categories.map((category) => {
        return (
          <TouchableOpacity
            onPress={() => setActiveCategory(category.text)}
            className={`flex-row items-center space-x-2 ${
              activeCategory === category.text ? "bg-blue-500" : "bg-slate-200"
            } px-6 py-3 rounded-lg`}
          >
            <View>{CategoryIcon(category.text, activeCategory)}</View>
            <Text
              className={`${activeCategory === category.text && "text-white"}`}
            >
              {category.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SortButton;
{
  /* <View>
      {sortType === "New" ? (
        <View className="flex-row">
          <View className="px-6 py-4 bg-blue-600 rounded-lg">
            <Text className="text-white">{children}</Text>
          </View>
        </View>
      ) : sortType === "Saved" ? (
        <View className="flex-row items-center space-x-2 bg-slate-200 px-6 py-3 rounded-lg">
          <Fontisto name="bookmark-alt" size={24} color="black" />
          <Text>{children}</Text>
        </View>
      ) : sortType === "promotion" ? (
        <View className="flex-row items-center space-x-2 bg-slate-200 px-6 py-3 rounded-lg">
          <Fontisto name="bookmark-alt" size={24} color="black" />
          <Text>{children}</Text>
        </View>
      ) : (
        sortType === "Ready" && (
          <View className="flex-row items-center space-x-2 bg-slate-200 px-6 py-3 rounded-lg">
            <MaterialCommunityIcons name="car-clock" size={24} color="black" />
            <Text>{children}</Text>
          </View>
        )
      )}
    </View> */
}
