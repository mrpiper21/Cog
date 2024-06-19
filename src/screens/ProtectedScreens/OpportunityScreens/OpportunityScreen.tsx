import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SortButton from "../../../component/Opportunity/SortButton";
import OpportunityCard from "../../../component/Opportunity/OpportunityCard";
import { useNavigation } from "@react-navigation/native";
import PromotionScreen from "./PromotionScreen";

const OpportunityScreen = () => {
  const navigation = useNavigation() as any;
  const [activeCategory, setActiveCategory] = useState<String>("New");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View className="bg-white py-2 border-b-2 border-gray-200">
          <View style={styles.headerContainer}>
            <Text className="text-xl font-semibold">Opportunities</Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.cancelBtn}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <SortButton
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </View>
      {activeCategory === "New" ? (
        <View>
          <View className="m-4">
            <Text className="text-lg font-semibold">Wednesday, Mar 6</Text>
          </View>
          <OpportunityCard action="save" />
          <OpportunityCard action="cancel" />
          <OpportunityCard action="save" />
          <OpportunityCard action="save" />
          <OpportunityCard action="cancel" />
        </View>
      ) : (
        activeCategory && <PromotionScreen />
      )}
    </ScrollView>
  );
};

export default OpportunityScreen;

const styles = StyleSheet.create({
  cancelBtn: {
    height: wp(8),
    width: wp(8),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    marginTop: wp(12),
    marginBottom: wp(4),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(3),
  },
});
