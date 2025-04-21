import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  SafeAreaView,
  Animated,
} from "react-native";
import { COLORS, FONTS } from "../tokens";

interface IErrorNotification {
  errorText: string;
}

export const ErrorNotification: React.FC<IErrorNotification> = ({
  errorText,
}) => {
  const [isShown, setIsShown] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const animatedValue = new Animated.Value(-100);
  const onEnter = Animated.timing(animatedValue, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  }).start();

  useEffect(() => {
    if (!errorText) return;

    setIsShown(true);
    const timeout = setTimeout(() => setIsShown(false), 3000);

    return () => clearTimeout(timeout);
  }, [errorText]);

  if (!isShown) return <></>;

  return (
    <Animated.View
      style={[
        styles.error_container,
        {
          width: windowWidth,
          transform: [
            {
              translateY: animatedValue,
            },
          ],
        },
      ]}
      onLayout={onEnter}
    >
      <Text style={styles.error_text}>{errorText}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  error_container: {
    position: "absolute",
    top: 50,
    alignContent: "center",
    padding: 15,
    backgroundColor: COLORS.red,
  },
  error_text: {
    fontSize: FONTS.text16,
    color: COLORS.white,
  },
});
