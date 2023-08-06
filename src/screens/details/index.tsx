import { View, Text, TouchableOpacity, Image, useWindowDimensions, Alert } from "react-native";
import { styles } from "./styles";
import { HeaderDetails } from "../../components/HeaderDetails";
import { Counter } from "../../components/Counter";
import cup from '../../assets/cup.png'
import SmokeSvg from '../../assets/Smoke.svg'
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { CoffeCartItemProps } from "../../data/cartData";
import { coffeCartAdd } from "../../storage/coffeCartStorage";

interface Params { 
    id: string
    type: string
    name: string
    price: string
    description: string
  }

export function Details() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()
    const route = useRoute()
    const { id, name, type, description, price } = route.params as Params

    async function handleConfirme() {

        try {
            const newCoffe: CoffeCartItemProps = {
                id,
                name,
                amount: '1',
                image: 'fake-image',
                price,
                volume: '270ml'
            }

            coffeCartAdd(newCoffe)
            navigate('home')
            
        } catch (error) {
            Alert.alert('Opa', 'Não foi possível adicionar o item no carrinho.');
        }
    }

    const { width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <HeaderDetails />

            <View style={styles.detailsContent}>
                <View>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeText}>
                            {type}
                        </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.name}>
                            {name}
                        </Text>
                        <Text style={styles.price}>
                            {price}
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        {description}
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
                        <Text style={styles.volumeText}>227ml</Text>
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