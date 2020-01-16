const localGeologyButton = document.querySelector('#local-geology-button');
const localGeologyDropdown = document.querySelector('#local-geology-button-dropdown');
const aboutButton = document.querySelector('#about-button');
const aboutDropdown = document.querySelector('#about-button-dropdown');
const journalButton = document.querySelector('#journal-button');
const journalDropdown = document.querySelector('#journal-button-dropdown');

localGeologyButton.addEventListener('click', event => {
	if(localGeologyDropdown.style.display === "none"){
		aboutDropdown.style.display = "none";
		journalDropdown.style.display = "none";
		localGeologyDropdown.style.display = "block";
	}
	else{
		localGeologyDropdown.style.display = "none";
	}
});

aboutButton.addEventListener('click', event => {
	if(aboutDropdown.style.display === "none"){
		localGeologyDropdown.style.display = "none";
		journalDropdown.style.display = "none";
		aboutDropdown.style.display = "block";
	}
	else{
		aboutDropdown.style.display = "none";
	}
});

journalButton.addEventListener('click', event => {
	if(journalDropdown.style.display === "none"){
		localGeologyDropdown.style.display = "none";
		aboutDropdown.style.display = "none";
		journalDropdown.style.display = "block";
	}
	else{
		journalDropdown.style.display = "none";
	}
});

document.addEventListener('click', function(event) { 
if(event.target!=localGeologyDropdown && event.target!=localGeologyButton && event.target.parentElement!=localGeologyDropdown && event.target.parentElement.parentElement!=localGeologyDropdown)
{
  if(localGeologyDropdown.style.display === "block") {
    localGeologyDropdown.style.display = "none";
  }  
}  

if(event.target!=aboutDropdown && event.target!=aboutButton && event.target.parentElement!=aboutDropdown && event.target.parentElement.parentElement!=aboutDropdown)
{
  if(aboutDropdown.style.display === "block") {
    aboutDropdown.style.display = "none";
  }  
}  

if(event.target!=journalDropdown && event.target!=journalButton && event.target.parentElement!=journalDropdown && event.target.parentElement.parentElement!=journalDropdown)
{
  if(journalDropdown.style.display === "block") {
    journalDropdown.style.display = "none";
  }  
}  
});

function membershipSelect(){
var selectedMembership = document.getElementById("membership-select");
console.log("membership select value:" + selectedMembership.value);
var familyContainer = document.getElementById("family-container");
var family2 = document.getElementById("family-2");
var nameLabel = document.getElementById("name-1-label");
if(selectedMembership.value=='F'){
	var familySelect = document.getElementById("family-select");
	familySelect.value="2";
	familyContainer.style.display = "block";
	family2.style.display = "block";
	nameLabel.innerHTML = "Name 1:";
}
else{
	familyContainer.style.display = "none";
	family2.style.display = "none";
	var family3 = document.getElementById("family-3");
	family3.style.display = "none";
	var family4 = document.getElementById("family-4");
	family4.style.display = "none";
	nameLabel.innerHTML = "Name:";
}
}

function familySelect(){
var familySelect = document.getElementById("family-select");
var family2 = document.getElementById("family-2");
var family3 = document.getElementById("family-3");
var family4 = document.getElementById("family-4");
if(familySelect.value=="2"){
	family3.style.display = "none";
	family4.style.display = "none";
}
else if(familySelect.value=="3"){
	family3.style.display = "block";
	family4.style.display = "none";
}
else{
	family3.style.display = "block";
	family4.style.display = "block";
}
}