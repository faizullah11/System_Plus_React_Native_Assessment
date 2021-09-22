/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
View,
Text,
StatusBar,
LogBox

} from 'react-native';


import Entypo from 'react-native-vector-icons/dist/Entypo'; //MaterialIcons
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
function Listenings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar
                    translucent
                    barStyle="light-content"
                    //  backgroundColor="rgba(0, 0, 0, 0.251)"
                    backgroundColor='white'
                 />
      <Text>This is Listenings !!!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
const App = () => {
//  const isDarkMode = useColorScheme() === 'dark';
//StatusBar.setBarStyle('light-content', true);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

  return (
 
         <NavigationContainer>  
      <Tab.Navigator  >
   
        <Tab.Screen name="Listenings" component={Listenings}
          options={{
            tabBarLabel: 'Listenings',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="list-alt" color={color} size={size} />
            ),
            tabBarActiveTintColor:'#2c2c2c',
            headerShown:false
          }}
          
        
        />
        <Tab.Screen name="Calendar" component={Home}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="calendar" color={color} size={size} />
            ),
            headerShown:false,
         //   tabBarInactiveTintColor:'yellow'
         tabBarActiveTintColor:'#2c2c2c'
          }}
        
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  
  );
};



export default App;
