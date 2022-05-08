import React from 'react';
import {
  VStack,
  Input,
  Textarea,
  IconButton,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

export default function AddItem({ setShow, todos, setTodos, currID }) {
  const [title, setTitle] = React.useState(
    currID !== '' ? todos.filter(todo => todo.id === currID)[0].title : ''
  );
  const [description, setDescription] = React.useState(
    currID !== '' ? todos.filter(todo => todo.id === currID)[0].description : ''
  );

  const [showAlert, setShowAlert] = React.useState(false);

  const generateID = () => {
    return 'id' + Math.random().toString(16).slice(2);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title === '' || description === '') {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    setShow.toggle();
    
    // If there is a backend, this is where you would post the data to the backend
    if (currID === '') {
      setTodos([...todos, { id: generateID(), title, description }]);
    } else {
      const newTodos = todos.map(todo => {
        if (todo.id === currID) {
          return { id: currID, title, description };
        } else {
          return todo;
        }
      });
      setTodos(newTodos);
    }
  };

  return (
    <VStack w="50%" rounded="lg" p={8}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        size="lg"
        borderWidth={2}
        borderColor="gray.500"
      />
      <Textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        size="lg"
        borderWidth={2}
        borderColor="gray.500"
      />
      {showAlert && (
        <Alert status="error" rounded="lg">
          <AlertIcon />
          You have to fill all information
        </Alert>
      )}
      <form onSubmit={handleSubmit} style={{ width: '-webkit-fill-available' }}>
        <IconButton
          icon={<FaCheck />}
          colorScheme="teal"
          w="100%"
          type="submit"
        />
      </form>
      <Button w="100%" onClick={setShow.toggle} type="button">
        Cancel
      </Button>
    </VStack>
  );
}
