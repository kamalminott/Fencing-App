import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
import ScoringRemoteScreen from "../screens/ScoringRemoteScreen/ScoringRemoteScreen";
import TrainingOptionsScreen from "../screens/TrainingOptionsScreen/TrainingOptionsScreen";
import PoulesScreen from "../screens/PoulesScreen/PoulesScreen";
import DirectEliminationScreen from "../screens/DirectEliminationScreen/DirectEliminationScreen";
import PoulesDirectEliminationScreen from "../screens/PoulesDirectEliminationScreen/PoulesDirectEliminationScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import FencingNavigationScreen from "../screens/FencingNavigationScreen/FencingNavigationScreen";
import BottomNavScreen from "../screens/BottomNavScreen/BottomNavScreen";

const Stack = createNativeStackNavigator();


const Navigation = () => {


    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={(SignInScreen)}/>
            <Stack.Screen name="SignUp" component={BottomNavScreen(SignUpScreen)}/>
            <Stack.Screen name="ConfirmEmail" component={BottomNavScreen(ConfirmEmailScreen)}/>
            <Stack.Screen name="ForgotPassword" component={BottomNavScreen(ForgotPasswordScreen)}/>
            <Stack.Screen name="ResetPassword" component={BottomNavScreen(ResetPasswordScreen)}/>
            <Stack.Screen name="ScoringRemote" component={BottomNavScreen(ScoringRemoteScreen)}/>
            <Stack.Screen name="TrainingOptions" component={BottomNavScreen(TrainingOptionsScreen)} />
            <Stack.Screen name="Poules" component={BottomNavScreen(PoulesScreen)} />
            <Stack.Screen name="DirectElimination" component={BottomNavScreen(DirectEliminationScreen)} />
            <Stack.Screen name="PoulesDirectElimination"component={(PoulesDirectEliminationScreen)} />
            <Stack.Screen name="UserProfile" component={BottomNavScreen(UserProfileScreen)} />
            <Stack.Screen name="FencingNavigation" component={BottomNavScreen(FencingNavigationScreen)} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation