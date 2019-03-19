<p align="center">
  <a href="https://hermanya.github.io/color-system/">
    <img alt="Default Color scheme" src="https://hermanya.github.io/color-system/icons/icon-192x192.png" width="192" />
  </a>
</p>
<h1 align="center">
  Color System
</h1>

`yarn add use-color-system`

`import useColorSystem from 'use-color-system'`

```jsx
const colors = useColorSystem({
  hueOffset: 28, // pretty random number 0-30
  invertedLightness: false, // enable for automatic Dark Mode
  highContrastMode: false // enable for accessibility
});
styledSystemTheme.colors = colors;
```

```jsx
<Box bg="gray.10" color="gray.0">
  Hello
  <Text color="red.5">World</Text>
</Box>
```