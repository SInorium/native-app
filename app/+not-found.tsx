import { Image, StyleSheet, Text, View } from 'react-native';

import { CustomLink } from '../shared';
import { bold18, COLORS, GAPS } from '../shared/tokens';

const data = {
	message: 'Ооо... что-то пошло не так. Попробуйте вернуться на главный экран приложения',
	textLink: 'На главный экран',
	uri: require('../assets/unmatched.png'),
};

export default function NotFound() {
	return (
		<View style={styles.container}>
			<Image style={styles.image} resizeMode="contain" source={data.uri} />
			<Text style={styles.message}>{data.message}</Text>
			<CustomLink message={data.textLink} href={'/'} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 55,
		gap: GAPS.g50,
	},
	image: {
		width: 204,
		height: 282,
	},
	message: {
		...bold18,
		textAlign: 'center',
		color: COLORS.white,
	},
});
