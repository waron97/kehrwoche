export const colorSequence = [
  '#77f9ff',
  '#ffec00',
  '#9eff00',
  '#bc85ff',
  '#ff6c6c',
];

export function nextColor(prevColor: string) {
  const prevIndex = colorSequence.indexOf(prevColor);
  const nextIndex = prevIndex + 1 === colorSequence.length ? 0 : prevIndex + 1;
  return colorSequence[nextIndex];
}

export function colorAfterIters(nIters: number, startColor: string) {
  let color = startColor;
  for (let i = 0; i < nIters; i++) {
    color = nextColor(color);
  }
  return color;
}
