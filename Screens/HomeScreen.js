import { StatusBar } from 'expo-status-bar';
import React, {Component,} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TouchableOpacity, TextInput, source } from 'react-native-gesture-handler';




export class HomeScreen extends Component {



    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
      }
      
      state = {
        person: false,
        handlerClick : false,
      };
      
      async componentDidMount() {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data.results[0], loading: true})
      }    

    render(){
        return(
 
          <View  style = {styles.containere}>
          {this.state.loading || !this.state.person ? (
            
          <Text >

            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
           


    
            
            <Button width= '30%'
              height= '5em'
              borderWidth= '2em'
              borderRadius= '30'
              backgroundColor= 'black'
              color= 'black' title="Obtener persona random" onPress={this.handlerClick}
            />
            </Text>
          ) : (

          
          <Text style = {styles.pepe}>
       
          <Text style = {styles.api}>

            <Text >
            {'\n'}
            {'\n'}
            {'\n'}
            {'\n'}
            <Text>{this.state.person.name.title}</Text>
            {'\n'}
            <Text>{this.state.person.name.first} {this.state.person.name.last}</Text> 
            {'\n'}
            <Text>{this.state.person.dob.age}</Text>
            {'\n'}
            <Text> {this.state.person.location.country}</Text>
            {'\n'}

            

            </Text>
         
          </Text>
          <Image  style = {styles.imagen} source={{uri:this.state.person.picture.thumbnail}} />
          </Text>
             
          )}

        </View>
        );
    }

    handlerClick() {
        this.setState({
          loading : false
        })
      }
    
}



const styles = StyleSheet.create({
    containere: {
      
      alignItems: 'center',
      textAlign: 'center',
      alignContent: 'center',
    },
    api: {
      borderRadius: 20,
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontSize: 20,
      color: 'black',
    },

    imagen: {
      alignSelf: 'center',
      height: 150,
      width: 150,
      borderWidth: 1,
      borderRadius: 75
    },

    pepe: {
      height: 1000
    }
   


  });