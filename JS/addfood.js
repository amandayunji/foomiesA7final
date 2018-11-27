var fridge = [];

function saveNewFood(){
  var newFood = {
                 'foodName':document.getElementById("selected-text").value,
                 'owner':document.getElementById("owner").value,
                 'expDate':document.getElementById("datepicker").value,
                 'communal': document.getElementById("communal").value,
                 'note': document.getElementById("foodNote").value,
                 'foodImage': document.getElementById("foodimage").value,
               }

  var fieldValue = document.getElementById("selected-text").value;
  localStorage.setItem('foodName', fieldValue)

  var fieldValue = document.getElementById("owner").value;
  localStorage.setItem('owner', fieldValue)

  var fieldValue = document.getElementById("datepicker").value;
  localStorage.setItem('expDate', fieldValue)

  var fieldValue = document.getElementById("communal").value;
  localStorage.setItem('communal', fieldValue)

  var fieldValue = document.getElementById("foodNote").value;
  localStorage.setItem("note", fieldValue)

  var fieldValue = document.getElementById("foodimage").value;
  localStorage.setItem("foodImage", fieldValue)

  localStorage.setItem("foodItem", JSON.stringify(newFood));


  fridge.push(newFood);
  localStorage.setItem("fridge", JSON.stringify(fridge));
  console.log(fridge);
}

//This initializes the fridge array
function initialize(){
var fridgestring = localStorage.getItem("fridge");
  if (fridge == null) {
    fridge = [];
  } else {
    fridge = JSON.parse(fridgestring);
  }

console.log("INIT");
console.log(fridge);
}

//Local Storage Variables
//what a user object consists of
/*
var user = {'firstName':document.getElementById('fName').value,
						'lastName': document.getElementById('lName').value,
						'email':document.getElementById('mail').value,
						'username':document.getElementById('userName').value,
						'password':document.getElementById('pass').value
          }

//a list of all the users
var userlist = [];
*/

//what a food object consists of
/* var newFood = {
               'foodName':document.getElementById("selected-text").value,
               'owner':document.getElementById("owner").value,
               'expDate':document.getElementById("datepicker").value,
               'communal': document.getElementById("communal").value,
               'note': document.getElementById("foodNote").value,
               'foodImage': document.getElementById("foodimage").value,
             }
*/
