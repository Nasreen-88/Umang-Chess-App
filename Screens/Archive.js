import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
export default class Archive extends Component {

  constructor() {
    super();
    this.state = {
      oppo1: '',
      oppo2:'',
      rating1:'',
      rating2:'',
      game:''
    };
  }
  render() {
    return (
      <View>
         
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Home")}>
                        <Text style={styles.routeText}>Home</Text>
          </TouchableOpacity>

<TextInput
          placeholder='Player 1'
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ oppo1: text });
          }}
          value={this.state.oppo1}
        />

        <TextInput
          placeholder='Player 1 rating'
          style={styles.inputBox2}
          onChangeText={text => {
            this.setState({ rating1: text });
          }}
          value={this.state.oppo1}
        />



        <TextInput
          placeholder='Player 2'
          style={styles.inputBox2}
          onChangeText={text => {
            this.setState({ oppo2: text });
          }}
          value={this.state.oppo1}
        />


        

        <TextInput
          placeholder='Player 2 rating'
          style={styles.inputBox2}
          onChangeText={text => {
            this.setState({ rating2: text });
          }}
          value={this.state.oppo1}
        />
         
      </View>
    );
  }
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    routeCard: {
        flex: 0.95,
        marginLeft: 0,
        marginRight: 250,
        marginTop: 0,
        
        borderRadius: 45,
        backgroundColor: 'black',
        opacity:1

    },
routeText: {
        fontSize: 15,   
        color: "white",
        marginTop: 0,
        paddingLeft: 15
},
backgroundImage: {
        flex: 0,
        resizeMode: 'cover',
        height: 340,
        width:340,
        marginLeft: 0,
    },

    inputBox: {
    marginTop: 50,
    width: '40%',
    marginRight:100,
    height: 25,
    textAlign:'center',
    borderWidth: 4,
    outline: 'none',
    
  },
  
 inputBox2: {
    marginTop: 20,
    width: '40%',
    marginRight:100,
    height: 25,
    textAlign:'center',
    borderWidth: 4,
    outline: 'none',
    
  },

})