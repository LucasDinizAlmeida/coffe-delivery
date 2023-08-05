import { View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { HeaderDetails } from "../../components/HeaderDetails";
import { Counter } from "../../components/Counter";
import cup from '../../assets/cup.png'
import SmokeSvg from '../../assets/Smoke.svg'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

export function Details() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    function handleConfirme() {
        navigate('home')
    }

    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <HeaderDetails />

            <View style={styles.detailsContent}>
                <View>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeText}>
                            ESPECIAL
                        </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.name}>
                            Irlandês
                        </Text>
                        <Text style={styles.price}>
                            R$ 9,90
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        Bebida a base de café, uísque irlandês, açúcar e chantilly
                    </Text>
                </View>
            </View>

            {/* Posicionamento da Xícara */}
            <View style={{ zIndex: 1, position: 'absolute', bottom: 160, left: width/ 8}}>
                <View style={{ alignItems: 'center', position: 'relative'}}>
                    <SmokeSvg style={{ position: 'absolute', top: -100}}/>
                    <Image      
                        source={cup}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                
                <Text style={styles.selectVolume}>
                    Selecione o tamanho:
                </Text>
                <View style={styles.volumeContainerRow}>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>114ml</Text>
                    </View>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>140ml</Text>
                    </View>
                    <View style={styles.volumeContainer}>
                        <Text style={styles.volumeText}>127ml</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Counter amount='1' trash={false}/>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={handleConfirme}
                    >
                        <Text style={styles.titleButton}>
                            ADCIONAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}