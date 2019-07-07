let btnAdd = id("add-opinion");
let btnRun = id("run");
let divOpinions = id("opinions");

btnAdd.addEventListener("click", function() {

	let divOpinion = make(`
	
		<div class="opinion opinion-text">
			<input type="text">
			<button class="remove-opinion">Remove</button> 
		</div>

	`)[0];

	divOpinion.querySelector(".remove-opinion").addEventListener("click", function() {
		
		divOpinions.removeChild(divOpinion);

	});

	divOpinions.append(divOpinion);

});

btnRun.addEventListener("click", function() {

	let opinions: Opinion<any>[] = [];
	let hasErrors = false;

	let divInputs: NodeList = divOpinions.querySelectorAll(".opinion-text>input");

	for (let i = 0; i < divInputs.length; i++) {
		const input = <HTMLInputElement>divInputs[i];
		
		if (input.value.trim().length > 0) {
			input.classList.remove("error")
			opinions.push(new TextOpinion(input.value.trim()))
		}
		else {
			hasErrors = true;
			input.classList.add("error");
		}
	}

	if (!hasErrors) {
		console.log(divInputs);
		console.log(opinions);	
	}

});