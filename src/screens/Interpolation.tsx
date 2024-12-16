import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../style/globalStyles'
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolate, interpolateColor} from 'react-native-reanimated'

const sqSide = 100
const sideBig = 200

const Interpolation = () => {
  const animation = useSharedValue(1)
  const [clicked, setClicked] = useState<boolean>(false)

  const animatedStyle = useAnimatedStyle(() => {
  const sideInterpolation = interpolate(animation.value, [1, 0], [sqSide, sideBig])
  const backgroundColor = interpolateColor(animation.value, [1, 0], ['orange', '#6CB4EE'])
  const radius = interpolate(animation.value, [1, 0], [0, sqSide])

    return {
      width: sideInterpolation, 
      height: sideInterpolation, 
      backgroundColor, 
      borderRadius: radius
    }
  }, [])

  const onClicked = () => {
    if(clicked) {
      animation.value = withSpring(1)
    } else {
      animation.value = withSpring(0)
    }
    setClicked(!clicked)
  }


  return (
    <View style={globalStyles.container}>
      <Animated.View style={[styles.squareContainer, animatedStyle]}/>
      <TouchableOpacity style={styles.buttonStyle} onPress={onClicked}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
   )
}

const styles = StyleSheet.create({
  squareContainer: {
    height: sqSide, 
    width: sqSide, 
    backgroundColor: 'orange'
  }, 
  buttonStyle: {
    width: 200, 
    height: 50, 
    borderWidth: 1, 
    borderColor: '#000000', 
    borderRadius: 10, 
    marginTop: 20, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default Interpolation