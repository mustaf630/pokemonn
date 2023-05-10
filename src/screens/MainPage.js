import { useNavigation } from "@react-navigation/native"
import { Box, Button, HStack, Heading, Image, Stack, Text} from "native-base"


 export const MainPage=()=>{
    const navigation = useNavigation()
    return (
       <Stack  safeArea flex={1} backgroundColor={"#2a304f"}>
        <Image
            source={{uri:"/Users/musdafamohamed/apps/pokemonn/src/images/mainImage.png"}}
            alt="image"
            zIndex={1}
            width={"100%"}
            height={"100%"}
            position= "relative"
            /> 
        <HStack w="100%" h={130} pl={5} py={10} flexDir={"column"} justifyContent={"space-between"}  position= "absolute" zIndex={1}>
            <Text  fontWeight={"bold"} fontSize={"xl"} color={"white"}>welcome to</Text>
            <Heading  fontWeight={"bold"} fontSize={"4xl"} color={"yellow.400"}>Pokedex</Heading>
        </HStack>
        <Box zIndex={1} m={10}  position= "absolute" top={"80%"} > 
                <Button
                w={"300"}
                bg="#343d64"
                rounded={"xl"}
                _pressed={{
                    bg: "##343d64:alpha.50"
                  }}
                _text={{
                  color:"yellow.400",
                  fontWeight:"bold",
                  fontSize:"2xl"
                }}
                onPress={()=>navigation.navigate("Home")}>
                Welcome   
            </Button>
        </Box>
       </Stack>
    )
}