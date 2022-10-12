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
export default class Home extends Component {
  render() {
    return (
      <View>
        
        <ImageBackground style={styles.backgroundImage}
         source={require("../assets/ChessPosition.png")}
        
         />
           <TouchableOpacity style={styles.topCard} onPress={() =>
                        this.props.navigation.navigate("Rules")}>
                        <Text style={styles.routeText}>Rules</Text>
           </TouchableOpacity>     
            
            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Archive")}>
                        <Text style={styles.routeText}>Archive</Text>
           </TouchableOpacity>    
          
           <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Courses")}>
                        <Text style={styles.routeText}>Courses</Text>
           </TouchableOpacity>    
           
           <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Openings")}>
                        <Text style={styles.routeText}>Openings</Text>
           </TouchableOpacity>    
           <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Board")}>
                        <Text style={styles.routeText}>Board</Text>
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
        flex: 0.25,
        marginLeft: 0,
        marginRight: 200,
        marginTop: 3,
        borderRadius: 45,
        backgroundColor: 'black',
        opacity:0.8

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
  
 topCard: {
        flex: 0.25,
        marginLeft: 0,
        marginRight: 200,
        marginTop: 20,
        borderRadius: 45,
        backgroundColor: 'black',
        opacity:0.8
 } 

    

})