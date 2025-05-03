import React, { useRef } from 'react';
import { Animated, Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import { COLORS, FONTS, RADIUS } from '../tokens';

interface IButtonProps extends PressableProps {
	title: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
	const { title } = props;

	const animatedValue = useRef(new Animated.Value(100)).current;
	const backgroundColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [COLORS.primaryHover, COLORS.primary],
	});

	const faded = (value: number) => {
		Animated.timing(animatedValue, {
			toValue: value,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	return (
		<Pressable {...props} onPressIn={() => faded(0)} onPressOut={() => faded(100)}>
			<Animated.View style={[styles.button_wrapper, { backgroundColor }]}>
				<Text style={styles.text}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button_wrapper: {
		alignItems: 'center',
		borderRadius: RADIUS.r10,
		height: 58,
		justifyContent: 'center',
	},

	text: {
		color: COLORS.white,
		fontSize: FONTS.text18,
		fontFamily: 'FiraSansSemiBold',
	},
});
