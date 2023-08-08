import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Finish } from '../screens/Finish';
import { Details } from '../screens/details';
import { Cart } from '../screens/Cart';
import { Splash } from '../screens/Splash';

type RootParamlist = {
  splash: undefined;
  home: undefined;
  details: { 
    id: string
    type: string
    name: string
    price: string
    description: string
  };
  cart: undefined;
  finish: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<RootParamlist>

const { Navigator, Screen } = createNativeStackNavigator<RootParamlist>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
        <Screen
            name="splash"
            component={Splash}
        />
        <Screen
            name="home"
            component={Home}
        />
        <Screen
            name="details"
            component={Details}
        />
            
        <Screen
            name="cart"
            component={Cart}
            />
        <Screen
            name="finish"
            component={Finish}
        />
    </Navigator>
  )
}