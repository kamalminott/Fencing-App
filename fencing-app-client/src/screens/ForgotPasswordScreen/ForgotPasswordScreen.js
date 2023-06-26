import React, { useState } from "react";
import {Text, StyleSheet, useWindowDimensions, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    
    
    const [username, setUsername] = useState('');

    const onSendPress = () => {
        console.warn('onSendPress')
        navigation.navigate("ResetPassword")
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
            <Text style={styles.title}>Reset your Password</Text>
            <CustomInput 
                        placeholder={"Username"} 
                        value={username} 
                        setValue={setUsername}
                        />
            <CustomButton text={'Send'} onPress={onSendPress}/>
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
export default ForgotPasswordScreen