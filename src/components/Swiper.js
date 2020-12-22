import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
 

export default function SwiperComponent() {
 return (
   <Swiper
   style={styles.wrapper}
   dotStyle={{
       backgrounColor:'#ccc',
       borderWidth:1,
       width:10,
       height:10,
       borderRadius:10
   }}
   activeDotColor="#fff"
   activeDotStyle={{
       borderColor:'#ccc',
       borderWidth:1,
       width:10,
       height:10,
       borderRadius:10
   }}
   
   >
       <View style={styles.slide}>
            <Image 
            source={require('../assets/casacuritiba.jpg')}
            style={{ width:'100%' , height:400}}
                
            />
       </View>
       <View style={styles.slide}>
            <Image 
            source={require('../assets/casafloripa.jpg')}
            style={{ width:'100%' , height:400}}
                
            />
       </View>
       <View style={styles.slide}>
            <Image 
            source={require('../assets/casacuritiba.jpg')}
            style={{ width:'100%' , height:400}}
                
            />
       </View>

   </Swiper>
  );
}
const styles = StyleSheet.create({
    wrapper:{

    },
    slide: {
        flex:1,
        justifyContent:'center',
        height:340,
    }
})