import React, { useState } from 'react';
import {
  IconButton,
  Box,
  Text,
} from '@chakra-ui/react';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

function CartWidget() {
  const [cartCount, setCartCount] = useState(0);

  const handleIncrement = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <Box position="relative">
      <IconButton
        icon={<FaShoppingCart />}
        isRound
        ml={4}
      />
      <IconButton
        icon={<FaPlus />}
        isRound
        position="absolute"
        top="2px" // Ajusta la posición vertical
        left="5vw" // Ajusta la posición horizontal
        onClick={handleIncrement}
      />
      <IconButton
        icon={<FaMinus />}
        isRound
        position="absolute"
        top="2px" // Ajusta la posición vertical
        left="8vw" // Ajusta la posición horizontal
        onClick={handleDecrement}
      />
      <Box
        position="absolute"
        top="1px" // Ajusta la posición vertical
        left="2.5vw" // Ajusta la posición horizontal
        backgroundColor="red" // Color del círculo
        borderRadius="full" // Hace que el círculo sea redondo
        width="20px" // Ajusta el tamaño del círculo
        height="20px" // Ajusta el tamaño del círculo
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="sm" color="white">
          {cartCount}
        </Text>
      </Box>
    </Box>
  );
}

export default CartWidget;
