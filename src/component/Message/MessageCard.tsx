import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface MessageCardProps {
  mesageText: String;
  date: String;
  icon: React.ReactNode;
}

const MessageCard: React.FC<MessageCardProps> = ({
  mesageText,
  date,
  icon,
}) => {
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TripDetail")}
      className="space-x-2"
      style={styles.msgContainer}
    >
      <View style={styles.msgIcon}>{icon}</View>
      <View>
        <Text style={{ fontWeight: "600", fontSize: wp(3.5) }}>
          {mesageText}
        </Text>
        <Text>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;
const styles = StyleSheet.create({
  msgContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: wp(4),
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  msgIcon: {
    width: wp(12),
    height: wp(12),
    backgroundColor: "#4460EF",
    borderRadius: wp(15),
    alignItems: "center",
    justifyContent: "center",
  },
});
