import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { AppRoutes } from './app.routes';
import { THEME } from '../styles/theme';
import { Notification } from '../components/Notification';
import Toast from 'react-native-toast-message';

export function Routes() {



  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GREY_900 }}>
      <NavigationContainer>
        <AppRoutes />
        <Toast 
          config={{
            info: () => <Notification />
          }}
          position='bottom'
          bottomOffset={(-30)}
        />
      </NavigationContainer>
    </View>
  )
}