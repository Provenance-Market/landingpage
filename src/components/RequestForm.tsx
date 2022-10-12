import * as React from "react";
import {
  Box,
  Input,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Button,
  useColorMode,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";

export const Request = () => {
  const { toggleColorMode } = useColorMode();

  // todo: add error handling for empty fields with an error message
  // todo: add form controls for character input on ui side (and server side)
  return (
    <Box w="500px" h="600">
      <Heading mb={6}>Request</Heading>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
            <Input 
            _placeholder={{ color: 'white' }}
              mb={3} 
              placeholder='Give your future masterpiece a title.' 
            />
        </FormControl>
        <FormLabel>Description</FormLabel>
          <Textarea _placeholder={{ color: 'white' }} mb={6} resize="none" placeholder="Describe your artwork request." /> 
      <Flex direction={"column"}>
        <Button textColor={'#263238'} mb={6} bg={"#00d4ff"}>
          Submit
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Box>
  );
};