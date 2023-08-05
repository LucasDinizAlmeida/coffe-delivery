import { View, Text } from "react-native";
import { styles } from "./styles";
import Motoboy from '../../assets/Illustration.svg'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

export function Finish() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

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
                    onPress={() => navigate('home')}
                    title="IR PARA A HOME"
                />
            </View>
        </View>
    )
}