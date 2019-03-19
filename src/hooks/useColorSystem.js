import chromajs from 'chroma-js';
import hueName from '../utils/hue-name';

export const useColorSystem = ({
  hueOffset,
  invertedLightness,
  highContrastMode,
  highContrastLightnessScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  lowContrastLightnessScale = highContrastLightnessScale.map(
    x => x * 0.8 + 1.5
  ),
  hues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => _ * 30 + hueOffset)
}) => {
  const lightnessScale = (highContrastMode
    ? highContrastLightnessScale
    : lowContrastLightnessScale
  ).map(_ => _ * 10);

  if (invertedLightness) {
    lightnessScale.reverse();
  }

  return hues.reduce(
    (colors, hue) => {
      colors[hueName(hue, 0.75, 0.5)] = lightnessScale.map(lightness =>
        chromajs.hcl(hue, 85 - (20 * lightness) / 100, lightness).hex()
      );
      return colors;
    },
    {
      gray: lightnessScale.map(lightness => chromajs.hcl(0, 0, lightness).hex())
    }
  );
};
