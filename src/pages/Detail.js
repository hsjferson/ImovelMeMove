import React, { Component } from 'react';
import { View,Text, StyleSheet, Image ,AppRegistry, ViewBase} from 'react-native'; 
import { Feather,Ionicons } from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler'; 
import Stars from 'react-native-stars'  

import SwiperComponent from '../components/Swiper';
import { FontDisplay } from 'expo-font';
 
export default function Detail() { 
      return (
         <View style={styles.container}>
           <View style={styles.swiperComponent}>
               <SwiperComponent />
           </View>
           <View style={styles.content}>
             <View style={{width:'65%'}}>
               <Text style={styles.house}>Casa de Praia</Text>
             </View>
             <View style={{width:'35%'}}>
               <Text style={styles.rating}>Avaliações</Text>
               <View style={{alignItems:'center' , flexDirection:'row'}}>
                 <Stars
                 default={4}
                 count={5}
                 half={true}
                 starSize={20}
                 fullStar={ <Ionicons name="md-star" size={24} style={styles.myStar} /> }
                 emptyStar={<Ionicons name="md-star-outline" size={24} style={styles.myStar} /> }
                 halfStar = {<Ionicons name="md-star-half" size={24} style={styles.myStar} /> }

                 />

               </View>
             </View>
           </View>
           <Text style ={styles.price}>RS 1,200.00</Text>
           <Text style={styles.descroption} >Casa nova no mar, lugar seguro e confortavel para voçe ficar com sua familia</Text>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15, marginTop:35}} >
                <View style={styles.slide}>
                  <Image  
                  source={require('../assets/house5.jpg')}
                  style={{width:90, height:90, borderRadius:8}}
                  />
                </View>
                <View style={styles.slide}>
                  <Image  
                  source={require('../assets/house2.jpg')}
                  style={{width:90, height:90, borderRadius:8}}
                  />
                </View>
                <View style={styles.slide}>
                  <Image  
                  source={require('../assets/house1.jpg')}
                  style={{width:90, height:90, borderRadius:8}}
                  />
                </View>
                <View style={styles.slide}>
                  <Image  
                  source={require('../assets/house1.jpg')}
                  style={{width:90, height:90, borderRadius:8}}
                  />
                </View>
                <View style={styles.slide}>
                  <Image  
                  source={require('../assets/house2.jpg')}
                  style={{width:90, height:90, borderRadius:8}}
                  />
                </View>
           </ScrollView>
         </View>
           
      ) 
}
  
  AppRegistry.registerComponent('myproject', () => SwiperComponent)

  const styles = StyleSheet.create({ 
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    }, 
    swiperComponent: {
      flexDirection: 'row',
      height:340,
      width:'100%'
    },
    content:{
      paddingHorizontal:20,
      flexDirection:'row',
      alignItems:"center",
      width:'100%',
      marginTop:20 
    },
    house: {
      fontFamily:'Montserrat_700Bold',
      color:'#525252'
    },
    rating: {
      fontFamily:'Montserrat_700Bold',
      fontSize:9 ,
      color:'#525252'

    },
    myStar: {
      color:'#e7a74e',
      backgroundColor:'transparent',
      shadowOffset: {width:1, height:1},
      textShadowRadius:2,
      textShadowColor:'#000'
    },
    price: {
      paddingHorizontal:20,
      fontFamily:'Montserrat_700Bold',
      fontSize:16,
      color:'#000'
    },
    descroption: {
      fontFamily:'Montserrat_500Medium',
      paddingHorizontal:20,
      color:'#777',
      fontSize:14,
      lineHeight:20,
      marginTop:20
    },
    slide: {
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
      height:90, 
      borderRadius:8,
      width:90,
      margin:10,
      borderRadius:15,
    }
  })
  