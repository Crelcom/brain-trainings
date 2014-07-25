/**
* test for bubble sort
*/
describe('Try sort with arrays', function(){
	var a = [1,2,33,20,21,8,44,41,56,28],
	res = [1,2,8,20,21,28,33,41,44,56];

	beforeEach(function(){
		a = _.shuffle(a);
	})
	
	function testBubble(input, result){
		var sorted = bubbleSort(input);

		it("compare arrays", function() {
	    	expect(sorted).toEqual(result);
	  	});
	}
	
	var i = 5;
	while(i){
		testBubble(a, res);
		i--;
	}
});