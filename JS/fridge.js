//declares the fridge array (what is currently in the fridge)
var fridge = [];

//this function reads whats inside of the array
function initialize(){
var fridgestring = localStorage.getItem('fridge');
if (fridge == null) {
  fridge = [];
} else {

  fridge = JSON.parse(fridgestring);
  for(var ind in fridge) {
    var name = fridge[ind]["foodName"];
    console.log(document);
    var htmlTemp = "<div class='fooz'>" + name + "</div>";
    $("#ingred").append(name+'<br/>');
  }
}
}

function removeElement(elementId) {
  var result = confirm("Are you sure you want to delete?");
    if (result) {
  document.getElementById(elementId).remove();}
}

function hideElement(elementId){
  var result = confirm("Are you sure you want to delete?");
  if (result) {
    document.getElementById(elementId).style.visibility= "hidden";
 }
}

	function printChecked(){
		var items=document.getElementsByName('acs');
		var selectedItems="";
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true)
				selectedItems+=items[i].value+"\n";
		}
		alert(selectedItems);
	}
