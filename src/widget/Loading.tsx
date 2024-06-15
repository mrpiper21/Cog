import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loading = (isLoading: boolean) => {
  if (isLoading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <LottieView
          style={{
            width: 300,
            height: 300,
          }}
          source={require("./../../assets/loaders/loader2.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
};

export default Loading;
