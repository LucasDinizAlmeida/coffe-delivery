import { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";
import { HeaderHome } from "../../components/HeaderHome";
import { CardPromotion } from "../../components/CardPromotion";
import { CoffeCatalog } from "../../components/CoffeeCatalog";
import { THEME } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { coffesPromotionData } from "../../data/coffesPromotionData";
import { coffesData } from "../../data/coffesData";
import { FilterButton } from "../../components/FilterButton";

export function Home() {

    const [levels, setLevels] = useState([1, 2, 3]);

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    function handleLevelFilter(level: number) {
        const levelAlreadySelected = levels.includes(level);
    
        if (levelAlreadySelected) {
          if (levels.length > 1) {
            setLevels(prevState => prevState.filter(item => item !== level));
          }
        } else {
          setLevels(prevState => [...prevState, level]);
        }
      }

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
                                onPress={() => navigate('details', item)}
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
                        <FilterButton 
                            title="TRADICIONAIS"
                            onPress={() => handleLevelFilter(1)}
                            isChecked={levels.includes(1)}
                        />
                        <FilterButton 
                            title="DOCES"
                            onPress={() => handleLevelFilter(2)}
                            isChecked={levels.includes(2)}
                        />
                        <FilterButton 
                            title="ESPECIAIS"
                            onPress={() => handleLevelFilter(3)}
                            isChecked={levels.includes(3)}
                        />
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={styles.itemsList}
                    showsVerticalScrollIndicator={false}
                >   
                    { levels.includes(1) && <CoffeCatalog type="TRADICIONAIS" data={coffesData}/>}
                    { levels.includes(2) && <CoffeCatalog type="DOCES" data={coffesData}/>}
                    { levels.includes(3) && <CoffeCatalog type="ESPECIAIS" data={coffesData}/>}
                   
                </ScrollView>
            </View>
            

        </ScrollView>
    )
}