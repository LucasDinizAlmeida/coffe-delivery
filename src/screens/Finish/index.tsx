import { View, Text } from "react-native";
import { styles } from "./styles";
import Motoboy from '../../assets/Illustration.svg'
import { Button } from "../../components/Button";

export function Finish() {

    return (
        <View style={styles.container}>
            <Motoboy/>
            <View style={styles.message}>
                <Text style={styles.title}>
                    Uhul! Pedido confirmado
                </Text>
                <Text style={styles.subtitle}>
                    Agora é só aguardar que o café{'\n'}
                    chegará até você!
                </Text>
            </View>

            <View style={styles.button}>
                <Button 
                    title="IR PARA A HOME"
                />
            </View>
        </View>
    )
}