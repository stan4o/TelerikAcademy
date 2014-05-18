function Solve (args) {
	var answer = 1;
	args = args.map(Number);

	for (var i = 2; i < args.length; i++) {
		if (args[i-1] > args[i]) {
			answer += 1;
		}
	};
	
	return answer;
}