import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MessageCard from "../../../component/Message/MessageCard";

const MessageScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white"  }}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      <SafeAreaView>
      <View style={{ marginVertical: wp(4), paddingHorizontal: wp(3) }}>
        <Text>All messages</Text>
      </View>
      {/**Msg card */}
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<Ionicons name="alert-outline" size={wp(6)} color="white" />}
        mesageText={"Upgrade your ride & boost your earnings"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<Ionicons name="alert-outline" size={wp(6)} color="white" />}
        mesageText={"Upgrade your ride & boost your earnings"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<Ionicons name="alert-outline" size={wp(6)} color="white" />}
        mesageText={"Upgrade your ride & boost your earnings"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<Ionicons name="alert-outline" size={wp(6)} color="white" />}
        mesageText={"Upgrade your ride & boost your earnings"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<Ionicons name="alert-outline" size={wp(6)} color="white" />}
        mesageText={"Upgrade your ride & boost your earnings"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      <MessageCard
        icon={<AntDesign name="star" size={wp(6)} color="white" />}
        mesageText={"You receive a $3.00 tip!"}
        date={"03/04/2024"}
      />
      </SafeAreaView>
    </ScrollView>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: wp(12),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(3),
    justifyContent: "space-between",
  },
});
