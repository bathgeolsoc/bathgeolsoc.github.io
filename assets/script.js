const localGeologyButton = document.querySelector('#local-geology-button');
const localGeologyDropdown = document.querySelector('#local-geology-button-dropdown');
const aboutButton = document.querySelector('#about-button');
const aboutDropdown = document.querySelector('#about-button-dropdown');
const journalButton = document.querySelector('#journal-button');
const journalDropdown = document.querySelector('#journal-button-dropdown');
const membershipButton = document.querySelector('#membership-button');
const membershipDropdown = document.querySelector('#membership-button-dropdown');

localGeologyButton.addEventListener('click', event => {
	if(localGeologyDropdown.style.display === "none"){
		aboutDropdown.style.display = "none";
		journalDropdown.style.display = "none";
		membershipDropdown.style.display = "none";
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
		membershipDropdown.style.display = "none";
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
		membershipDropdown.style.display = "none";
		journalDropdown.style.display = "block";
	}
	else{
		journalDropdown.style.display = "none";
	}
});

membershipButton.addEventListener('click', event => {
	if(membershipDropdown.style.display === "none"){
		localGeologyDropdown.style.display = "none";
		aboutDropdown.style.display = "none";
		journalDropdown.style.display = "none";
		membershipDropdown.style.display = "block";
	}
	else{
		membershipDropdown.style.display = "none";
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
var selectedMembership = document.getElementById("mce-MEMBERSHIP");
console.log("membership select value:" + selectedMembership.value);
var familyContainer = document.getElementById("family-container");
if(selectedMembership.value=='Family £45'){
	familyContainer.style.display = "block";
}
else{
	familyContainer.style.display = "none";
}
}