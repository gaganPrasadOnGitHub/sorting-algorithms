import { bubbleSort } from './bubbleSort.js';

const unsortedArray = [4, 3, 76, 54, 111, 43, 1, 5, 8, 0];
const bubbleSortedArray = bubbleSort(unsortedArray);

console.log('Unsorted Array: ', unsortedArray.join(', '));
console.log('Bubble sorted array: ', bubbleSortedArray.join(', '));
