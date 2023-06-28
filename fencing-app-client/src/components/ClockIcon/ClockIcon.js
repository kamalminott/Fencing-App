import react, {useState} from "react";
import { View, TouchableOpacity, Modal, Text, TextInput, Button } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons"

const ClockIcon = () => {
    const [minutes, setMinutes] = useState("0")
    const [seconds, setSeconds] = useState("0")
    
    const [isClockModalVisible, setIsClockModalVisible] = useState(false);
    
    const setTimer = () => {
        setIsClockModalVisible(false)
    }
    
    toggleClockModal = () => { 
        setIsClockModalVisible(!isClockModalVisible);
    }
return(
<View>
    <TouchableOpacity onPress={toggleClockModal}>
        <EvilIcons name="clock" size={32} />
    </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={isClockModalVisible}
            onRequestClose={toggleClockModal}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
                        <Text>Set Timer</Text>
                            <TextInput 
                                    value={minutes}
                                    onChangeText={setMinutes}
                                    keyboardType="number-pad"
                                    placeholder="Minutes"
                                />
                            <TextInput 
                                    value={seconds}
                                    onChangeText={setSeconds}
                                    keyboardType="number-pad"
                                    placeholder="Seconds"
                                />
                            <Button onPress={setTimer} title="Set Timer" />
                    </View>
                </View>
        </Modal>
    </View>
        );
    }

export default ClockIcon