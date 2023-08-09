import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { coffesPromotionData } from "../../data/coffesPromotionData";
import { CardPromotion } from "../CardPromotion";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { CoffesDataProps } from "../../data/coffesData";
import { Dimensions, SafeAreaView } from "react-native";


const { width, height } = Dimensions.get("screen");
const slideWidth = width * 0.75;

export function ScrollXPromotions() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    const scrollOffset = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
        scrollOffset.value = event.contentOffset.x;
        console.log(Math.floor(scrollOffset.value / slideWidth))
    },
    });

    function renderItem(item: CoffesDataProps, index: number, scrollOffsetValue: number) {

        const input = Math.floor(scrollOffsetValue / slideWidth);// largura do card de 208 mais o paddingHorizontal de 32
        const inputRange = [index - 1, index, index + 1];
        console.log(inputRange)

        const animatedStyle = useAnimatedStyle(() => {
            return {
                transform: [{
                    scale: interpolate(
                        input,
                        inputRange,
                        [0.8, 1, 0.8],
                        Extrapolate.CLAMP
                    ),
                },],
            };
        });


        return (
            <Animated.View 
                key={index} 
                style={[
                    animatedStyle,
                    {
                        flex: 1,
                        width: slideWidth,
                        paddingVertical: 10,
                    }
                ]}
            >
                <CardPromotion 
                    data={item}
                    onPress={() => navigate('details', item)}
                />
            </Animated.View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-around", marginTop: -80 }}>
            <Animated.ScrollView
                horizontal={true}
                onScroll={scrollHandler}
                snapToInterval={slideWidth}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: "center",
                    paddingHorizontal: (width - slideWidth) / 2,
                    justifyContent: "center",
                  }}
            >
                {
                    coffesPromotionData.map((item, index) => {

                        
                    return renderItem(item, index, scrollOffset.value)
                    })
                }
                
            </Animated.ScrollView>           
        </SafeAreaView>
    )
}