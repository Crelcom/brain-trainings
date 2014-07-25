/**
* The bubblesort algorithm. Complexity O(n^2).
*
* @public
* @param {array} array Input array
* @returns {array} array Sorted array
*/
function defaultsort(a, b) {
	return a - b;
}

function bubbleSort(array, predicate){
	predicate = predicate || defaultsort;
    
	// code here ...

    return array;
}