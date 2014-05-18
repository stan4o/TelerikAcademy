function Solve (args) {
	var numbers = args.slice(1).map(Number);
	var maxSum = numbers[0];
	
	for (var i = 0; i < numbers.length; i+=1) {
		var currSum = 0;
		for (var j = i; j < numbers.length; j+=1) {
			currSum += numbers[j];
			if (currSum > maxSum) {
				maxSum = currSum;
			}
		};
	};
	return maxSum;
}
var input = [
'8',
'1',
'6',
'-9',
'4',
'4',
'-2',
'10',
'-1']

console.log(input);
console.log(Solve(input));
