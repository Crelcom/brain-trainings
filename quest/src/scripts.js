/**
* The bubblesort algorithm. Complexity O(n^2).
*
* @public
* @param {array} array Input array
* @returns {array} array Sorted array
*/
function comparator(a, b) {
	return a - b;
}
// Default:
// function bubbleSort(array, cmp) {
//     cmp = cmp || comparator;
//     var temp;
//     for (var i = 0; i < array.length; i += 1) {
//       for (var j = i; j > 0; j -= 1) {
//         if (cmp(array[j], array[j - 1]) < 0) {
//           temp = array[j];
//           array[j] = array[j - 1];
//           array[j - 1] = temp;
//         }
//       }
//     }
//     return array;
//   }
function bubbleSort(array, predicate){
    var newArr = _.reduce(array, function(memo, val, key){
    	_.isEmpty(memo) ? memo.push(val) : '';
    	_.each(memo, function(val_s, key_s, list){
    		if(_.contains(list, val)) return;
    		(val_s < val) ? list.splice(key_s, 0, val) : '';
    	});
    	return memo;
    }, []);
    return newArr.reverse();
}