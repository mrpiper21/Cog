import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface AuthProps {
  title: String;
  route: String;
}

const AuthItem: React.FC<AuthProps> = ({ title, route }) => {
  const navigation = useNavigation() as any;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.authContainer}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo
          style={{ marginRight: wp(2) }}
          name="text-document-inverted"
          size={wp(8)}
          color="black"
        />
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: wp(3.4),
            }}
          >
            {title}
          </Text>
          <Text>Get Started</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default AuthItem;

const styles = StyleSheet.create({
  backButton: {
    height: wp(10),
    width: wp(10),
    marginTop: hp(4),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  authContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    paddingVertical: wp(4),
    borderBottomColor: "lightgray",
  },
});
