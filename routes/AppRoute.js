import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { HomeScreen,ListInstructives,Detail,Item } from "../views";
import React from "react";

export const AppRoute = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name= "home" component= {HomeScreen} options={{ title: 'Gobernación de Sucre' }}/>
            <Stack.Screen name="Instructivos"  component = {ListInstructives}/>
            <Stack.Screen  name ="detail" component= {Detail}/> 
            <Stack.Screen  name ="item" component= {Item}/> 
        </Stack.Navigator>
      </NavigationContainer>

    );
}