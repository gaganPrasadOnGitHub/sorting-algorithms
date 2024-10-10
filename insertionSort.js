export const insertionSort = (unsortedArray = []) => {
  const array = [...unsortedArray];
  const arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    const currentValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentValue;
  }

  return array;
};
