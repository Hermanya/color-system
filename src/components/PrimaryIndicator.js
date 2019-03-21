import React from 'react';
import {Text} from 'rebass';
import {Indicator} from './Indicator';

export const PrimaryIndicator = () => (
  <Indicator
    bg="blue.5"
    color="gray.9"
    title="RIGHT NOW"
    titleProps={{
      textAlign: 'center',
      color: 'indigo.9'
    }}
  >
    <Text fontFamily="mono" fontSize={6} textAlign="center">
      90
    </Text>
    <Text fontSize={0} textAlign="center">
      active users on site
    </Text>
  </Indicator>
);
