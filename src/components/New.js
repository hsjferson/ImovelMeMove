import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';



export default function New( props) {
    return( 
        <TouchableOpacity onPress= {props.onPress}  style={styles.container} >
            <Image 
            source ={props.cover}
            style ={styles.cover}
            /> 
            <View style={styles.content}>
                <Text style={styles.title}>{props.name}</Text>

                <View style={styles.dot}> 
                </View>

                <Text style={styles.badge}>Novo</Text>
            </View>
            <View>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={{width:'80%'}}>
                    <Text style={styles.price}> R$ 1,500.00</Text>    
                </View> 
                <View>
                    <Ionicons name="ios-add-circle"    size={24} color="black" />       
                </View>
            </View>
             
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: { 
        marginTop:10,
        backgroundColor:'#fff', 
        width:250,
        height:250, 
        elevation:2,
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        borderWidth:1,
        borderColor:'#ccc',
        marginBottom:5
    },
    cover: {
        width:170,
        height:110,
        borderRadius:10
    },
    content: {
        flexDirection:'row',
        alignItems:"center",
        marginVertical:10,
    },
    title: { 
        fontSize:12,
        color:'#777'
    },
    dot: {
        width:4,
        height:2,
        backgroundColor:'red',
        marginHorizontal:14
    },
    badge: {
       color:'red',
       fontSize:9 
    },
    description: { 
        fontSize:12,
        color:'#777' 
    },
    footer: {
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        width:'100%'
    },
    price: { 
        fontSize:15
    }
})