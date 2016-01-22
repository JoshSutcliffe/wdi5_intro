// adding values to HTML from a button click from JS


var newToDoInput = document.getElementById("new-todo-input");
var newToDoBtn = document.getElementById("new-todo-button");
var toDolist = document.getElementById("todos");
var newList = document.getElementById("completed");

var addNewItem = function() {
  // console.log("cheddar");

  var todoValue = newToDoInput.value;
  // console.log(todoValue);

  var newItem = document.createElement("li"); // creating empty list item of <li>
  var contentNode = document.createTextNode(todoValue); // This takes the input value
  newItem.appendChild(contentNode); //this part returns the value

  newItem.addEventListener("click", function(event) {
    event.target.className = "done";
    console.log(event.target.innerHTML);

  })

  toDolist.appendChild(newItem); // here it takes above variable and adds it to html

}

newToDoBtn.addEventListener("click", addNewItem);

// toDolist.addEventListener("click", function() {
  
//   if (event.target.tagName === "LI") {
//     event.target.className = "done";
//     console.log("Cheese");

//     var completedList = document.createElement("li");
//     var createNewList = document.createTextNode(event.target.innerHTML);
//     completedList.appendChild(createNewList);
//     console.log(completedList); 
//     console.log(createNewList); 


//     debugger


//     newList.appendChild(completedList);

//   }

// })
