/**
 * slice - copies the first part of the array and returns it as a new array
 * array.slice(fromIndex, until(not included));
 * 
 * Copies elements from an array and returns them as a new array
 * Doesn’t change the original array
 * Starts slicing from … until given index: array.slice (from, until)
 * Slice doesn’t include “until” index parameter
 * Can be used both for arrays and strings
 */

 const array = [1,2,3,4,5];
 const newArray = array.slice(1, 3); 

 // newArray = [2, 3];
 // array = [1,2,3,4,5];

 /**
  * splice - 
  * array.splice(index, numOfElements)
  * 
  * Used for adding/removing elements from array
  * Returns an array of removed elements
  * Changes the array
  * For adding elements: array.splice (index, number of elements, element)
  * For removing elements: array.splice (index, number of elements)
  * Can only be used for arrays
  */

 const array = [1,2,3,4,5];
 array.splice(2);

 // output - [3, 4, 5]
 // array = [1, 2]