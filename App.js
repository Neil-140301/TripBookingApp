import React from 'react';
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { Image, TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Onboarding from './screens/Onboarding';
import DestinationDetail from './screens/DestinationDetail';

import { COLORS, SIZES, FONTS, icons } from './constants';
import Tabs from './navigation/Tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
              shadowColor: 'transparent',
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding,
                }}
                onPress={() => {
                  console.log('Hi');
                }}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{
            headerShown: false,
          }}
        />

        {/* tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={({ navigation }) => {
            return {
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    style={{
                      marginLeft: SIZES.padding,
                    }}
                    onPress={() => navigation.goBack()}
                  >
                    <Image
                      source={icons.back}
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </TouchableOpacity>
                );
              },
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    marginRight: SIZES.padding,
                  }}
                >
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
