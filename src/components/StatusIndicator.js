import React from 'react';
import {Flex, Box, Text} from 'rebass';
import {Database, Server} from 'react-feather';
import {css, keyframes} from 'styled-components';
import 'styled-components/macro';
import {flash} from 'react-animations';
import {Indicator} from './Indicator';

const iconAnimation = keyframes`${flash}`;

const Led = props => (
  <Box
    css={css`
      width: 32px;
      height: 8px;
      border-radius: 8px;
    `}
    {...props}
  />
);
const Status = ({icon, bg, children, ...props}) => (
  <Flex alignItems="center" color="gray.4" {...props}>
    {icon}
    <Text color="gray.1" fontSize={1} mx="0.5em">
      {children}
    </Text>
    <Led
      bg={bg}
      ml="auto"
      css={
        bg.startsWith('orange') &&
        css`
          animation: ${iconAnimation} 5s infinite;
        `
      }
    />
  </Flex>
);

export const StatusIndicator = () => (
  <Indicator title="HEALTH STATUS">
    <Flex flexDirection="column">
      <Status icon={<Server size="0.8em" />} bg="red.5">
        Vendor API
      </Status>
      <Status icon={<Database size="0.8em" />} bg="orange.5">
        Database
      </Status>
      <Status icon={<Server size="0.8em" />} bg="green.5">
        Server 1
      </Status>
      <Status icon={<Server size="0.8em" />} bg="blue.5">
        Server 2
      </Status>
    </Flex>
  </Indicator>
);
