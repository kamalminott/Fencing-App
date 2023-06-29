import react, {useState} from "react";
import { View, Text, TouchableOpacity, Modal, Button } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons"

const ResetIcon = () => {

    const [isResetModalVisible, setIsResetModalVisible] = useState(false);

    toggleResetModal = () => {
        setIsResetModalVisible(!isResetModalVisible)
    }

    const reset = () => {
        setIsResetModalVisible(false)
    }

    return(
        <View>

            <TouchableOpacity onPress={toggleResetModal}>
            <EvilIcons name="refresh" size={32} />
            </TouchableOpacity>

            <Modal
           animationType="slide"
           transparent={true}
           visible={isResetModalVisible}
           onRequestClose={toggleResetModal}
           >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
                    <Button onPress={reset} title="Reset"/> 
                    </View>
                </View>
           </Modal>
        </View>
    )
}

export default ResetIcon