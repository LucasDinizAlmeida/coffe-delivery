import { ScrollView, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import { CartHeader } from "../../components/CartHeader";
import { CoffeCartItemProps, cardData } from "../../data/cartData";
import { HouseLine, Trash } from 'phosphor-react-native';
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../../components/Loading";
import { cartGetAll, cartItemRemove } from "../../storage/coffeCartStorage";
import { Swipeable } from "react-native-gesture-handler";
import { THEME } from "../../styles/theme";
import { CoffeCard } from "../../components/CoffeCard";

export function Cart() {
    const [isLoading, setIsLoading] = useState(true);
    const [coffeCardList, setCoffeCardList] = useState<CoffeCartItemProps[]>([])

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    const swipeableRefs = useRef<Swipeable[]>([])

    function handleConfirme() {
        navigate('finish')
    }

    async function fetchCartItems() {
        const response = await cartGetAll()
        setCoffeCardList(response)
        setIsLoading(false)
    }

    async function removeItem(id: string) {
        await cartItemRemove(id)
        const itemIndex = coffeCardList.findIndex(item => item.id === id) 
        console.log(itemIndex)
        if(itemIndex > -1) {
            const newCoffeCardList = coffeCardList.filter(item => item.id !== id)
            console.log(newCoffeCardList)
            setCoffeCardList(newCoffeCardList)
        }
      }

    function handleRemove(id: string, index: number) {
        swipeableRefs.current?.[index].close()

        Alert.alert(
          'Remover',
          'Deseja remover esse registro?',
          [
            {
              text: 'Sim', onPress: async() => removeItem(id)
            },
            { text: 'Não', style: 'cancel' }
          ]
        );
    
      }

    useEffect(() => {
        fetchCartItems();
      }, []);

    if (isLoading) {
        return <Loading />
      }

    return (
        <View style={styles.container}>
            <CartHeader />

            <ScrollView
                contentContainerStyle={styles.itemsList}
                showsVerticalScrollIndicator={false}
            >
                {

                    coffeCardList.map(((item, index) => (
                        <Swipeable
                            key={item.id}
                            ref={(ref) => {
                            if(ref) {
                                swipeableRefs.current.push(ref)
                            }
                            }}
                            onSwipeableOpen={() => handleRemove(item.id, index)}
                            leftThreshold={10}
                            overshootLeft={false}
                            renderRightActions={() => null}
                            renderLeftActions={() => (
                            <View
                                style={styles.swipeableRemove}
                            >
                                <Trash size={32} color={THEME.COLORS.RED_DARK}/>
                            </View>
                            )}
                        >
                            <CoffeCard 
                                removeItem={() => handleRemove(item.id, index)}
                                data={item}
                            />
                        </Swipeable>
                    )))
                }
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalTitle}>
                        Valor Total
                    </Text>

                    <Text style={styles.totalCount}>
                        R$ 9,90
                    </Text>
                </View>

                <Button 
                    title="CONFIRMAR PEDIDO" 
                    selectColor="yellow"
                    onPress={handleConfirme}    
                />
            </View>
        </View>
    )
}