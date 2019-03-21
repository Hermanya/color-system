import chromajs from 'chroma-js';
import hueName from '../utils/hue-name';

export const useColorSystem = ({
  hueOffset = 28,
  saturation = 85,
  lowSaturation = 50,
  invertedLightness = false,
  highContrastMode = false,
  mapChroma = (s, l) => s - (l / 100) * ((100 - saturation) * 2),
  highContrastLightnessScale = [0, 0.5, 1, 2, 4, 6, 8, 9, 9.5, 10],
  lowContrastLightnessScale = highContrastLightnessScale.map(
    x => x * 0.9 + 0.5
  ),
  hues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => _ * 30 + hueOffset)
} = {}) => {
  const lightnessScale = (highContrastMode
    ? highContrastLightnessScale
    : lowContrastLightnessScale
  ).map(_ => _ * 10);

  if (invertedLightness) {
    lightnessScale.reverse();
  }

  return hues.reduce(
    (colors, hue) => {
      colors[hueName(hue, saturation / 100, 0.5)] = lightnessScale.map(
        lightness =>
          chromajs.hcl(hue, mapChroma(saturation, lightness), lightness).hex()
      );
      colors.washed[hueName(hue, saturation / 100, 0.5)] = lightnessScale.map(
        lightness =>
          chromajs
            .hcl(hue, mapChroma(lowSaturation, lightness), lightness)
            .hex()
      );
      return colors;
    },
    {
      gray: lightnessScale.map(lightness =>
        chromajs.hcl(0, 0, lightness).hex()
      ),
      washed: {}
    }
  );
};

export default useColorSystem;
