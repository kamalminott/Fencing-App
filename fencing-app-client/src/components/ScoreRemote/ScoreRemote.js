import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import CountDown from 'react-native-countdown-component';
import ClockIcon from "../ClockIcon/ClockIcon";
import ResetIcon from "../ResetIcon/ResetIcon";
import { useNavigation } from "@react-navigation/native";


const ScoreRemote = () => {
    const navigation = useNavigation();

//     //Declaring Scoring variable
//     const [opponent1Score, setOpponent1Score] = useState(0);
//     const [opponent2Score, setOpponent2Score] = useState(0)

//     const [time, setTime] = useState(180);

//     //Round Counting Constant
//     const [roundTotal, setRoundTotal] = useState(0);

//     const [isRunning, setIsRunning] = useState(false)

    
    
//    const incrementValue1 = () => {
//         setOpponent1Score(opponent1Score + 1);
//     }
//   const  incrementValue2 = () => {
//         setOpponent2Score(opponent2Score + 1);
//     }

//   const  decrementValue1 = () => {
//         if (opponent1Score > 0){
//         setOpponent1Score(opponent1Score - 1);
//         }
//     }

//   const  decrementValue2 = () => {
//         if (opponent2Score > 0) {
//         setOpponent2Score(opponent2Score - 1);
//         }
//     }
//    const roundIncrement = () => {
//         setRoundTotal(roundTotal + 1);
//     }
//   const roundDecrement = () => {
//         if (roundTotal > 0) {
//         setRoundTotal(roundTotal - 1);
//         }
        
//     }

//   const toggleRunning = () => {
//         setIsRunning(!isRunning);
//     }
    
    
    return (
        <View>
            <Button title="Go to User Profile" onPress={() => navigation.navigate('UserProfile') } />
            {/* <ResetIcon />
            <ClockIcon  />
            <Text >{"Opponent 1 Name:" + ' ' + opponent1Score} </Text>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={decrementValue1} title="Decrease"/>
                <Text> </Text>
                <Button  onPress={incrementValue1} title="Increase"/>
            </View>
            <Text >{"Opponent 2 Name:" + ' ' + opponent2Score} </Text>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={decrementValue2} title="Decrease"/>
                <Text> </Text>
                <Button  onPress={incrementValue2} title="Increase"/>
            </View>
            <Text >{"Round:" + ' ' + roundTotal} </Text>
            <View style={{flexDirection: 'row'}}>
                <Button onPress={roundDecrement} title="Decrease"/>
                <Text> </Text>
                <Button  onPress={roundIncrement} title="Increase"/>
            </View>
            <CountDown
            size={30}
            timeToShow={['M','S']}
            until={time}
            running={isRunning}
            timeLabels={{m:'mins', s:'secs'}}
            showSeparator={false}
            />
            <Button onPress={toggleRunning} title={isRunning ? "Pause" : "Start"} /> */}

        </View>

    );

};


export default ScoreRemote