import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import PoulesScreen from "../screens/PoulesScreen/PoulesScreen";
import DirectEliminationScreen from "../screens/DirectEliminationScreen/DirectEliminationScreen";
import PoulesDirectEliminationScreen from "../screens/PoulesDirectEliminationScreen/PoulesDirectEliminationScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {


    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Poules" component={PoulesScreen} />
            <Stack.Screen name="DirectElimination" component={DirectEliminationScreen} />
            <Stack.Screen name="PoulesDirectElimination"component={PoulesDirectEliminationScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigation
