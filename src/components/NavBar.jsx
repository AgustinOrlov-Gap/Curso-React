import CartWidget from './CartWidget '
import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Container,
    Flex,
    Link,
    Button,
    IconButton,
    Spacer,
    useColorMode,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
  } from '@chakra-ui/react';
  import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import Brand from './Brand';


const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box as="nav" p={4} borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
         <Brand/>
          <IconButton
            display={{ base: 'block', md: 'none' }}
            icon={<FaBars  size={20}
            style={{
              position: 'relative',
              left: '9px',  
            }} />}
             mr={2}
            isRound
            onClick={handleDrawerToggle}
          />
          <Flex
            display={{ base: 'none', md: 'flex' }}
            align="center"
          >
            <Link mr={4} href="#">
              Inicio
            </Link>
            <Link mr={4} href="#">
              Acerca de
            </Link>
            <Link mr={4} href="#">
              Servicios
            </Link>
            <Link href="#">Contacto</Link>
          </Flex>
          <Spacer />
          <IconButton 
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            isRound
            size="sm"
            onClick={toggleColorMode}
            ml={2}
          />
        <CartWidget
            handleDecrement
            handleIncrement
        />
        </Flex>
       
      </Container>

      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Link href="#">Inicio</Link>
              <Link href="#">Acerca de</Link>
              <Link href="#">Servicios</Link>
              <Link href="#">Contacto</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavBar