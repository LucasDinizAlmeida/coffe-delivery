import { Dimensions } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { coffesPromotionData } from "../../data/coffesPromotionData";
import { CardPromotion } from "../CardPromotion";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { CoffesDataProps } from "../../data/coffesData";


const { width, height } = Dimensions.get("screen");

const slideWidth = width * 0.75;
const slideHeight = height * 0.5;


export function ScrollXPromotions() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()
    const { width, height } = Dimensions.get("screen");

    const scrollOffset = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
        scrollOffset.value = event.contentOffset.x;
    },
    });

    function renderItem(item: CoffesDataProps, index: number) {

        const input = scrollOffset.value / slideWidth;
        const inputRange = [index - 1, index, index + 1];

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
                        height: slideHeight,
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
        <Animated.ScrollView
            horizontal={true}
            onScroll={scrollHandler}
            style={{ marginTop: -80 }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 32 }}
        >
            {
                coffesPromotionData.map((item, index) => {

                    
                   return renderItem(item, index)
                })
            }
            
        </Animated.ScrollView>
    )
}