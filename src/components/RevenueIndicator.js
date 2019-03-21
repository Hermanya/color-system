import React from 'react';
import {Flex, Box, Text} from 'rebass';
import {
  TrendingDown
  // DollarSign
} from 'react-feather';
import {css} from 'styled-components';
import 'styled-components/macro';
import {Indicator} from './Indicator';

export const RevenueIndicator = () => (
  <Indicator
    title="REVENUE TODAY"
    css={css`
      position: relative;
      overflow: hidden;
    `}
  >
    <Box
      bg="washed.green.7"
      color="gray.2"
      fontSize={3}
      px={3}
      py={2}
      mb={2}
      css={css`
        display: inline-flex;
        align-items: flex-end;
      `}
    >
      <Text fontFamily="mono">USD 98</Text>
      <Text fontFamily="mono" fontSize={0}>
        .50
      </Text>
    </Box>
    <Flex>
      <Text color="red.3" fontSize={1}>
        <TrendingDown size="1em" /> 5%
      </Text>
      <Text color="gray.4" fontSize={1} ml="0.5em">
        vs average
      </Text>
    </Flex>
    {/* <DollarSign
      css={css`
        position: absolute;
        bottom: 6px;
        right: 6px;
        transform: rotate(30deg);
        color: ${props => props.theme.colors.green[5]};
        opacity: 0.25;
      `}
      size={64}
    /> */}
  </Indicator>
);
