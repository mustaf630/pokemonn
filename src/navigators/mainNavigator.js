import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { Detail } from '../screens/Details';
import { MainPage } from '../screens/MainPage';


export const MainNavigator = () => {
  const stack = createNativeStackNavigator();
  return (
      <stack.Navigator>
        <stack.Screen name='mainpage'
        component={MainPage}
        options={{
          headerShown:false,
        }}/>
        <stack.Screen name="Home" 
        component={Home}
        options={()=>({
          headerTitle:"",
          headerTransparent:true,
          headerBackVisible:true
        })}
         />
         <stack.Group screenOptions={{presentation:"modal"}}>
           <stack.Screen name="Search" component={Search}
           options={()=>({
            headerTitle:"",
            headerTransparent:true
          })} />
           <stack.Screen name="Detail" component={Detail}
           options={{
            headerTitle:"",
            headerTransparent:true
           }} />
         </stack.Group>
      </stack.Navigator>   
  );
};


