export const colorForTopic = (
  count: number,
  index: number,
  y: number,
  range: number = 360,
  startAngle: number = 0,
  favourEdges: boolean = false,
) => {
  const saturation = `${((y + 1) / count) * 100}%`;

  const stepValue = range / count;
  const midPoint = range / 2;
  let hueVal: number;
  const lightVal: string = '60%';
  if (range <= 330) {
    hueVal = ((range * index) / (count - 1) + startAngle) % 360;
  } else {
    hueVal = ((range * index) / (count + 1) + startAngle) % 360;
  }

  if (favourEdges) {
    if (hueVal < midPoint) {
      hueVal = hueVal - index * (stepValue / 2);
    } else if (hueVal > midPoint) {
      hueVal = hueVal + (count - 1 - index) * (stepValue / 2);
    }
  }

  return `hsl(${Math.round(hueVal)}, ${saturation}, ${lightVal})`;
};
