import { bubbleSort } from './bubbleSort.js';
import { selectionSort } from './selectionSort.js';

const unsortedArray = [4, 3, 76, 54, 111, 43, 1, 5, 8, 0];
const bubbleSortedArray = bubbleSort(unsortedArray);
const selectionSortedArray = selectionSort(unsortedArray);

console.log('Unsorted Array: ', unsortedArray.join(', '));
console.log('Bubble sorted array: ', bubbleSortedArray.join(', '));
console.log('Selection sorted array: ', selectionSortedArray.join(', '));
