const localGeologyButton = document.querySelector('#local-geology-button');
const localGeologyDropdown = document.querySelector('#local-geology-button-dropdown');

localGeologyButton.addEventListener('click', event => {
	if(localGeologyDropdown.style.display === "none"){
		aboutDropdown.style.display = "none";
		localGeologyDropdown.style.display = "block";
	}
	else{
		localGeologyDropdown.style.display = "none";
	}
});
const aboutButton = document.querySelector('#about-button');
const aboutDropdown = document.querySelector('#about-button-dropdown');

aboutButton.addEventListener('click', event => {
	if(aboutDropdown.style.display === "none"){
		localGeologyDropdown.style.display = "none";
		aboutDropdown.style.display = "block";
	}
	else{
		aboutDropdown.style.display = "none";
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
});