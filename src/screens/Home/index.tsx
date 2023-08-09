import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { CardPromotion } from "../../components/CardPromotion";
import { CoffeCatalog } from "../../components/CoffeeCatalog";
import { THEME } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

import { coffesData } from "../../data/coffesData";
import { FilterButton } from "../../components/FilterButton";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolateColor, useAnimatedRef } from "react-native-reanimated";
import { IndicatorExample } from "../../components/Slide";

export function Home() {

    const [levels, setLevels] = useState(1);

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    const scrollY = useSharedValue(0)

    const scrollViewRef = useRef(null);

    const scrollToComponent = (scrollLevel: number) => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: scrollLevel, animated: true }); 
      }
    };




    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 400],
                [1, 0]
            ),
        }
    })

    const headerFilterAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 600],
                [0, 1],
                Extrapolate.CLAMP
              ),
              transform: [
                { 
                  translateY: interpolate(
                    scrollY.value,
                    [0, 600],
                    [-40, 90],
                    Extrapolate.CLAMP
                  )
                }
              ],
              backgroundColor: interpolateColor(
                scrollY.value,
                [0, 400],
                [THEME.COLORS.GREY_100, THEME.COLORS.GREY_900]
            ),
        }
    })


    const fixedHeaderStyle = useAnimatedStyle(() => {
        return {
            width: '100%',
            backgroundColor: interpolateColor(
                scrollY.value,
                [0, 400],
                [THEME.COLORS.GREY_100, THEME.COLORS.GREY_900]
            ),
        }
      })

    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
            color: interpolateColor(
                scrollY.value,
                [0, 400],
                [THEME.COLORS.GREY_900, THEME.COLORS.GREY_100]
            )
        }
    })

    const scrollHandle = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y
            console.log(event.contentOffset.y)
        }
    })
    

    function handleLevelFilter(level: number) {

        let scrollLevel: number

        switch (level) {
            case 1:
                scrollLevel = 610
                break;
            case 2:
                scrollLevel = 1510
                break;
            case 3:
                scrollLevel = 2250
                break;
            default:
                scrollLevel = 0
        }
        

        setLevels(level)
        scrollToComponent(scrollLevel)
      }
 

    return (
        <>  
            <Animated.View style={[{ position: 'absolute', zIndex: 1}, fixedHeaderStyle]}>
                <Animated.View style={[styles.containerHeader]}>
                    <View style={styles.locationContainer}>
                        <Ionicons 
                            name="location-sharp" 
                            size={24} 
                            color={THEME.COLORS.BRAND_PURPLE} 
                        />
                        <Animated.Text style={[styles.locationText, textAnimatedStyle]}>
                            Porto Alegre, RS
                        </Animated.Text>
                    </View>

                    <TouchableOpacity onPress={() => navigate('cart')}>
                        <AntDesign 
                            name="shoppingcart" 
                            size={24} 
                            color={THEME.COLORS.BRAND_YELLOW_DARK} 
                        />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[styles.filterContainer, headerFilterAnimatedStyle]}>
                    <Text style={styles.filterTitle}>
                        Nossos cafés
                    </Text>

                    <View style={styles.filter}>
                        <FilterButton 
                            title="TRADICIONAIS"
                            onPress={() => handleLevelFilter(1)}
                            isChecked={levels === 1}
                        />
                        <FilterButton 
                            title="DOCES"
                            onPress={() => handleLevelFilter(2)}
                            isChecked={levels === 2}
                        />
                        <FilterButton 
                            title="ESPECIAIS"
                            onPress={() => handleLevelFilter(3)}
                            isChecked={levels === 3}
                        />
                    </View>
                </Animated.View>
                

            </Animated.View>

            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
                onScroll={scrollHandle}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                

                <Animated.View style={[styles.content, headerAnimatedStyle]}>
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
                </Animated.View>

                <View style={{ flex: 1 }}>
            
                    <IndicatorExample />

                    <View style={styles.filterContainer}>
                        <Text style={styles.filterTitle}>
                            Nossos cafés
                        </Text>

                        <View style={styles.filter}>
                            <FilterButton 
                                title="TRADICIONAIS"
                                onPress={() => handleLevelFilter(1)}
                                isChecked={levels === 1}
                            />
                            <FilterButton 
                                title="DOCES"
                                onPress={() => handleLevelFilter(2)}
                                isChecked={levels === 2}
                            />
                            <FilterButton 
                                title="ESPECIAIS"
                                onPress={() => handleLevelFilter(3)}
                                isChecked={levels === 3}
                            />
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
                

            </Animated.ScrollView>
        </>
    )
}