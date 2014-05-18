function Solve(args) {
	var rowColJump = parseNumbers(args[0]);
	var rows = rowColJump[0];
	var cols = rowColJump[1];
	var allJumps = rowColJump[2];

	var startPos = parseNumbers(args[1]);
	var currRow = startPos[0];
	var currCol = startPos[1];

	function getAnswer () {
		var field = initMatrix();
		var jumps = readJumps();

		var escaped = false;
		var sumOfNumbers = 0;
		var totalJumps = 0;
		var jumpIndex = 0;

		while (true) {
			if ((currRow < 0 || currRow >= rows) || (currCol < 0 || currCol >= cols)) {
				escaped = true;
				break;
			}

			if (field[currRow][currCol] === "X") {
				escaped = false;
				break;
			}

			sumOfNumbers += field[currRow][currCol];
			totalJumps ++;

			var currentJump = jumps[jumpIndex++];
			if (jumpIndex >= jumps.length) {
				jumpIndex = 0;
			}
			field[currRow][currCol] = "X";

			currRow += currentJump.row;
			currCol += currentJump.col;
		}

		return escaped ? "escaped " + sumOfNumbers : "caught " + totalJumps;
	}

	function initMatrix() {
		var matrix = [];
		var counter = 1;

		for (var i = 0; i < rows; i++) {
			matrix[i] = [];
			for (var j = 0; j < cols; j++) {
				matrix[i][j] = counter++;
			}
		}
		return matrix;
	}

	function readJumps() {
		var jumps = [];

		for (var i = 2; i < 2 + allJumps; i++) {
			var parsedJump = parseNumbers(args[i]);
			var currJump = {
				row: parsedJump[0],
				col: parsedJump[1]
			}
			jumps.push(currJump);
		}

		return jumps;
	}

	function parseNumbers(input) {
		return input.split(' ').map(Number);
	}

	return getAnswer();
}

var input = [
	'6 7 3',
	'0 0',
	'2 2',
	'-2 2',
	'3 -1'
];

console.log(Solve(input));