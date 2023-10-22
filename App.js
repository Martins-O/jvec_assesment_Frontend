import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigation from "./components/AppNavigator";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Homepage/>
      <AppNavigation />
    </>
  );
};

export default App;
