myInfo = {
    name: "Brother T",
    photo: "image/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [ 
        {
            place: "Rexburg, ID",
            lenght: "5 years",
        },
        {
            place: "Ammon, ID",
            lenght: "3 years"
        },
        {
            place: "Sandy, UT",
            lenght: "1 year"
        },
    ],
};

// Step 4: For each favorite food in the favoriteFoods prpoerty, 
// create an HTML <li> element and palce its value in the <li> element

let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods [0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods [1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods [2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods [3];

let favoriteFood5 = document.createElement("li");
favoriteFood5.textContent = myInfo.favoriteFoods [4];

// Step 5: Append the <li> elements created above as children of the 
// HTML <ul> element with an ID of favorite-foods

document:querySelector("#favorite-foods").appendChild(favoriteFood1);
document:querySelector("#favorite-foods").appendChild(favoriteFood2);
document:querySelector("#favorite-foods").appendChild(favoriteFood3);
document:querySelector("#favorite-foods").appendChild(favoriteFood4);
document:querySelector("#favorite-foods").appendChild(favoriteFood5);

//with .forEach
const foodsElement = document.querySelector("#favorite-foods");
function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}
{
myInfo.favoriteFood.forEach(createAndAppendFoodItem);
}

//with .map
const foodsElement = document.querySelector("#favorite-foods");
function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}

//this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
    return "<li>${food}</li>";
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
//we need to flatten the array of strings into onoe big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");

// Activity 2
//Another way that we could implement the map version of our code above
//would be with an arrow function. Our code could be written like this:

// The map example could be simplified as below:
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => "<li>${food}</li>");
//We need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join("");

//In fact that example could be simplified even further:
//Or we could in fact simplify this down to one line!

document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => "<li>${food}</li>")
    ,join("");    

//document.querySelector is to choose the document where the query will be applicable.

//Activity 3
//What if we needed yo uotput the contents of multiple differente Arrays? Can you make what we did above more re-usable?

//1 Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)