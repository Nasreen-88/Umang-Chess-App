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
export default class Rules extends Component {
  render() {
    return (
      <View>     
         <ImageBackground 
         source={require("../assets/RulesBg.png")}
        style={styles.backgroundImage}
        
         />  
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Home")}>
                        <Text style={styles.routeText}>Home</Text>
          </TouchableOpacity>
          <View>
             
             <Text style={styles.text}>The Rules of chess are pretty simple to understand. First we will talk about the pieces.</Text>

             <Text style={styles.text2}>There are 6 pieces in total; the Pawn, the Knight, the Bishop, the Rook, the Queen, and the final and most important on the board, the King</Text>

             <Text style={styles.text2}>The Pawn can only move forward one step, unless it is on it's starting square, then it can move one or two steps. However, the pawn cannot move forward 2 steps again if it moved either one or two squares from the starting square.It also captures diagonally to one square as well. There are 8 on the board for both colours on their respective second ranks. It is worth 1 point of material. It's sign is P, but it is usually not used in notation</Text>
             <Image source={require("../assets/PawnMoves.png")} style={styles.image}></Image>
          
           <Text style={styles.text2}>
           The Knight moves in a peculiar way; it can jump over any piece, and it will always move two steps in any direction, and then one step to the left or the right, creating an L-shape as it does so. There are two Knights for both players on the board. It is worth 3 points of material. It's sign is N.   </Text>

<Image source={require("../assets/KnightMoves.png")} style={styles.image}></Image>

 <Text style={styles.text2}>
      The Bishop moves diagonally across the board, and sticks to the colour it started on. It can move forwards and backwards on its diagonal in any number of squares; from 1 upto 7. Both players have two of these on opposite coloured squares; white and black squared Bishops.It is worth 3 points of material. It's sign is B.</Text>
<Image source={require("../assets/BishopMoves.png")} style={styles.image}></Image>
          
   <Text style={styles.text2}>The Rook moves horizontally or vertically across the board in any given number of squares from 1 to 7. Both players have two of these pieces, and each are worth 5 points of material. It's sign is R</Text>
<Image source={require("../assets/RookMoves.png")} style={styles.image}></Image>

<Text style={styles.text2}>The Queen moves both like a Rook and a Bishop; diagonally, horizontally, and vertically in any direction in any given number of squares from 1 to 7, making it the most powerful piece on the board. Both players get only one of these, and it is worth 9 points alone. It's sign is Q.</Text>
<Image source={require("../assets/QueenMoves.png")} style={styles.image}></Image>


<Text style={styles.text2}>The King moves much like the Queen, except it is always 1 square in each direction. It is the most important piece on the board, costing the game.Each player has only one of these. It's sign is K.</Text>
<Image source={require("../assets/KingMoves.png")} style={styles.image}></Image>




<Text style={styles.text2}>Apart from the basics, there are other special moves as well, such as Castling, Captures, En Passsant, Checks, Checkmates, and Stalemates. We will cover all of those as well, don't worry. It may seem difficult but once you get the hang of chess, you'll know it like the back of your hand</Text>




<Text style={styles.text2}>Castling is when the King and Rook on either side move together for the King to come into safety. There are two types; Kingside and Queenside Castling. 

Kingside castling is when the King castles to the shorter side where the Queen is absent. Here the King moves two steps towards the rook, while the rook moves two steps to the King. It is denoted by O-O

Queenside Castling is when the King castles to the longer side where the Queen is present. The King will move two steps towards the Rook, while the Rook moves 3 steps towards the King. It is denoted by O-O-O

Note that the King always moves two steps, while the Rook moves such that it is nearer to the center of the board than the King.

</Text>

<Image source={require("../assets/Castling.png")} style={styles.image}></Image>



<Text style={styles.text2}> Castling is possible only when the pieces between the King and Rook are not there;you can't castle if there's a Knight in between, even in Queenside Castling. 

The King and Rooks must've not moved from their starting positions; returning them after moving them before doesn't mean you can castle again. However, if only the Queenside Rook has moved you can still castle Kingside if the King and Kingside Rook haven't moved, and vice versa. However, if the King moved then you can't castle at all.

You also cannot castle during a check, which is something that will be explained later on. </Text>


<Text style={styles.text2}> A Capture is a move in which you 'kill', 'take', or 'eat' a piece. Whichever you prefer, it involves a piece taking the place of another piece of the opposite colour. The piece is then removed from the board.</Text>

<Image source={require("../assets/Capture.png")} style={styles.image}></Image>


<Text style={styles.text2}> An En Passant is a very special move that rarely happens on the Board, many times, not at all in a game! The circumstances are rather rare for one as well. It can occur only when an opposing pawn moves two steps up in a single move, and your own pawn is on the 5th rank for you besides that pawn. Then, for that move only, you can take the pawn moved as if it were on the 6th rank. However, if you don't take the En Passant on that move, then you lose the chance to take an En Passant, and you can't move that again. It is also not possible if the pawn moved one step and then one more step either.</Text>

<Image source={require("../assets/EnPassant.png")} style={styles.image}></Image>

<Text style={styles.text2}> A Check is a move in which you attack the King using the vision of any other piece other than your own King. This is a forcing move, as the King is the most important piece. Thus, the check has to be defended somehow. This is done by either taking the piece that is giving the check, defending against the check with a piece of your own, or moving the king to a safe space. 

Note that you can't castle while in check. You cannot move your King into a check, nor can you move a piece that's defending against a check as it will reveal a check on your King. Thus, such moves are considered Illegal Moves</Text>

<Image source={require("../assets/Check.png")} style={styles.image}></Image>

<Text style={styles.text2}> A Checkmate is similar to a check, except that it can't be avoided by any means possible. This is as the King can't move away from the check, it can't defend against it, nor can it capture the piece that's giving it a check. In such a scenario, the game is considered over and the player who gave the checkmate wins</Text>

<Image source={require("../assets/Checkmate.png")} style={styles.image}></Image>

<Text style={styles.text2}> A Stalemate is a position in which the opponent is not in check, but there are no legal moves for the player. This would usually mean a win but the King of the player with no legal moves is not in check, and is not being threatened with a capture. In such a scenario, the game is considered drawn, where neither players won but rather, both get half-points</Text>

<Image source={require("../assets/Stalemate.png")} style={styles.image}></Image>

          </View>
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
        flex: 0.95,
        marginLeft: 0,
        marginRight: 250,
        marginTop: 0,
        
        borderRadius: 45,
        backgroundColor: 'black',
        opacity:1

    },
routeText: {
        fontSize: 13,   
        color: "white",
        marginTop: 0,
        paddingLeft: 5
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
    
    text:{
      marginTop:30,
      marginLeft:10,
      color:"white",
      fontSize:15


    },

    text2:{
      marginTop:10,
      marginLeft:10,
      color:"white",
      fontSize:15


    },

    image:{
      height:340,
      width:340



    }
  


})