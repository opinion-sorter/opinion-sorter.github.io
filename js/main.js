var btnAdd = id("add-opinion");
var btnRun = id("run");
var divSetup = id("setup");
var divSorter = id("sorter");
var divOpinions = id("opinions");
function showSorterPanel() {
    divSetup.classList.add("sorting");
    divSorter.classList.add("sorting");
}
function hideSorterPanel() {
    divSetup.classList.remove("sorting");
    divSorter.classList.remove("sorting");
}
btnAdd.addEventListener("click", function () {
    var divOpinion = make("\n\t\n\t\t<div class=\"opinion opinion-text\">\n\t\t\t<input type=\"text\">\n\t\t\t<button class=\"remove-opinion\">Remove</button> \n\t\t</div>\n\n\t")[0];
    divOpinion.querySelector(".remove-opinion").addEventListener("click", function () {
        divOpinions.removeChild(divOpinion);
    });
    divOpinions.append(divOpinion);
});
btnRun.addEventListener("click", function () {
    var opinions = [];
    var hasErrors = false;
    var divInputs = divOpinions.querySelectorAll(".opinion-text>input");
    for (var i = 0; i < divInputs.length; i++) {
        var input = divInputs[i];
        if (input.value.trim().length > 0) {
            input.classList.remove("error");
            opinions.push(new TextOpinion(input.value.trim()));
        }
        else {
            hasErrors = true;
            input.classList.add("error");
        }
    }
    if (!hasErrors) {
        console.log(opinions);
        showSorterPanel();
    }
});
