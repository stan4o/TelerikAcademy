jsConsole.writeLine('1. Assignment<br>');

jsConsole.writeLine('There are 6 types of JavaScript literals and they are:<br>');

var integerLiteral = 123;
jsConsole.writeLine('Integer Literal: ' + integerLiteral);

var floatNumberLiteral = 123.123;
jsConsole.writeLine('Floating Number Literal: ' + floatNumberLiteral);

var arrayLiteral = [1, 'Two', 3, '3rd position', 'Dog'];
jsConsole.writeLine('Array Literal: [' + arrayLiteral + ']');

var boolLiteral = [true, false];
jsConsole.writeLine('Boolean Literal: can be ' + boolLiteral[0] + ' or ' + boolLiteral[1]);

var objLiteral = {
	firstName: "John",
	lastName:  "Doe"
};
jsConsole.writeLine('Object Literal: { firstName: "' + objLiteral.firstName + '", lastName: "' + objLiteral.lastName + '" }');

var stringLiteral = 'This is a string literal.';
jsConsole.writeLine('String Literal: "' + stringLiteral + '"');


jsConsole.writeLine('<br><br>2. Assignment<br>');

//var stringVar = '"How you doin\'?", Joey said.' // Single quotes
 var stringVar = "\"How you doin'?\", Joey said." // Double quotes
jsConsole.writeLine(stringVar);


jsConsole.writeLine('<br><br>3. Assignment<br>');

jsConsole.writeLine('The type of Integer Literal is: ' + typeof integerLiteral);
jsConsole.writeLine('The type of Floating Number Literal is: ' + typeof floatNumberLiteral);
jsConsole.writeLine('The type of Array Literal is: ' + typeof arrayLiteral);
jsConsole.writeLine('The type of Boolean Literal is: ' + typeof boolLiteral);
jsConsole.writeLine('The type of Object Literal is: ' + typeof objLiteral);
jsConsole.writeLine('The type of String Literal is: ' + typeof stringLiteral);


jsConsole.writeLine('<br><br>4. Assignment<br>');

var nullVar = null;
var undefinedVar;

jsConsole.writeLine('The type of null variable is: ' + typeof nullVar);
jsConsole.writeLine('The type of undefined variable is: ' + typeof undefinedVar);