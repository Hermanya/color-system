import React from 'react';
import {Flex, Box, Text} from 'rebass';
import {Heart, UserPlus} from 'react-feather';
import {Indicator} from './Indicator';
// Import {css} from 'styled-components';
// import 'styled-components/macro';
export const LikeIndicator = () => (
  <Indicator title="SOCIAL">
    <Flex alignItems="center" mb={2}>
      <Box color="fuschia.8">
        <Heart size="2em" fill="currentColor" />
      </Box>
      <Box ml="0.5em">
        <Text color="gray.1" fontSize={3}>
          204
        </Text>
        <Text color="gray.4" fontSize={0}>
          likes today
        </Text>
      </Box>
    </Flex>
    <Flex alignItems="center">
      <Box color="fuschia.4">
        <UserPlus size="0.8em" />
      </Box>
      <Text color="gray.1" fontSize={1} ml="0.5em">
        16
      </Text>
      <Text color="gray.4" fontSize={1} ml="0.25em">
        followers
      </Text>
    </Flex>
  </Indicator>
);
