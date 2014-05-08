jsConsole.writeLine('Write a script that finds the max and min number from a sequence of numbers.<br>');

function onClick() {
	var input = document.getElementById('input-tb').value;
	input = input.trim(); // trim for unwanted spaces before and after the sequence
	var arr = input.split(' ');
	arr = arr.sort(function(a,b){return a-b;}); // sorting the numbers ASC

	// Check for valid sequence
	if (isNaN(parseFloat(arr[0])) || isNaN(parseFloat(arr[arr.length-1])) || input === "") {
		jsConsole.writeLine('Please insert a valid sequence of numbers separated by a space -> " "');
	} else {
		jsConsole.writeLine('Max value is: ' + arr[arr.length-1]);
		jsConsole.writeLine('Min value is: ' + arr[0]);
	};
};