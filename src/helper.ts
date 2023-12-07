export function getContainerSize(ele: HTMLElement): [number, number] {
  if (!ele) {
    return [0, 0];
  }
  const style = getComputedStyle(ele);

  return [
    (ele.clientWidth || parseInt(style.width, 10)) - parseInt(style.paddingLeft, 10) - parseInt(style.paddingRight, 10),
    (ele.clientHeight || parseInt(style.height, 10)) -
      parseInt(style.paddingTop, 10) -
      parseInt(style.paddingBottom, 10),
  ];
}
