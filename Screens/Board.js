import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
export default class Board extends Component {
  render() {
    return (
      <View>
        <Text> This is Archive </Text>
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Home")}>
                        <Text style={styles.routeText}>Home</Text>
          </TouchableOpacity>
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
  


})