var form = document.getElementById("toDoForm");
var list = document.getElementById("toDoList");

// var clear = function() {
// 	console.log("clear");
// };

// capture the event when someone clicks "ADD"
toDoForm.addEventListener("submit", function (event) {
	event.preventDefault();

	// creates a variable "toDo" that's the value of the input
	var toDo = this.toDoName.value;
	// creates a listItem within the DOM...
	var listItem = document.createElement("li");
	// ...and sets the innerHTML to the value above
	listItem.innerHTML = toDo;
	// appends the new list item to the DOM
	list.appendChild(listItem);

	// creates an undo button
	var undoButton = document.createElement("button");
	// sets its class to "myUndoButton", which exists in css
	undoButton.setAttribute("class", "myUndoButton");
	// text on the button itself
	undoButton.innerHTML = "DONE";
	// appends the new button to the DOM
	listItem.appendChild(undoButton);

	// creates a delete button
	var deleteButton = document.createElement("button");
	// sets its class to "myDeleteButton", which exists in css
	deleteButton.setAttribute("class", "myDeleteButton");
	// text on the button itself
	deleteButton.innerHTML = "DELETE";
	// appends the new button to the DOM
	listItem.appendChild(deleteButton);
	
	deleteButton.onclick = function () {
		console.log("let's delete this!");
		this.parentNode.remove(listItem);
	};

	undoButton.onclick = function () {
		if (undoButton.innerHTML === "UNDO") {
			console.log("let's redo this!");
			this.parentNode.style.textDecoration = "none";
			this.innerHTML = "DONE";
		} else {
			console.log("let's undo this!");
			this.parentNode.style.textDecoration = "line-through";
			this.innerHTML = "UNDO";
			}
		};
		
	this.toDoName.value = "";

	});


