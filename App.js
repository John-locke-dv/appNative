import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from './Navigators/DrawerNavigator.js';

export default class App extends Component {

  
  render(){

    return (

      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
