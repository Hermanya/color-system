import React from 'react';
import {Box, Flex, Text, Button} from 'rebass';
// import {AlertOctagon} from 'react-feather';
import {css} from 'styled-components';
import {Indicator} from './Indicator';
import 'styled-components/macro';

export const WarningIndicator = () => (
  <Indicator
    title="WARNING"
    titleProps={{textAlign: 'center'}}
    bg="yellow.7"
    color="gray.0"
    css={css`
      position: relative;
      overflow: hidden;
    `}
  >
    {/* <AlertOctagon
      size={100}
      css={css`
        color: ${props => props.theme.colors.yellow[7]};
        position: absolute;
        top: -${props => props.theme.space[3]}px;
        left: -${props => props.theme.space[4]}px;
        opacity: 0.5;
        z-index: 0;
      `}
    /> */}

    <Box bg="gray.2" color="gray.9" p={2} mt={2}>
      <Text fontFamily="mono" textAlign="center">
        Expected outage
      </Text>
      <Text fontFamily="mono" textAlign="center">
        in US-EAST-1
      </Text>
    </Box>
    <Flex justifyContent="flex-end" alignItems="center">
      <Button
        bg="yellow.4"
        fontWeight="normal"
        fontSize={0}
        my={2}
        css={css`
          :hover {
            cursor: pointer;
            background: ${props => props.theme.colors.yellow[5]};
          }
        `}
      >
        OK
      </Button>
    </Flex>
  </Indicator>
);
