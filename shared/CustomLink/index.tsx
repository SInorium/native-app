import { Link, LinkProps } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { bold18, COLORS } from '../tokens';

interface ICustomLink extends LinkProps {
	message: string;
}

export const CustomLink: React.FC<ICustomLink> = ({ href, message }) => {
	return (
		<Link style={styles.link} href={href}>
			<Text>{message}</Text>
		</Link>
	);
};

const styles = StyleSheet.create({
	link: {
		...bold18,
		color: COLORS.link,
	},
});
