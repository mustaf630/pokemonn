import React from "react";
import {  ActivityIndicator} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { Box,Heading,Image,Text,HStack,Pressable,Center, VStack } from "native-base";
const PokemonCard=({url,name,selected}) =>{
    const navigation = useNavigation()
    const{isLoading,error,data} = useQuery(['pokemon', name], () => fetch(url).then(res => res.json()));
    console.log(selected)
    if(isLoading) return <ActivityIndicator/>
    if(!data || error) return null;

    return (
        <Pressable 
            flex={0.5}
            m="1.5"
            p="4"
            h={230}
            w={200}
            background={"#343d64"}
            borderRadius={20}
            onPress={()=>navigation.navigate("Detail",{name,url})}
            >
                <Center>
                       <Image
                            source={{uri:data.sprites.other["official-artwork"].front_default}}
                            alt="image"
                            w={150}
                            h={150}
                            top={-100}
                            /> 
                </Center>
                <HStack justifyContent={"center"}  top={-100} >
                        <Heading textTransform="capitalize" color="white" size="md"> {data.name}</Heading>
                </HStack>
                <HStack justifyContent={"space-between"} top={-90}>
                    <VStack>
                        <Text fontSize={12} color={"white"}>Height</Text>
                        <Text fontSize={13} fontWeight={"bold"} color={"yellow.400"}>{data.height}cm</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={12} color={"white"}>Weight</Text>
                        <Text fontSize={13} fontWeight={"bold"} color={"yellow.400"}>{data.weight}lbs</Text>
                    </VStack>
                </HStack>  
                <HStack justifyContent={"space-between"}  top={-80} >
                <VStack>
                        <Text fontSize={12} color={"white"}>HP</Text>
                        <Text fontSize={13} fontWeight={"bold"} color={"yellow.400"}>{data.stats[0].base_stat}</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={12} color={"white"}>Attack</Text>
                        <Text fontSize={13} fontWeight={"bold"} color={"yellow.400"}>{data.stats[1].base_stat}</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize={12} color={"white"}>Defence</Text>
                        <Text fontSize={13} fontWeight={"bold"} color={"yellow.400"}>{data.stats[2].base_stat}</Text>
                    </VStack>
                </HStack>
            </Pressable>
    )
}
export default PokemonCard;