import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

const AnimatedCard = () => {
  const flip = useSharedValue(0);
  //get images
  const frontImg = require('../assets/Image/front.jpeg');
  const backImg = require('../assets/Image/back.png');

  const flipFront = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${flip.value}deg`}],
      opacity: flip.value < 90 ? 1 : 0,
    };
  });

  const flipBack = useAnimatedStyle(() => {
    return {
      transform: [{perspective: 1000}, {rotateY: `${flip.value}deg`}],
      opacity: flip.value >= 90 ? 1 : 0,
    };
  });

  const handleFlip = () => {
    flip.value = withSpring(flip.value === 0 ? 180 : 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
          <Animated.View style={[flipFront, styles.animatedView]}>
            <Image
              source={frontImg}
              style={{
                width: 220,
                height: 150,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
            <Text style={styles.text}>Front Side</Text>
          </Animated.View>
          <Animated.View style={[flipBack, styles.animatedView]}>
            <Image
              source={backImg}
              style={{
                width: 220,
                height: 150,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
            />
            <Text style={styles.text}>Back Side</Text>
          </Animated.View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleFlip}>
        <Text style={styles.text}>Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  cardContainer: {
    height: 180,
    width: 280,
    position: 'relative',
  },
  animatedView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  text: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: '#333',
  },
  btn: {
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    marginTop: 15,
  },
});
