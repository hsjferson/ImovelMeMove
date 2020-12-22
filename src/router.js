import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import 'react-native-gesture-handler';  
import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';  
import { Feather} from '@expo/vector-icons';  

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