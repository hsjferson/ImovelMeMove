import React from 'react';
import { Text, View , StyleSheet, Image} from 'react-native'; 

export default function House({cover}) {
 return (
   <View style={styles.container}>
       <View>
           <Image 
           source={cover}
           style={styles.cover}
           />
       </View>
       <View style={styles.content}>
           <Text style={styles.description}>Descrição qualquer coisa aqui</Text>
           <Text style={styles.price}>R$ 19.000.00</Text>
       </View>

   </View>
  );
}   
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        width:260,
        height:70,
        backgroundColor:'#fff',
        elevation:2, //sonbrinha em baixo,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,
        borderRadius:10
    },
    cover: {
        borderRadius:10,
        width:60,
        height:60, 
    } ,
    content: {
        width:'65%',
        justifyContent:'flex-end',
        paddingHorizontal:10,
        height:'100%'
    },
    description: {
        fontSize:9,  
    },
    price: {
        fontSize:12, 
    }
})