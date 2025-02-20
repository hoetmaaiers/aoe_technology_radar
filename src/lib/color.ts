function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function getContrastColor(bgColor: string) {
  let r, g, b;
  if (bgColor.startsWith("#")) {
    const rgb = hexToRgb(bgColor);
    if (!rgb) return "black";
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  } else {
    const rgbValues = bgColor.match(/\d+/g);
    if (!rgbValues) return "black";
    r = parseInt(rgbValues[0]);
    g = parseInt(rgbValues[1]);
    b = parseInt(rgbValues[2]);
  }
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}
