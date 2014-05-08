jsConsole.writeLine('Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.<br>');

function onClick() {
	var arrObj = [document, window, navigator];

	for (var i = 0; i < arrObj.length; i++) {
		var output = "", arr;

		for (var property in arrObj[i]) {
			output += property + ' ';
		};

		arr = output.split(' ');
		arr = arr.sort();

		jsConsole.writeLine('Object ' + arrObj[i] + ':');
		jsConsole.writeLine('Smallest property: ' + arr[1]); // arr[1] because arr[0] is empty
		jsConsole.writeLine('Largest property: ' + arr[arr.length - 1] + '<br>');
	};

};