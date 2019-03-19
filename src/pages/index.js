import React, {useState} from 'react';
import {Flex, Box, Text} from 'rebass';
import styled, {ThemeProvider, css, createGlobalStyle} from 'styled-components';
import {WarningIndicator} from '../components/WarningIndicator';
import {PrimaryIndicator} from '../components/PrimaryIndicator';
import {RevenueIndicator} from '../components/RevenueIndicator';
import 'styled-components/macro';
import {LikeIndicator} from '../components/LikeIndicator';
import {StatusIndicator} from '../components/StatusIndicator';
import Seo from '../defaultcomponents/seo';
import {useColorSystem} from '../hooks/useColorSystem';

const ColorScale = ({colors, title, ...props}) => (
  <Flex {...props} title={title} justifyContent="flex-end" alignItems="center">
    <Box
      pt={3}
      css={css`
        // opacity: 0.75;
        writing-mode: vertical-lr;
        // text-orientation: upright;
      `}
    >
      {title}
    </Box>
    {colors.map((color, index) => {
      return <Box key={color + String(index)} bg={color} p={3} />;
    })}
  </Flex>
);

const ColorPrism = ({colors, ...props}) => (
  <Flex flexDirection="row" {...props}>
    {Object.keys(colors).map(hue => (
      <ColorScale
        key={hue}
        title={hue}
        colors={colors[hue]}
        flexDirection="column-reverse"
      />
    ))}
  </Flex>
);

const Checkbox = ({label, checked, onChange, ...props}) => (
  <Flex as="label" alignItems="center" mb={3} {...props}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <Text ml={2}>{label}</Text>
  </Flex>
);
const Range = ({label, min, max, value, onChange, ...props}) => (
  <Flex as="label" flexDirection="column" mb={3} {...props}>
    <input type="range" min={min} max={max} value={value} onChange={onChange} />
    <Text>{label}</Text>
  </Flex>
);

const Root = styled(Box)`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  min-height: 100vh;
  filter: ${props => (props.grayscale ? 'grayscale()' : '')};
`;

const GlobalStyle = createGlobalStyle`
body, html {
  padding: 0; margin: 0;
}
`;

const App = () => {
  const [hueOffset, setHueOffset] = useState(28);
  const [grayscale, setGrayscale] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);

  const {colors, isSystemColorSchemeApplied} = useColorSystem({
    hueOffset,
    darkMode,
    highContrastMode
  });

  const theme = {
    fonts: {
      mono: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    letterSpacings: {
      normal: 'normal',
      tracked: '0.1em',
      tight: '-0.05em',
      mega: '0.25em'
    },
    colors
  };

  return (
    <ThemeProvider theme={theme}>
      <Root bg="gray.10" color="gray.0" grayscale={grayscale} p={[3, 5]}>
        <GlobalStyle />
        <Seo title="Color scales" />
        <h1>Color system</h1>
        <Flex
          justifyContent="center"
          flexDirection={['column', 'column', 'row']}
          m={-3}
          width={1}
        >
          <Box m={3} width={[1, 1 / 2, 1 / 4]}>
            <Text as="h2" fontSize={2} mb={2}>
              Controls
            </Text>
            <Range
              label="Hue offset"
              value={hueOffset}
              min={10}
              max={30}
              onChange={e => setHueOffset(Number(e.target.value))}
            />
            <Checkbox
              label="Grayscale"
              checked={grayscale}
              onChange={() => setGrayscale(!grayscale)}
            />
            {isSystemColorSchemeApplied ? (
              <Text color="gray.5" mb={2}>
                Toggle Dark Mode in system settings
              </Text>
            ) : (
              <Checkbox
                label="Dark Mode"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            )}
            <Checkbox
              label="High contrast"
              checked={highContrastMode}
              onChange={() => setHighContrastMode(!highContrastMode)}
            />
          </Box>

          <Box m={3}>
            <Text as="h2" fontSize={2} mb={2}>
              Colors
            </Text>
            <ColorPrism colors={theme.colors} mb={3} />
          </Box>
          <Box m={3}>
            <Text as="h2" fontSize={2} mb={2}>
              Demo
            </Text>
            <Flex flexWrap="wrap" m={-2}>
              <WarningIndicator />
              <PrimaryIndicator />
              <RevenueIndicator />
              <LikeIndicator />
              <StatusIndicator />
            </Flex>
          </Box>
        </Flex>
      </Root>
    </ThemeProvider>
  );
};

export default App;
