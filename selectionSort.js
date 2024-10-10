export const selectionSort = (array) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arrayLength; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = i;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
};
