import React from 'react'
import ReactDOM from 'react-dom'
import styled, {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'
import {
  space,
  color,
} from 'styled-system'
import {useColorSystem} from 'use-color-system'

const Style = createGlobalStyle(`
  * { box-sizing: border-box; }
  html, body{ margin:0; padding: 0; }
`)

const Root = styled.div`
  font-family: system-ui, sans-serif;
  line-height: 1.5;
`

const Box = styled.div`
  ${space}
  ${color}
`
Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}

const Text = styled.div`
  ${space}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
}

const App = () => {
    const colors = useColorSystem({
        hueOffset: 28, // pretty random number 0-30
        invertedLightness: false, // Dark Mode
        highContrastMode: false // A11y
    });
    return (
        <ThemeProvider theme={{
            space: [
                0, 4, 8, 16, 32, 64, 128, 256
            ],
            colors
        }}>
        <Root>
            <Style />
            <Box
                px={[ 3, 4 ]}
                py={[ 5, 6 ]}
                color='gray.10'
                bg='red.6'
            >
            <Text as="h1">
                Color System
            </Text>
            <Text color={'red.9'}>
                Basic demo of use-color-system
            </Text>
            </Box>
        </Root>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
