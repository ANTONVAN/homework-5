var textArea = $(".edit_cont");
var saveButton = $(".save_btn");
var hour = $(".hour");
var obj = {};
var currentDateTime = new Date();
var currentHour = currentDateTime.getHours(); 
var currentDay = currentDateTime.getDay();


$("#currentDay").text(currentDateTime);
/*

function createTaskRows(){
	for(int i=6;i<12;i++){
		var row = $("<div>");
		row.addClass("row my-row");
		var col = $("<div>");
		col.addClass("col md-1 hour");
		col.text(``);

		$(".container").append(row);
		<div class = "row my-row">
		    <div class = "col-md-1 hour" id = "13"> 1pm </div>
		    <textarea class="col edit_cont"></textarea>
		    <div class = "col-md-1 save_btn btn btn-primary" type="button"> save </div>
		</div>



	}
}
*/

saveButton.on("click", function(){
	var taskText = $(this).prev().val();
	//console.log(taskText);

	var taskHour = $(this).prevAll("div").attr("id"); 
	//console.log(taskHour);

	localStorage.setItem(`${taskHour}`, JSON.stringify(taskText));
	
});


function colorTimes(){
	for(var i=7;i<22;i++){
		//console.log($(`#${i}`).attr("id"));
		if($(`#${i}`).attr("id")<currentHour){
			$(`#${i}`).next().css("background-color","#DCDCDC");	
		}else if($(`#${i}`).attr("id")==currentHour){
			$(`#${i}`).next().css("background-color","#FF7F50");	
		}else{
			$(`#${i}`).next().css("background-color","#00FA9A");	
		}
	}
}
colorTimes();

function readFromStorage(){

	for(var i=7; i<22;i++){
	var	taskTextFromStorage = JSON.parse(localStorage.getItem(i));
	//console.log(taskTextFromStorage);
	
	obj[`${i}`] = taskTextFromStorage;	
	
	
	}	
}

function renderTasks(){
	for(var i=7; i<22;i++){
		if(obj[`${i}`]!==null){
		$(`#${i}`).next().val(`${obj[i]}`);
		}
		//console.log(obj[i]);
		//console.log($(`#${i}`).next());
	}
	
}

//console.log(obj);
readFromStorage();
renderTasks();



