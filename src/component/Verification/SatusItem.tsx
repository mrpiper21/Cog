import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

interface AuthProps {
  status?: "Submitted" | "completed" | "unCompleted" | undefined;
  profilePic?: String
  title: String;
  route: String;
}

const SatusItem: React.FC<AuthProps> = ({ title, route, status, profilePic }) => {
  const navigation = useNavigation() as any;
  return (
    <>
      {status === "unCompleted" ? (
        <TouchableOpacity
          onPress={() => route && navigation.navigate(route)}
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
              <Text style={styles.txt}>{title}</Text>
              <Text>Get Started</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      ) : status === "Submitted" ? (
        <View>
          <Text className="text-lg font-bold">Submitted</Text>
          <View style={styles.submittedContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                style={{ marginRight: wp(2) }}
                name="clockcircle"
                size={wp(8)}
                color="gray"
              />
              <View>
                <Text style={styles.txt}>{title}</Text>
                <Text className="text-gray-500">under review</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </View>
      ) : (
        status === "completed" && (
          <View>
            <Text className="text-lg font-bold">Completed</Text>
            <View style={styles.authContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  style={{ marginRight: wp(2) }}
                  name="clockcircle"
                  size={wp(8)}
                  color="gray"
                />
                <View>
                  <Text style={styles.txt}>{title}</Text>
                  <Text className="text-green-300">approved by Glopilot</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
        )
      )}
      <>{profilePic && (
          <View>
            <Text className="text-lg font-bold">Completed</Text>
            <View style={styles.authContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{marginRight: wp(2)}} name="checkcircle" size={wp(8)} color="lightgreen" />
                <View>
                  <Text style={styles.txt}>{title}</Text>
                  <Text className="text-green-300">Uploaded succefully</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </View>
        )}</>
    </>
  );
};

export default SatusItem;

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
  txt: {
    fontWeight: "600",
    fontSize: wp(3.4),
  },
  submittedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    paddingVertical: wp(6),
    borderBottomColor: "lightgray",
  },
});
