import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

const HomeScreen = () => {

    const onScoringRemotePress = () => {
        console.warn('onScoringRemote')
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