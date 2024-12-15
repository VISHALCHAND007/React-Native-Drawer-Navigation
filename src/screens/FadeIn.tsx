import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../style/globalStyles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const side = 130;

const Profile = () => {
  const opacity = useSharedValue(0);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, []);

  const fadeIn = () => {
    opacity.value = withTiming(1, {duration: 2000});
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fade In Animation</Text>

      <Animated.View style={[styles.circle, opacityStyle]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    textDecorationLine: 'underline',
  },
  circle: {
    height: side,
    width: side,
    backgroundColor: '#FDEE00',
    borderRadius: side / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default Profile;
