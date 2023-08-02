import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import { CartHeader } from "../../components/CartHeader";
import { cardData } from "../../data/cartData";
import { CoffeCard } from "../../components/CoffeCard";
import { Button } from "../../components/Button";

export function Cart() {

    return (
        <View style={styles.container}>
            <CartHeader />

            <ScrollView
                contentContainerStyle={styles.itemsList}
                showsVerticalScrollIndicator={false}
            >
                {
                    cardData.map((item => (
                        <CoffeCard 
                            key={item.id}
                        />
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

                <Button title="CONFIRMAR PEDIDO"/>
            </View>
        </View>
    )
}