import React from 'react';
import {Card, Text, Flex} from 'rebass';

export const Indicator = ({children, title, titleProps = {}, ...props}) => (
  <Card py={3} px={4} m={2} bg="gray.9" borderRadius={8} {...props}>
    <Text letterSpacing="tracked" color="gray.2" mb={2} {...titleProps}>
      {title}
    </Text>
    <Flex flexDirection="column">{children}</Flex>
  </Card>
);
