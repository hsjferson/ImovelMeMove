import React from 'react';
import { View ,StyleSheet, ImageBackground, Text} from 'react-native';

export default function Recommended({cover,house,offer}) {
 return (
   <View>
       <ImageBackground source={cover} style={styles.container} blurRadius={2} >
           <Text style={[styles.house],styles.shadow}>{house}</Text>
           <Text style={[styles.oferta], styles.shadow}>{offer}Off</Text>
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
    },
    oferta: {
        fontSize:12,
        color:'#fff',
        fontWeight:'bold'
    },
    shadow: {
        textShadowOffset: {width:1 , height:1},
        textShadowRadius:3,
        textShadowColor:'#000'
    }

})