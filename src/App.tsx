import './App.css'
import { useState, useEffect } from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import { toaster, Toaster } from './components/ui/toaster';


interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  image: string;
}
interface ApiResult {
  results: Character[];
}
const App = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [data, setData] = useState<ApiResult | null>(null);

  const fetchInfo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);

      
        toaster.create({
          description: "API data loaded successfully!",
          type: "success",
        });
      })
      .catch(() => {
        toaster.create({
          description: "There is a mistake in your API",
          type: "error",
        });
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  console.log(data);

  return (
    <>
      <Toaster />
      <Text marginBottom="20px" marginTop="20px" fontSize="30px" textAlign="center">
        Rick and Morty Characters
      </Text>

      
      <Flex justifyContent="center" flexWrap="wrap" gap={6}>
        {data?.results?.map((character) => (
          <Box
            key={character.id}
            _hover={{ shadow: "lg" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="300px"
            padding="15px"
            borderRadius="10px"
            shadow="md"
            bg="gray.100"
          >
            <Image width="150px" src={character.image} borderRadius="full" />
            <Box textAlign="center" marginTop="10px">
              <Text fontWeight="700" fontSize="20px">{character.name}</Text>
              <Text>Species: {character.species}</Text>
              <Text>Status: {character.status}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default App;