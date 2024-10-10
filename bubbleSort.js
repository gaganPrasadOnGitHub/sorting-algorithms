export const bubbleSort = (unsortedArray = []) => {
  const array = [...unsortedArray];
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return array;
};
