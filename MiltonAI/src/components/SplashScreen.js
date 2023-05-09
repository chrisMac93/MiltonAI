import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  Easing,
  runOnJS,
  withRepeat,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

const SplashScreen = ({ onAnimationEnd }) => {
  const catOpacity = useSharedValue(1);
  const textOpacity = useSharedValue(0);

  useEffect(() => {
    catOpacity.value = withRepeat(
      withTiming(0, {
        duration: 200,
        easing: Easing.linear,
      }),
      10,
      true,
      (isFinished) => {
        if (isFinished) {
          catOpacity.value = withTiming(
            0,
            {
              duration: 2000,
              easing: Easing.linear,
            },
            () => {
              runOnJS(onAnimationEnd)();
            }
          );
          textOpacity.value = withTiming(1, {
            duration: 2000,
            easing: Easing.linear,
          });
        }
      }
    );
  }, []);

  const catAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: catOpacity.value,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.centered, catAnimatedStyle]}>
        <Icon name="cat" size={60} color="#9C25F5" />
      </Animated.View>
      <Animated.Text style={[styles.text, textAnimatedStyle]}>
        MILTON AI
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    position: "absolute",
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#9C25F5",
  },
});

export default SplashScreen;
