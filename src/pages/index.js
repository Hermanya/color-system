import React, {useState} from 'react';
import {Flex, Box, Text, Link} from 'rebass';
import styled, {ThemeProvider, css, createGlobalStyle} from 'styled-components';
import useMedia from 'use-media';
import {WarningIndicator} from '../components/WarningIndicator';
import {PrimaryIndicator} from '../components/PrimaryIndicator';
import {RevenueIndicator} from '../components/RevenueIndicator';
import 'styled-components/macro';
import {LikeIndicator} from '../components/LikeIndicator';
import {StatusIndicator} from '../components/StatusIndicator';
import Seo from '../defaultcomponents/seo';
import {useColorSystem} from '../hooks/useColorSystem';

const ColorScale = ({colors, label, ...props}) => (
  <Flex title={label} justifyContent="flex-end" alignItems="center" {...props}>
    <Box
      pt={3}
      css={css`
        // opacity: 0.75;
        writing-mode: vertical-lr;
        // text-orientation: upright;
      `}
    >
      {label}
    </Box>
    {colors.map((color, index) => {
      return <Box key={color + String(index)} bg={color} p={3} />;
    })}
  </Flex>
);

const ColorPrism = ({colors, washed, ...props}) => (
  <Flex flexDirection="row" {...props}>
    {Object.keys(colors).map(hue => (
      <ColorScale
        key={hue}
        colors={colors[hue]}
        flexDirection="column-reverse"
        label={washed ? `washed ${hue}` : hue}
      />
    ))}
  </Flex>
);

const Checkbox = ({label, checked, onChange, ...props}) => (
  <Flex as="label" alignItems="center" mb={2} {...props}>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <Text ml={2}>{label}</Text>
  </Flex>
);

const RadioButton = ({label, checked, onChange, ...props}) => (
  <Flex as="label" alignItems="center" mb={2} {...props}>
    <input type="radio" checked={checked} onChange={onChange} />
    <Text ml={2}>{label}</Text>
  </Flex>
);

const Range = ({label, min, max, value, onChange, ...props}) => (
  <Flex as="label" flexDirection="column" mb={2} {...props}>
    <input type="range" min={min} max={max} value={value} onChange={onChange} />
    <Text>{label}</Text>
  </Flex>
);

const Root = styled(Box)`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  min-height: 100vh;
  filter: ${props => (props.grayscale ? 'grayscale(1)' : '')};
`;

const GlobalStyle = createGlobalStyle`
body, html {
  padding: 0; margin: 0;
}
`;

const generateCode = ({
  hueOffset,
  saturation,
  darkMode,
  highContrastMode
}) => `// Setup
const colors = useColorSystem({
  hueOffset: ${hueOffset}, // pretty random number 0-30
  saturation: ${saturation},
  invertedLightness: ${darkMode}, // Dark Mode
  highContrastMode: ${highContrastMode} // A11y
});
theme.colors = colors;

// Basic usage
colors.washed.blue[0]

// Usage with styled-system
<Box bg="gray.9" color="washed.blue.0">
  Hello
  <Text color="red.5">World</Text>
</Box>
`;

const Section = ({heading, children, ...props}) => (
  <Box m={[2, 3, 3, 3, 4]} {...props}>
    <Text as="h2" fontSize={2} mb={4}>
      {heading}
    </Text>
    {children}
  </Box>
);

const App = () => {
  const [hueOffset, setHueOffset] = useState(28);
  const [saturation, setSaturation] = useState(85);
  const [grayscale, setGrayscale] = useState(false);
  const [invertedLightness, setInvertedLightness] = useState(false);
  const [highContrastMode, setHighContrastMode] = useState(false);

  const systemLight = useMedia('(prefers-color-scheme: light)');
  const systemDark = useMedia('(prefers-color-scheme: dark)');
  const isSystemColorSchemeApplied = systemDark || systemLight;

  const colors = useColorSystem({
    hueOffset,
    invertedLightness:
      invertedLightness === undefined ? systemDark : invertedLightness,
    highContrastMode,
    saturation
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

  const {washed: washedColors, gray, ...regularColors} = colors;

  return (
    <ThemeProvider theme={theme}>
      <Root bg="gray.9" color="gray.0" grayscale={grayscale} p={[3, 5]}>
        <GlobalStyle />
        <Seo title="Color scales" />
        <h1>Color system</h1>
        <Flex flexWrap="wrap" m={[-1, -2, -3]} width={1}>
          <Section heading="Controls" width={[1, 1 / 3, 1 / 4, 1 / 5]}>
            <Range
              label="Hue offset"
              value={hueOffset}
              min={10}
              max={30}
              mb={4}
              onChange={e => setHueOffset(Number(e.target.value))}
            />
            <Range
              label="Saturation"
              value={saturation}
              min={70}
              max={90}
              mb={4}
              onChange={e => setSaturation(Number(e.target.value))}
            />
            <Checkbox
              label="Grayscale"
              checked={grayscale}
              mb={4}
              onChange={() => setGrayscale(!grayscale)}
            />

            <RadioButton
              label="Regular lightness"
              checked={invertedLightness === false}
              onChange={() => setInvertedLightness(false)}
            />
            {isSystemColorSchemeApplied && (
              <RadioButton
                label="OS lightness mode"
                checked={invertedLightness === undefined}
                onChange={() => setInvertedLightness(undefined)}
              />
            )}
            <RadioButton
              label="Inverted lightness"
              checked={invertedLightness}
              mb={4}
              onChange={() => setInvertedLightness(true)}
            />

            <Checkbox
              label="High contrast"
              checked={highContrastMode}
              onChange={() => setHighContrastMode(!highContrastMode)}
            />
          </Section>
          <Section heading="B&W">
            <ColorScale
              flexDirection="column-reverse"
              label="gray"
              colors={gray}
              mb={3}
            />
          </Section>
          <Section heading="Washed Colors">
            <ColorPrism washed colors={washedColors} mb={3} />
          </Section>
          <Section heading="Normal Colors">
            <ColorPrism colors={regularColors} mb={3} />
          </Section>

          <Section heading="Demo">
            <Flex flexWrap="wrap" m={-2}>
              <WarningIndicator />
              <PrimaryIndicator />
              <RevenueIndicator />
              <LikeIndicator />
              <StatusIndicator />
            </Flex>
          </Section>
          <Section heading="Code">
            <Flex flexDirection="column">
              <Text
                as="code"
                mb={2}
                fontFamily="mono"
                fontSize={1}
                css={css`
                  opacity: 0.5;
                `}
              >
                yarn add use-color-system
              </Text>
              <Text as="code" mb={2} fontFamily="mono" fontSize={1}>
                {`import {useColorSystem} from 'use-color-system'`}
              </Text>
              <Text as="pre" mt={0} fontFamily="mono" fontSize={1}>
                {generateCode({
                  hueOffset,
                  saturation,
                  darkMode: invertedLightness,
                  highContrastMode
                })}
              </Text>
            </Flex>
          </Section>
          <Section heading="Links">
            <Link
              mr={2}
              href="https://codesandbox.io/s/github/Hermanya/color-system/tree/master/example"
            >
              CodeSandbox
            </Link>
            <Link mr={2} href="https://www.npmjs.com/package/use-color-system">
              NPM
            </Link>
            <Link mr={2} href="https://github.com/Hermanya/color-system">
              GitHub
            </Link>
            <Link href="https://hermanya.github.io">Herman Starikov</Link>
          </Section>
        </Flex>
      </Root>
    </ThemeProvider>
  );
};

export default App;
