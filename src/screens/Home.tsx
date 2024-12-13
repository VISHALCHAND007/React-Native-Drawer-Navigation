import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../style/globalStyles'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
    </View>
  )
}

export default Home