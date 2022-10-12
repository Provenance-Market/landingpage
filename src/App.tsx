import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useBreakpointValue,
  Textarea,
  Input,
  useColorModeValue, 
  IconProps, 
  Icon
} from '@chakra-ui/react';
import { Request } from './components/RequestForm';


export const App = () => {
  return (
  <Box bgGradient='linear(to-br, #000000,#020024, #090979,#00d4ff, #00d4ff,#00d4ff)'>
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      padding={5}
      color="white"
    >
      <Flex mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Provenance
        </Heading>
      </Flex>
      <Stack direction='row' spacing={20} align='center'>
      <Text fontSize={'xl'}>About</Text>
      <Text fontSize={'xl'}>How To</Text>
      <Text fontSize={'xl'}>Community</Text>
      <Text fontSize={'xl'}>FAQs</Text>
      <Button
              rounded={'md'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Launch App
            </Button>
      </Stack>
      
    </Flex>
    
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={.9} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text bgGradient='linear(to-l, #B3E5FC,#03A9F4)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'>
              Freelance Digital Assets
            </Text>{' '}
          </Heading>
          <Text fontSize={'xl'} color={'gray.100'}>
            A virtual marketplace for the development of NFTs, in game assets, and the Metaverse
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Launch App
            </Button>
            <Button color={'#020024'}  bg={'white'} rounded={'full'}>How It Works</Button>
          </Stack>
          
        </Stack>
      </Flex>
      
      <Flex height="100vh" alignItems="center" justifyContent="center" pr={10}>
        <Flex
          direction={"column"}
          bg="#020024"
          p={12}
          rounded={20}
    
        >
     <Request/>
      </Flex>
      </Flex>
    </Stack>
    
    </Box>
  )
}