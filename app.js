console.log('have fun !');


var info = {


	 first_name : "" ,
	last_name  : "" ,
	city : "" 



}
	$("#button").click(function(){
		
		info["first_name"] = $("#first_name").val();
		info["last_name"] = $("#last_name").val();
		info["city"] = $("#city").val();

$("#username").text(info["first_name"] + " "+info["last_name"]);
console.log(info)







});


















































// var formulaire = {

	// first_name : " ",
	// last_name: " ",
// 	city  :  " "
// }




// 	$("#button").click(function() {

// 		formulaire["first_name"] = $("#first_name").val();

// 		formulaire["last_name"] = $("#last_name").val();

// 		formulaire["city"] = $("#city").val();
		
// 		$("#username").text(formulaire["first_name"] + formulaire["last_name"]);
// 		console.log(formulaire)




// 	});






























