import React from "react";
import { View, SafeAreaView, Text, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  interpolateColor,
  Extrapolate,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CardPromotion } from "../CardPromotion";
import { coffesPromotionData } from "../../data/coffesPromotionData";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

const { width, height } = Dimensions.get("screen");

const textColor = "#2A3B38";
const gray = "#A0A0A0";
const slideWidth = width * 0.60;
const slideHeight = height * 0.5;

const slides = [
  {
    text: "Code",
    icon: "code-slash",
  },
  {
    text: "Enjoy Life",
    icon: "cafe",
  },
  {
    text: "@useRNRocket",
    icon: "rocket-sharp",
  },
];

interface SlideProps {
  onPress: () => void
}

const Slide = ({ slide, scrollOffset, index, onPress }: any) => {
  const animatedStyle = useAnimatedStyle(() => {
    const input = scrollOffset.value / slideWidth;
    const inputRange = [index - 1, index, index + 1];

    return {
      transform: [
        {
          scale: interpolate(
            input,
            inputRange,
            [0.7, 1, 0.7],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          flex: 1,
          width: slideWidth,
          // height: slideHeight,
          paddingVertical: 10,
        },
        animatedStyle,
      ]}
    >
      <CardPromotion 
        data={slide}
        onPress={onPress}
    />
    </Animated.View>
  );
};


export const IndicatorExample = () => {
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around", marginTop: -100 }}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        horizontal
        snapToInterval={slideWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: (width - slideWidth) / 5,
          justifyContent: "center",
        }}
        onScroll={scrollHandler}
      >
        {coffesPromotionData.map((slide, index) => {

          const { id, description, name, price, type } = slide

          return (

            <Slide
              key={index}
              index={index}
              slide={slide}
              scrollOffset={scrollOffset}
              onPress={() => navigation.navigate('details', { id, description, name, price, type })}
            />
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};