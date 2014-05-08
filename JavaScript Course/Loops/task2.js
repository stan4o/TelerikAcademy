jsConsole.writeLine('Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.<br>');

function onClick() {
	var n = jsConsole.readInteger('#input-tb');
	var numbers = '';
	var divisible = '';

	for (var i = 1; i <= n; i++) {
		if ((i % 3 == 0) && (i % 7 == 0)) divisible += i + ' ';
		else numbers += i + ' ';
	};

	jsConsole.writeLine('Numbers from 1 to ' + n + ' that are NOT divisible by 3 and 7:<br>' + numbers + '<br>');
	jsConsole.writeLine('Divisible by 3 and 7: ' + divisible);
};