import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
    const navigation = useNavigation();

    const onScoringRemotePress = () => {
        console.warn('onScoringRemote')
        navigation.navigate("ScoringRemote")
    }


    const onPoulePress = () => {
        console.warn('onPoulePressed')
    }

    const onDirectEliminationPress = () => {
        console.warn('onDirectEliminationPressed')
    }

    const onPouleandDirectEliminationPressed = () => {
        console.warn('onPouleandDirectEliminationPressed')
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