import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  Dimensions
} from 'react-native';
import LondonScreen from "../Openings/London.js"
export default class Openings extends Component {
  render() {
    return (
      <View>
         <ImageBackground style={styles.backgroundImage}
         source={require("../assets/RulesBg2.png")}
        
         />
          <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Home")}>
                        <Text style={styles.routeText}>Home</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.openingTab} onPress={() =>
                        this.props.navigation.navigate("London")}>
                        <Text style={styles.openingText}>London System</Text>
          </TouchableOpacity>

<TouchableOpacity style={styles.openingTab2} onPress={() =>
                        this.props.navigation.navigate("Vienna")}>
                        <Text style={styles.openingText}>Vienna Gambit</Text>
          </TouchableOpacity>

<TouchableOpacity style={styles.openingTab2} onPress={() =>
                        this.props.navigation.navigate("French")}>
                        <Text style={styles.openingText}>French Defense</Text>
          </TouchableOpacity>

<TouchableOpacity style={styles.openingTab2} onPress={() =>
                        this.props.navigation.navigate("Stonewall")}>
                        <Text style={styles.openingText}>Stonewall Dutch</Text>
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
        flex: 1,
        marginLeft: 0,
        marginRight: 270,
        marginTop: 0,
        
        borderRadius: 45,
        backgroundColor: 'black',
        opacity:1

    },
routeText: {
        fontSize: 15,   
        color: "white",
        marginTop: 0,
        paddingLeft: 10
},
backgroundImage: {
        flex: 0,
        resizeMode: 'cover',
        height: 500,
        width:340,
        marginLeft: 0,
         position: 'fixed',
       zIndex:-1,
       elevation:-1
    },
    

     openingTab: {
        flex: 1.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: 'black'
        
    },

    openingText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        marginTop: 0,
        paddingLeft: 60
    },

     openingTab2: {
        flex: 1.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 15,
        borderRadius: 30,
        backgroundColor: 'black'
        
    },
  


})