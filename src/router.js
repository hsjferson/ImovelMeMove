import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import 'react-native-gesture-handler';  
import { Feather} from '@expo/vector-icons'; 
import { AppLoading } from 'expo'; 

import Home from './pages/Home' ;
import Detail from './pages/Detail'; 


const Stack = createStackNavigator();

function Routes() {
    return(

        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title:'Alug.me',
                    headerTitleStyle:{
                        fontFamily:'Montserrat_700Bold'
                    },
                    headerRight: () => ( 
                        <TouchableOpacity>
                            <Feather style={{marginRight: 15}}
                            name="shopping-bag"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{
                    title:'Detalhe',
                    headerTitleStyle:{
                        fontFamily:'Montserrat_700Bold'
                    },
                    headerRight: () => ( 
                        <TouchableOpacity>
                            <Feather style={{marginRight: 15}}
                            name="shopping-bag"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
           </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;