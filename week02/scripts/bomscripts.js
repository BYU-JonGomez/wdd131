//declare three (3) variables that hold references to the input, button, and list elements.

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("list");

// Create a li element that will hold each entries chapter title and an associated delete button.
const li = document.createElement("li");

// Create a delete button.
const deleteButton = document.createElement("button");

//Populate the li element variable's textContent or innerHTML with the input value.
li.textcontent = input.value;
    //textContent is preferred over innerHTML because it is more secure.
    //However, if you need to include HTML tags, then you would use innerHTML.
    //textContent will not render HTML tags. It will display the tags as text.

    //Why is the value property used?
    //Because the input variable references an HTML input text field and that is what is wanted, i.e., 
    // the user's entry. Here is the HTML that was provided: <input type="text" id="favchap" placeholder="Alma 5">

// Populate the button textContent with a ❌.
deleteButton.textContent = "❌";

// Append the li element variable to the unorderrer list in yout HTML.
list.append(li);