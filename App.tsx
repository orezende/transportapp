import React from 'react';
import { AppLoading } from 'expo';
import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    useFonts,
} from '@expo-google-fonts/roboto';

import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import colors from './src/styles/colors';

export default function App() {
    const [fontsLoaded] = useFonts({
        roboto_400: Roboto_400Regular,
        roboto_500: Roboto_500Medium,
        roboto_700: Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <NavigationContainer>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.primary}
                    translucent
                />
                <View style={{ flex: 1, backgroundColor: '#312e38' }}>
                    <Routes />
                </View>
            </NavigationContainer>
        </>
    );
}
