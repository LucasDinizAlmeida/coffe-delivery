import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { AppRoutes } from './app.routes';
import { THEME } from '../styles/theme';
import { Notification } from '../components/Notification';
import { useState } from 'react';

export function Routes() {

  const [notification, setNotification] = useState(false)


  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.GREY_900 }}>
      <NavigationContainer>
        <AppRoutes />
        { notification && <Notification /> }
      </NavigationContainer>
    </View>
  )
}