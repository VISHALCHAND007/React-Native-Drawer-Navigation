import {View, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const uri =
  'https://wallpapercat.com/w/full/7/d/7/1241035-2160x3840-mobile-4k-greninja-wallpaper-photo.jpg';
const {width, height} = Dimensions.get('window');

const PinchGesture = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchEvent = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>(
    {
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    },
  );

  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchEvent}>
      <AnimatedImage style={[styles.image, aStyle]} source={{uri: uri}} />
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // resizeMode: 'contain',
  },
});

export default PinchGesture;
