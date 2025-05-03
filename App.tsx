import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Button, ErrorNotification, Input } from './shared';
import { COLORS, GAPS } from './shared/tokens';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const LOGO_PNG = require('./assets/logo.png');

const labels = {
	button: {
		enter: 'Войти',
		recoverPass: 'Восстановить пароль',
	},
	input: {
		email: 'Email',
		password: 'Пароль',
	},
};
export default function App() {
	const { button, input } = labels;
	const [error, setError] = useState('');

	const alert = () => {
		setError('Неверный пароль');
	};

	return (
		<View style={styles.container}>
			<ErrorNotification errorText={error} />
			<View style={styles.content}>
				<Image style={styles.logo} source={LOGO_PNG} resizeMode="contain" />
				<View style={styles.form}>
					<Input
						placeholder={input.email}
						maxLength={20}
						keyboardType="email-address"
						textContentType="emailAddress"
					/>
					<Input
						placeholder={input.password}
						maxLength={20}
						textContentType="password"
						isPassword
					/>
					<Button title={button.enter} onPress={alert} />
				</View>
				<Text style={styles.button}>{button.recoverPass}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.black,
		flex: 1,
		justifyContent: 'center',
		padding: 55,
	},
	content: {
		alignItems: 'center',
		gap: GAPS.g50,
	},
	form: {
		alignSelf: 'stretch',
		gap: GAPS.g16,
	},
	logo: {
		width: 220,
	},
	button: {
		backgroundColor: COLORS.primary,
	},
});
