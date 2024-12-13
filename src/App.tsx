import React from 'react';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          drawerStyle: {
            width: 300, 
            backgroundColor: '#e6e6e6'
          }, 
          drawerLabelStyle: {
            fontSize: 18,
            color: '#333'
          }, 
          headerStyle: {
            backgroundColor: '#fff'
          }, 
          drawerActiveBackgroundColor: '#F8DE7E', 
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;