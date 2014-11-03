// MAIN

$(document).ready( function() {
	$("form").on("submit", function(event) {	
		
		event.preventDefault();
		
		var baseCost = parseFloat($(this).find("input[name='baseCost']").val());
		console.log(baseCost)
		var tipRate = parseFloat($(this).find("input[name='tipRate']").val() / 100);
		console.log(tipRate)

		calculateTotal(baseCost, tipRate);
	});

});

var calculateTotal = function(cost, tip) {

	var tipValue = computeAmount(cost, tip);
 	var totalCost = cost + tipValue;

	document.getElementById("tipAmt").innerHTML = "Tip Amount: $" + tipValue.toFixed(2);
 	document.getElementById("mealCost").innerHTML = "Meal Cost: $" + cost.toFixed(2);
 	document.getElementById("finalCost").innerHTML = "Total: $" + totalCost.toFixed(2);
};

var computeAmount = function(base, pctg) {
	return base * pctg;
};
