import React from "react";
import { View, Text, Button } from "react-native";
import BottomNavigationBar from "../../components/BottomNavigationBar/BottomNavigationBar";



const BottomNavScreen = (ScreenComponent) => {

    return(props) => (

        <View style={{ flex: 1 }}>
            <ScreenComponent {...props} />
            <View >
                {/* <BottomNavigationBar navigation={props.navigation}/> */}
                <Button title="User Profile" onPress={() => props.navigation} /> 
            </View>
        </View>
    );
}


export default BottomNavScreen