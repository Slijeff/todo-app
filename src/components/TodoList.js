import {
  VStack,
  IconButton,
  Grid,
  GridItem,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import React from 'react';
import { FaTrash, FaPenNib } from 'react-icons/fa';

export default function TodoList({ todos, setTodos, setShow, setCurrID}) {

  // If there is a backend, this is where you would post the data to the backend
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return todos.length > 0 ? (
    <VStack
      rounded="xl"
      p={8}
      spacing={8}
      alignItems="strech"
      w="100%"
      maxW={{ base: '95vw', sm: '85vw', lg: '50vw', xl: '40vw' }}
      boxShadow="lg"
    >
      {todos.map(todo => (
        <Grid templateColumns="repeat(5, 1fr)" key={todo.id}>
          <GridItem colSpan={3}>
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
            />
          </GridItem>
          <GridItem colEnd={6} alignSelf="center" justifySelf="end">
            <IconButton
              icon={<FaTrash />}
              marginRight={4}
              boxShadow="md"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            />
            <IconButton
              icon={<FaPenNib />}
              boxShadow="md"
              onClick={() => {
                setShow.toggle();
                setCurrID(todo.id);
              }}
            />
          </GridItem>
        </Grid>
      ))}
    </VStack>
  ) : (
    <Alert
      status="success"
      w="100%"
      maxW={{ base: '95vw', sm: '85vw', lg: '50vw', xl: '40vw' }}
      rounded="lg"
    >
      <AlertIcon />
      You've completed all your tasks!
    </Alert>
  );
}
