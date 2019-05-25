<p align="center">
  <a href="https://hermanya.github.io/color-system/">
    <img width="289" alt="image" src="https://user-images.githubusercontent.com/2906365/58375176-34e86200-7f1b-11e9-9fc4-1b3bd66adb80.png">

  </a>
</p>
<h1 align="center">
  Color System
</h1>

[Website](https://hermanya.github.io/color-system/) | [CodeSandbox](https://codesandbox.io/s/github/Hermanya/color-system/tree/master/example)

`yarn add use-color-system`

`import { useColorSystem }  from 'use-color-system'`

```jsx
const colors = useColorSystem({
  hueOffset: 28, // pretty random number 0-30
  invertedLightness: false, // enable for automatic Dark Mode
  highContrastMode: false // enable for accessibility
});
styledSystemTheme.colors = colors;
```

```jsx
<Box bg="gray.9" color="gray.0">
  Hello
  <Text color="red.5">World</Text>
</Box>
```
