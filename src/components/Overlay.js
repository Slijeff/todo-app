import React from 'react';
import { Center } from '@chakra-ui/react';
import AddItem from './AddItem';

export default function Overlay({ show, setShow, todos, setTodos, currID }) {
  if (show) {
    return (
      <Center
        w="100vw"
        h="100vh"
        borderColor="blackAlpha.400"
        pos="absolute"
        top="0"
        left="0"
        backdropFilter="blur(20px)"
      >
        <AddItem
          setShow={setShow}
          todos={todos}
          setTodos={setTodos}
          currID={currID}
        />
      </Center>
    );
  }
}
