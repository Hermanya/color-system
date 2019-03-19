const hueName = (h, s, l) => {
  const i = Math.round(h) % 360;

  if (s < 0.05 || (l < 0.12 && s < 0.18) || l > 0.95) {
    return 'gray';
  }

  if (i < 30) {
    return 'red';
  }

  if (i < 60) {
    return 'orange';
  }

  if (i < 90) {
    return 'yellow';
  }

  if (i < 90) {
    return 'lime';
  }

  if (i < 120) {
    return 'green';
  }

  if (i < 150) {
    return 'green';
  }

  if (i < 180) {
    return 'teal';
  }

  if (i < 210) {
    if (s < 0.2) {
      return 'gray';
    }

    return 'cyan';
  }

  if (i < 260) {
    if (s < 0.2) {
      return 'gray';
    }

    return 'blue';
  }

  if (i < 300) {
    if (s < 0.6) {
      return 'purple';
    }

    return 'indigo';
  }

  if (i < 335) {
    return 'fuschia';
  }

  return 'red';
};

module.exports = hueName;
