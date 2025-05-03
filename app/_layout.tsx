import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '../shared/tokens';

export default function RootLayout() {
	const insets = useSafeAreaInsets();
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
