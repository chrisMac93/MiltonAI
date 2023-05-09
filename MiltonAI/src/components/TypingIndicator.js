import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import styles from '../../styles/TypingIndicatorStyles';

const TypingIndicator = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  const animateDot = (dot, delay) => {
    Animated.sequence([
      Animated.timing(dot, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(dot, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => animateDot(dot, delay));
  };

  useEffect(() => {
    animateDot(dot1, 0);
    animateDot(dot2, 150);
    animateDot(dot3, 300);
  }, []);

  const dotStyle = (dot) => [
    styles.dot,
    {
      transform: [
        {
          translateY: dot.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -6],
          }),
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Animated.View style={dotStyle(dot1)} />
      <Animated.View style={dotStyle(dot2)} />
      <Animated.View style={dotStyle(dot3)} />
    </View>
  );
};

export default TypingIndicator;