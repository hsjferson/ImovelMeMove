import React from 'react';
import { View ,StyleSheet, ImageBackground, Text} from 'react-native';

export default function Recommended({cover,house,offer}) {
 return (
   <View>
       <ImageBackground source={cover} style={styles.container} blurRadius={2} >
           <Text style={styles.house}>{house}</Text>
           <Text style={ styles.oferta  }>{offer}Off</Text>
       </ImageBackground>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        height:130,
        width:220,
        marginRight:20, 
        marginBottom:40, 
        backgroundColor:'#ccc',
        padding:12,
        marginTop:20
    },
    house: { 
        color:'#FFF',
        fontWeight:'bold', 
        fontSize:20, 
        textShadowColor: '#302d2d',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5
    },
    oferta: {
        fontSize:12,
        color:'#282525', 
        fontWeight:'bold',
        textShadowColor: '#302d2d',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5, 
    },
    shadow: {
        textShadowOffset: {width:1 , height:1},
        textShadowRadius:3,
        textShadowColor:'#000'
    }

})