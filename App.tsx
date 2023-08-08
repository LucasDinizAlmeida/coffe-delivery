
import 'react-native-gesture-handler';
import { StatusBar, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import {
  BalooDa2_700Bold,
} from '@expo-google-fonts/baloo-da-2';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { IndicatorExample } from './src/components/Slide';


export default function App() {


  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, BalooDa2_700Bold });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando fontes</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <IndicatorExample />
    </GestureHandlerRootView>
  );
}

