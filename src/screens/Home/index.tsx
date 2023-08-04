import { View, Text, TextInput, ScrollView } from "react-native";
import { styles } from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { CardPromotion } from "../../components/CardPromotion";
import { CatalogCard } from "../../components/CatalogCard";
import { CoffeCatalog } from "../../components/CoffeeCatalog";
import { THEME } from "../../styles/theme";

export function Home() {

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.content}>
                <HeaderHome />

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
                    <CardPromotion />
                    <CardPromotion />
                    <CardPromotion />
                    <CardPromotion />
                    <CardPromotion />
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
                    <CoffeCatalog type="TRADICIONAIS"/>
                    <CoffeCatalog type="DOCES"/>
                    <CoffeCatalog type="ESPECIAS"/>
                </ScrollView>
            </View>
            

        </ScrollView>
    )
}