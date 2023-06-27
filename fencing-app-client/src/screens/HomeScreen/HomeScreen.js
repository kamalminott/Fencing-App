import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/CustomButton";

const HomeScreen = () => {
  const navigation = useNavigation();

    const onScoringRemotePress = () => {
        console.warn('onScoringRemote')
    }

    const onPoulePress = () => {
      console.warn('onPoulePressed');
      navigation.navigate("Poules");
    };

    const onDirectEliminationPress = () => {
        console.warn('onDirectEliminationPressed');
        navigation.navigate("DirectElimination");
    }

    const onPouleandDirectEliminationPressed = () => {
        console.warn('onPouleandDirectEliminationPressed');
        navigation.navigate("PoulesDirectElimination");
    }

return(

    <View>
    <Text>Home Screen</Text>
    <CustomButton text={"Scoring Remote"} onPress={onScoringRemotePress}/>
    <CustomButton text={"Poules"} onPress={onPoulePress}/>
    <CustomButton text={"Direct Elimination"} onPress={onDirectEliminationPress}/>
    <CustomButton  text={"Poules & Direct Elimination"} onPress={onPouleandDirectEliminationPressed}/>
    </View>
)
}

export default HomeScreen
