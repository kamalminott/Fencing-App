import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {

  const navigation = useNavigation();

 const FencingNavigationScreen = () => {
  navigation.navigate("FencingNavigation")
 }

  return (
    <View>
      <Text>User Profile Screen</Text>
      <Button onPress={FencingNavigationScreen} title={"Fencing Navigation"} />
    </View>
  );
};

export default UserProfileScreen;
