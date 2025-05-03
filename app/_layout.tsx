import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const insets = useSafeAreaInsets();
	const [isLoad, fontError] = useFonts({
		FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (isLoad || fontError) {
			SplashScreen.hideAsync();
		}
	}, [isLoad, fontError]);

	if (!isLoad && !fontError) return null;

	return (
		<SafeAreaProvider>
			<StatusBar barStyle={'light-content'} />
			<Stack
				screenOptions={{
					statusBarBackgroundColor: COLORS.black,
					contentStyle: {
						paddingTop: insets.top,
						backgroundColor: COLORS.black,
					},
					headerShown: false,
				}}
			>
				<Stack.Screen name="index" />
				<Stack.Screen
					name="restore"
					options={{
						presentation: 'modal',
					}}
				/>
			</Stack>
		</SafeAreaProvider>
	);
}
