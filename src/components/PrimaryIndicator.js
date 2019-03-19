import React from 'react';
import {Text} from 'rebass';
import {Indicator} from './Indicator';

export const PrimaryIndicator = () => (
  <Indicator
    bg="indigo.3"
    color="gray.10"
    title="RIGHT NOW"
    titleProps={{
      textAlign: 'center',
      color: 'indigo.10'
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
