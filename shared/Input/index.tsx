import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { EyeClosedIcon, EyeOpenedIcon } from '../../assets/icons';
import { COLORS, RADIUS } from '../tokens';

export const Input = (
	props: TextInputProps & {
		isPassword?: boolean;
	},
) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<TextInput
				{...props}
				style={styles.input}
				placeholderTextColor={COLORS.gray}
				secureTextEntry={!isPasswordVisible}
			/>
			{props.isPassword && (
				<Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
					{isPasswordVisible ? <EyeOpenedIcon /> : <EyeClosedIcon />}
				</Pressable>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: COLORS.violetDark,
		borderRadius: RADIUS.r10,
		flexDirection: 'row',
		paddingHorizontal: 24,
	},
	input: {
		color: COLORS.gray,
		flex: 1,
		fontSize: 16,
		height: 58,
		lineHeight: 1.2,
		fontFamily: 'FiraSansRegular',
	},
});
