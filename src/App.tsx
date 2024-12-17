import React from 'react';
import Home from './screens/Home';
import Interpolation from './screens/Interpolation';
import Profile from './screens/FadeIn';
import Drag from './screens/Drag';
import AnimatedCard from './screens/AnimatedCard';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DocumentPicker from './screens/DocumentPicker';

function App(): React.JSX.Element {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Document-Picker"
        screenOptions={{
          headerTitleAlign: 'center',
          drawerStyle: {
            width: 300,
            backgroundColor: '#e6e6e6',
          },
          drawerLabelStyle: {
            fontSize: 18,
            color: '#333',
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
          drawerActiveBackgroundColor: '#F8DE7E',
        }}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Fade-in' component={Profile} />
        <Drawer.Screen name='Interpolation' component={Interpolation} />
        <Drawer.Screen name="Drag-Comp" component={Drag} />
        <Drawer.Screen name="Animated Card" component={AnimatedCard} />
        <Drawer.Screen name='Document-Picker' component={DocumentPicker} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
