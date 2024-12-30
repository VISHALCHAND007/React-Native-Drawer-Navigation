import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from '../redux/slice/counterSlice';
import {RootState} from '../redux/store/store';

const ReduxOperations = () => {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
        <View style={styles.titleContainer}>
          <Text style={styles.valueTxt}>Counter: {value}</Text>
        </View>
      </View>
      <View style={styles.btmContainer}>
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
        <Button title="Reset" onPress={() => dispatch(reset())} />
        <Button title="Increment" onPress={() => dispatch(increment())} />
      </View>
    </View>
  );
};

export default ReduxOperations;

const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueTxt: {
    color: '#000000',
    fontSize: 22,
    backgroundColor: 'white',
    padding: 15,
  },
  btmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
