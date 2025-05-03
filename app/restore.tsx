import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

import { COLORS } from '../shared/tokens';

export default function RestorePage() {
	return (
		<View>
			<Link href={'/'}>
				<Text style={{ color: COLORS.white }}>RestorePage</Text>
			</Link>
		</View>
	);
}
