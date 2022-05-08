import React from 'react';
import {
  ChakraProvider,
  VStack,
  Heading,
  theme,
  useBoolean,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher.js';
import TodoList from './components/TodoList.js';
import Overlay from './components/Overlay.js';
import { FaPlusCircle } from 'react-icons/fa';

function App() {
  // Simple ID generator, do not use in production
  const generateID = () => {
    return 'id' + Math.random().toString(16).slice(2);
  };

  const sampleTodo = [
    {
      id: generateID(),
      title: 'Learn React',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      id: generateID(),
      title: 'Learn Chakra UI',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: generateID(),
      title: 'Learn TypeScript',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const [show, setShow] = useBoolean(false);
  const [todos, setTodos] = React.useState(sampleTodo);
  const [currID, setCurrID] = React.useState('');

  return (
    <ChakraProvider theme={theme}>
      <VStack p={10} spacing={5}>
        <ColorModeSwitcher />
        <Heading fontWeight="extrabold" size="3xl">
          YOUR TODOS
        </Heading>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setShow={setShow}
          setCurrID={setCurrID}
        />
        <IconButton
          icon={<FaPlusCircle />}
          onClick={() => {
            setShow.toggle();
            setCurrID('');
          }}
          w="40vw"
          colorScheme="teal"
        />
      </VStack>
      <Overlay
        show={show}
        setShow={setShow}
        todos={todos}
        setTodos={setTodos}
        currID={currID}
      />
    </ChakraProvider>
  );
}

export default App;
