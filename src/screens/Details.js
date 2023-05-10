import { useQuery } from "@tanstack/react-query";
import {AspectRatio,Image,Text,Heading,Stack,HStack, Center, Skeleton} from "native-base"

export const Detail=({route})=>{
    const {name,url} =route.params;
    const{data} = useQuery(['pokemon', name], () => fetch(url).then(res => res.json()));
    const{isLoading,data:species} = useQuery(['species', name], () => fetch(data.species.url).then(res => res.json()),{enabled:!!data});

    return (
        <Stack>
            <Center 
            safeArea
            backgroundColor={"#343d64"}>
                <AspectRatio ratio={"1"} width="70%">
                   <Image
                        source={{uri:data?.sprites.other["official-artwork"].front_default}}
                        alt="image"
                        /> 
                </AspectRatio>
                <HStack 
                    py="2"
                    px={"3"}
                    justifyContent={"space-between"}
                    width={"100%"}
                >
                    <Heading
                    color={"white"}
                    textTransform={"capitalize"}
                    >{name}</Heading>
                    <Heading color={"white"}>#{data?.order}</Heading>
                </HStack>
            </Center>
            <Stack p={"3"}>
                <HStack justifyContent={"center"}>
                    {data?.types.map((type)=>(
                        <Center 
                        key={type.type.name}
                        backgroundColor={"yellow.500"}
                        rounded={"full"}
                        p={"1"}
                        minW={"32"}
                        mx={"2"}
                        _text={{
                            color:"white",
                            fontSize:"lg",
                            fontWeight:"bold",
                            textTransform:"capitalize"
                        }}
                        >{type.type.name}
                        </Center>
                    ))}

                </HStack>
                <Center>
                    {isLoading ? <Skeleton.Text/> : null}
                    {species && (<Text fontSize={"xl"} mt={"4"}>{species?.flavor_text_entries[0]?.flavor_text}</Text>)}
                </Center>
            </Stack>
        </Stack>
    )
}