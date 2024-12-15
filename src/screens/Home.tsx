import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../style/globalStyles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const Home = () => {
  const scale = useSharedValue(1);

  const scaleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  }, []);

  const handlePress = () => {
    scale.value = withTiming(scale.value + 0.3);
  };

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.View style={[styles.circle, scaleAnimation]}>
          <Text style={styles.centerText}>Press</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  circle: {
    height: 150,
    width: 150,
    backgroundColor: '#FDEE00',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    color: '#fff',
  },
});
export default Home;
