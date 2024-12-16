import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {globalStyles} from '../style/globalStyles';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

type GestureContext = {
  startX: number;
  startY: number;
};

const Drag = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onStart: (event, position) => {
      position.startX = x.value;
      position.startY = y.value;
    },
    onActive: (event, position) => {
      x.value = position.startX + event.translationX;
      y.value = position.startY + event.translationY;
    },
    onEnd: (event, position) => {
      x.value = withTiming(0, {duration: 700}) ;
      y.value = withTiming(0, {duration: 700});
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <GestureHandlerRootView>
      <View style={globalStyles.defPadding}>
        <Text style={globalStyles.title}>Drag the Box</Text>
        <View style={styles.container}>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.box, animatedStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Drag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'violet',
  },
});
