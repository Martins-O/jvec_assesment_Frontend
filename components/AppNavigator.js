import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ContactsList from './ContactsList';
import CreateContact from './CreateContact';
import Homepage from "./Homepage";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CreateContact" component={CreateContact} />
        <Tab.Screen name="ContactsList" component={ContactsList} />
        <Tab.Screen name="Homepage" component={Homepage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
