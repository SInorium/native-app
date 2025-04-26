import { View, TextInput, StyleSheet, TextInputProps, Pressable } from 'react-native';
import { COLORS, RADIUS } from '../tokens';
import { useState } from 'react';
import { EyeOpenedIcon, EyeClosedIcon } from '../../assets/icons';

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
	},
});
