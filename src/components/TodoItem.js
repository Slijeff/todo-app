import { VStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import React from 'react';

export default function TodoItem({ title, description }) {
  return (
    <VStack justify="center">
      <Text alignSelf="flex-start" fontWeight="bold">
        {title}
      </Text>
      <Text alignSelf="flex-start">{description}</Text>
    </VStack>
  );
}
