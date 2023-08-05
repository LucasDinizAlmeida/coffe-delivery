import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { CardPromotion } from "../../components/CardPromotion";
import { CoffeCatalog } from "../../components/CoffeeCatalog";
import { THEME } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { coffesPromotionData } from "../../data/coffesPromotionData";
import { coffesData } from "../../data/coffesData";

export function Home() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.content}>
                <HeaderHome 
                    handleNavigateCart={() => navigate('cart')}
                />

                <View style={styles.searchContainer}>
                    <Text style={styles.title}>
                        Encontre o café perfeito para {'\n'} 
                        qualquer hora do dia
                    </Text>

                    <TextInput 
                        style={styles.input}
                        placeholder="Pesquisar"
                        placeholderTextColor={THEME.COLORS.GREY_400}
                    />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <ScrollView
                    horizontal={true}
                    style={{ marginTop: -80 }}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 32 }}
                >
                    {
                        coffesPromotionData.map(item => (
                            <CardPromotion 
                                key={item.id}
                                data={item}
                                onPress={() => navigate('details', { id: item.id })}
                            />
                        ))
                    }
                    
                    {/* <CardPromotion onPress={() => navigate('details', { id: '1' })}/>
                    <CardPromotion onPress={() => navigate('details', { id: '1' })}/>
                    <CardPromotion onPress={() => navigate('details', { id: '1' })}/>
                    <CardPromotion onPress={() => navigate('details', { id: '1' })}/> */}
                </ScrollView>

                <View style={styles.filterContainer}>
                    <Text style={styles.filterTitle}>
                        Nossos cafés
                    </Text>

                    <View style={styles.filter}>
                        <View style={styles.filterButton}>
                            <Text style={styles.typeText}>TRADICIONAIS</Text>
                        </View>
                        <View style={styles.filterButton}>
                            <Text style={styles.typeText}>DOCES</Text>
                        </View>
                        <View style={styles.filterButton}>
                            <Text style={styles.typeText}>ESPECIAS</Text>
                        </View>
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={styles.itemsList}
                    showsVerticalScrollIndicator={false}
                >
                    <CoffeCatalog type="TRADICIONAIS" data={coffesData}/>
                    <CoffeCatalog type="DOCES" data={coffesData}/>
                    <CoffeCatalog type="ESPECIAIS" data={coffesData}/>
                </ScrollView>
            </View>
            

        </ScrollView>
    )
}