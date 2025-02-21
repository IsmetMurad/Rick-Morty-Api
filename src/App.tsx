import './App.css'
import { useState, useEffect } from "react";
import {  Image, Box, Text, Center } from "@chakra-ui/react"





const App = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState(null);


  const fetchInfo = () => {

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })

      .catch((error) => {
        console.log('err')        
      });
  };
  



  useEffect(() => {
    fetchInfo();

  }, []);

  
  console.log(data); 

  return (
   

      
      <>
      
      <Text marginBottom='20px' marginTop='20px' fontSize='30px'display="flex" justifyContent="center"  >Rick and Morty Characters</Text>
        {data?.results?.map((character) => (

      
      <Box _hover={{ shadow: "lg" }} display='inline-flex' justifyContent='center' flexDirection='column' width='500px' paddingTop='10px' paddingBottom='10px'   borderRadius='5px'   shadow="sm">
        <Center>
        <Image display='inline-flex' justifyContent='center' width='200px'  src={character.image} borderRadius='full' />
        </Center>
      

      <Box display='flex' flexDirection='column'>
      <Text textAlign='center'   fontWeight='700' fontSize='20px'>{character.name}</Text>
      <Text textAlign='center'  >Species: {character.species}</Text>
      <Text textAlign='center'  >Status: {character.status} </Text>
      </Box>
      </Box>

      
      
          
        ))}
        </>
      


  );
};

export default App;
