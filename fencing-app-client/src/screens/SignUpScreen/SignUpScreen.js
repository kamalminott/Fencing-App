import React, { useState } from "react";
import {Text, StyleSheet, useWindowDimensions, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const navigation = useNavigation();

    const onSignInPress = () => {
        console.warn('Sign In Pressed')
        navigation.navigate("SignIn")
    }

    const onRegisterPressed = () => {
        console.warn('ConfirmEmail')
    }

    const onTermsOfUsePressed = () => {
        console.warn ('Terms Of Use Pressed')
    }
    const onPrivacyPolicyPressed = () => {
        console.warn ('Privacy Policy Pressed')
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput 
                        placeholder={"Username"} 
                        value={username} 
                        setValue={setUsername}
                        />
            <CustomInput 
                        placeholder={"Email"} 
                        value={email} 
                        setValue={setEmail}
                        />
            <CustomInput 
                        placeholder={"password"} 
                        value={password} 
                        setValue={setPassword} 
                        secureTextEntry
                        /> 
            <CustomInput 
                        placeholder={"password"} 
                        value={passwordRepeat} 
                        setValue={setPasswordRepeat} 
                        secureTextEntry
                        /> 
            <CustomButton 
                        text={'Register'}
                        onPress={onRegisterPressed}
            />
            <Text style={styles.text}>By registering, you confirm that you accept our{' '} 
            <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '} 
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy </Text>
            </Text>
            
            < SocialSignInButtons />
            <CustomButton 
            text={"Have an account? Sign In"}
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
export default SignUpScreen