import React, { useState } from "react";
import {Text, StyleSheet, useWindowDimensions, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
    
    const navigation = useNavigation();

    const [code, setCode] = useState('');

    const onConfirmPress = () => {
        console.warn('onConfirmPress')
        navigation.navigate("Home")
    };

    const onResendCodePress = () => {
        console.warn('onResendCodePress')
    };
    
    const onSignInPress = () => {
        console.warn('onSignInPress')
        navigation.navigate("SignIn")
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
            <CustomInput 
                        placeholder={"Enter your confirmation code"} 
                        value={code} 
                        setValue={setCode}
                        />
            <CustomButton text={'Confirm'} onPress={onConfirmPress}/>
            <CustomButton 
                        text={"Resend Code"}
                        onPress={onResendCodePress}
                        type="SECONDARY"
            />
            <CustomButton 
                text={"Back to Sign in"}
                onPress={onSignInPress}
                type="TERTIARY"
                />
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: '#051c60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color:'#FDB075'
    }
})
export default ConfirmEmailScreen