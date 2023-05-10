import { useQuery } from "@tanstack/react-query"
import {Center, Icon, Input, SearchIcon, Spinner, Stack,Text} from "native-base"
import { useEffect, useState } from "react"

export const Search=({navigation})=>{
    const [text,setText]= useState()
    const {data,isFetching, error}=useQuery(["pokemon",text],() => fetch("https://pokeapi.co/api/v2/pokemon/"+text.toLowerCase()).then(res => res.json())
    )


useEffect(()=>{
    if(data){
        navigation.replace("Detail",{name:data?.name,url:"https://pokeapi.co/api/v2/pokemon/"+data?.name})
    }
},[data])
    return (
        <Stack flex={"1"} px={"3"} py={"10"} bg={"#2a304f"} >
            <Input placeholder="Search"
            backgroundColor={"white"}
            rounded={"xl"}
            py={"3"}
            px={"1"}
            fontSize={"14"}
            onSubmitEditing={({nativeEvent})=>setText(nativeEvent.text)}
            returnKeyType="search"
            InputLeftElement={<SearchIcon px="8" size="5" mt="0.5" color="emerald.500" />}
            />
            <Center flex="1">
                {!!error && (<Text fontSize={"xl"} color={"yellow.500"}>no result found for {text}</Text>)}
                {isFetching   && (<Spinner color={"yellow.500"} size={"lg"}/>)}
            </Center>
        </Stack>
    )
}
