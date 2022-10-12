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
export default class Vienna extends Component {
  render() {
    return (

      <View>
        
      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Openings")}>
                        <Text style={styles.routeText}>Back</Text>
          </TouchableOpacity>
      <Text>This is the Vienna Gambit Screen</Text>
      
      
      </View>
    )


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


}
)