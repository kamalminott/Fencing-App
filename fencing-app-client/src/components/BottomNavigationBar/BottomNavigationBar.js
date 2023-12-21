import React from "react";
import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons"




const BottomNavigationBar = () => {

    const navigation = useNavigation();
    console.log(navigation)

    const onUserPress = () => navigation.navigate("UserProfile");

  const onPlayPress = () => navigation.navigate("ScoringRemote");

  const onTrophyPress = () => navigation.navigate("FencingNavigation");


    return(
    
    <SafeAreaView style={styles.NavContainer} >
        <SafeAreaView style={styles.NavBar}>
        <Pressable onPress={onUserPress} style={styles.IconBehave}>
            <EvilIcons name='user' size={30}/>
        </Pressable>

        <Pressable onPress={onPlayPress} style={styles.IconBehave}>
            <EvilIcons name='play' size={30}/>
        </Pressable>
          
        <Pressable onPress={onTrophyPress} style={styles.IconBehave}>
            <EvilIcons name='trophy' size={30}/>
        </Pressable>

        </SafeAreaView>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    NavContainer: {
      ...StyleSheet.absoluteFillObject,
        position: 'flex-end',
        alignItems: 'center',
      },
    
      NavBar:{
        flexDirection: 'row',
        backgroundColor: '#eee',
        width:'90%',
        justifyContent: 'space-evenly',
        borderRadius: 40,
        marginBottom: 20
      },
    
      IconBehave: {
        padding: 14
      }
})

export default BottomNavigationBar