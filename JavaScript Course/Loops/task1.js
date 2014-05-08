jsConsole.writeLine('Write a script that prints all the numbers from 1 to N<br>');

function onClick () {
	var n = jsConsole.readInteger('#input-tb');
	var numbers = '';

	for (var i = 1; i <= n; i++) {
		numbers += i + ' ';
	};

	jsConsole.writeLine('These are the numbers from 1 to ' + n + ':<br>' + numbers);
}