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
  useColorModeValue
} from '@chakra-ui/react';

export const App = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
  <Box bgGradient="radial(brand.800, brand.700)">
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}>
              Freelance
            </Text>
            <br />{' '}
            <Text color={'white'} as={'span'}>
              NFT Artwork
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Create Project
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex height="100vh" alignItems="center" justifyContent="center" pr={10}>
        <Flex
          direction={"column"}
          background={formBackground}
          p={12}
          rounded={20}
    
        >
      <Heading mb={6}>Request</Heading>
      <Input
        placeholder="ed.marcavage@gmail.com"
        variant="filled"
        mb={3}
        type="email"
      ></Input>
      <Input
        placeholder="*************"
        variant="filled"
        mb={6}
        type="password"
      ></Input>
      <Textarea mb={6} resize="none" placeholder="Describe your artwork request." />
      <Flex direction={"column"}>
        <Button mb={6} colorScheme={"teal"}>
          Submit
        </Button>
      </Flex>
      </Flex>
      </Flex>
    </Stack>
    </Box>
  )
}