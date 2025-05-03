import React from 'react';
import { View } from 'react-native';

import { CustomLink } from '../shared/CustomLink';

export default function RestorePage() {
	return (
		<View>
			<CustomLink message={'RestorePage'} href={'/'} />
		</View>
	);
}
