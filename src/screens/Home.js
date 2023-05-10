import { TouchableOpacity} from "react-native";
import PokemonCard from "../component/pokemonCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {FlatList,Center,Spinner, Stack, Text, Box, HStack, Pressable, VStack, SearchIcon, Heading, ScrollView} from "native-base"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";



export const Home =()=>{
    const navigation = useNavigation()
    const arrays=["all","light","danger","indigo","amber","lime","violet","trueGray","red","blue","green","yellow","pink","lightBlue","purple","dark","gray"]
    const [selected, setSelected] = useState("light");
    const {isLoading,data,hasNextPage,fetchNextPage,isFetchingNextPage} = useInfiniteQuery(["pokemon"], () => fetch("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0").then(res => res.json()),{
        getNextPageParam:(lastpage)=>lastpage.next,
    });
    const loadingmore=()=>{
        if(isLoading) return <Center><Spinner size="lg" color="black"/></Center>;
        if(hasNextPage){
            fetchNextPage();
        }
    }
    if(isLoading) return <Center><Spinner size="lg" color="black"/></Center>
    if(!data) return null;
    return(
            <VStack safeArea flex={1}>
                <HStack justifyContent={"space-between"} bg={"#2a304f"} px={5} pt={20} pb={10}>
                    <Heading color={"#f9be1e"} fontSize={30} >Pokedex</Heading>
                    <TouchableOpacity onPress={()=> navigation.navigate("Search")}>
                        <Stack  px={1.5} py={1.5} boxSize={10} rounded={"lg"} backgroundColor={"#f9be1e"}>
                            <SearchIcon color="black" size="xl"/>
                        </Stack>
                    </TouchableOpacity>
                </HStack>
                <Box flex={1} bg="white">
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{bg:"#2a304f" ,alignItems:"center" ,height:"full" }} >
                    {arrays.map(item=>
                            <Pressable key={item} cursor="pointer" opacity={selected === item ? 1 : 0.4} py="3" mx={6} onPress={() => setSelected(item)}>
                                <Center>
                                    <Text textTransform={"capitalize"} color="#f9be1e" fontWeight={"bold"} fontSize="xl">
                                        {item}
                                    </Text>
                            </Center>
                            </Pressable>
                        )}
                </ScrollView>
    
            </Box>
                <FlatList
                    data={data.pages.flatMap((page)=>page.results)}
                    keyExtractor={item=>item.name}
                    horizontal={true}
                    renderItem={({item})=><PokemonCard url={item.url} name={item.name} selected={selected}/>}
                    onEndReached={loadingmore}
                    contentInsetAdjustmentBehavior="automatic"
                    ListFooterComponent={()=> isFetchingNextPage ? <Center><Spinner size="lg" color="black"/></Center> : null}
                    _contentContainerStyle={{px:5,pt:100,bg:"#2a304f"}}
                    />
            </VStack>
    )
}