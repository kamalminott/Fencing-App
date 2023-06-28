import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";

const FencingNavigationScreen = () => {
  const navigation = useNavigation();

  const onTrainingOptionsPress = () => {
    navigation.navigate("TrainingOptions");
  };

  return (
    <View>
      <Text>Fencing Navigation</Text>
      <CustomButton text="Training Options" onPress={onTrainingOptionsPress} />
    </View>
  );
};

export default FencingNavigationScreen;
