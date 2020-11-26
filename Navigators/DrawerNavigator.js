
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen);

const Drawer = createDrawerNavigator();

export class DrawerNavigator extends Component {

    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
            </Drawer.Navigator>
        );
    }
    
}

