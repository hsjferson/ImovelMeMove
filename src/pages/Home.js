import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {

    const navigation = useNavigation();

   return(
       <ScrollView 
       showsVerticalScrollIndicator={false}
       style={{backgroundColor:'#fff', }} 
       >
            <View style={styles.header}>
                <View  style={styles.inputArea}>
                    <Feather
                    name="search" size={24} color="black" />
                    <TextInput
                    placeholder="O que está procurando"
                    style={styles.input}
                    />  
                </View>
            </View>
            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>
            <ScrollView   horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}} >
                 <New
                  cover ={require('../assets/casacuritiba.jpg')}
                  name = {"Casa de praia"}
                  description = "Casa nova, uma casa no mar muito bonita para se viver"
                  onPress = {() => navigation.navigate('Detail')}
                 />
                 <New
                  cover ={require('../assets/casafloripa.jpg')}
                  name = {"Casa FLoripa"}
                  description = "Casa nova, uma casa no mar muito bonita para se viver"
                  onPress = {() => {}}
                 />
                 <New
                  cover ={require('../assets/casacuritiba.jpg')}
                  name = {"Casa Curitiba"}
                  description = "Casa nova, uma casa no mar muito bonita para se viver"
                  onPress = {() => {}}
                 />
                 <New
                  cover ={require('../assets/house4.jpg')}
                  name = {"Casa de Sitio"}
                  description = "Casa nova, uma casa no mar muito bonita para se viver"
                  onPress = {() => {}}
                 />
            </ScrollView>
            <View style={{flexDirection:'row' , alignItems:'center', margin:10, }}>
                    <Text style={styles.title }>Proximo</Text>
                </View>
            <ScrollView vertical showsHorizontalScrollIndicator={true} style={{paddingHorizontal:15}}> 
                 
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
                    <House
                    cover={require('../assets/house3.jpg')}
                    />
                    <House
                    cover={require('../assets/house1.jpg')}
                    />
                    <House
                    cover={require('../assets/casacuritiba.jpg')}
                    />
                </ScrollView>
            </ScrollView>
            <View style={{flexDirection:'row' , alignItems:'center', margin:10, }}>
                <Text style={styles.title}>Dica do dia</Text>
            </View>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:15}}>
                <Recommended  
                cover={require('../assets/house6.jpg')}
                house="Casa Floripa"
                offer="20%"
                />
                <Recommended
                cover={require('../assets/house2.jpg')}
                house="Casa São Paulo"
                offer="10%"
                />
                <Recommended
                cover={require('../assets/casacuritiba.jpg')}
                house="Casa Curitiba"
                offer="15%"
                
                />

            </ScrollView>
       </ScrollView>
   ) ;
}
const styles = StyleSheet.create({
    header: { 
 
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center', 
        width:'100%',
        marginVertical:10
    },
    inputArea: {
 
        paddingHorizontal:10,
        flexDirection:'row', 
        alignItems:'center', 
        width:'98%',
        elevation:2,
        borderRadius:10,
        height:37,
        backgroundColor:'#FFF',
        borderColor:'#ccc',
        borderWidth:1
    },
    input: { 
        paddingHorizontal:10,
        fontSize:13,
        width:'90%', 
    },
    contentNew: {
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    title: {
        paddingHorizontal:15,  
        color:'#222',
        fontFamily:'Montserrat_700Bold'
    }, 

})