import React, { useState } from "react";
import {Text, StyleSheet, useWindowDimensions, View, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const ResetPasswordScreen = () => {
    
    const [code, setCode] = useState('');
    const [resetPassword, setResetPassord] = useState('')

    const navigation = useNavigation();

    const onSubmitPress = () => {
        navigation.navigate("Home")
    };
    
    const onSignInPress = () => {
        navigation.navigate("SignIn")
    };

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>
            <Text>Confirmation Code</Text>
            <CustomInput 
                        placeholder={"Enter your Confirmation Code"} 
                        value={code} 
                        setValue={setCode}
                        />
            <Text>Password</Text>
            <CustomInput 
                        placeholder={'Enter your new Password'}
                        value={resetPassword}
                        setValue={setResetPassord}
                        />

            <CustomButton text={'Submit'} onPress={onSubmitPress}/>
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
export default ResetPasswordScreen