function getWidthInEm<T extends Element>(element: T) {
  const { fontSize, width } = getComputedStyle(element);
  return `${parseFloat(width) / parseFloat(fontSize)}em`;
}

export { getWidthInEm };
