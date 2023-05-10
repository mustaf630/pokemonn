import React from "react";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "../navigators/mainNavigator";
import { NativeBaseProvider } from "native-base"



const queryClient= new QueryClient();
const Container =()=>{
    return(
        <QueryClientProvider client={queryClient}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <MainNavigator/>
                </NavigationContainer>
            </NativeBaseProvider>
        </QueryClientProvider>
    )
}


export default Container;