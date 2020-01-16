---
---

{% include_relative lunr.js %}

const searchform = document.getElementById("search-form");
const searchfield = document.getElementById("searchfield");
const upcomingEvents = document.getElementById("upcoming-events");
const filteredEvents = document.getElementById("filtered-events");
const searchcount = document.querySelector('.searchcount')

var index = lunr(function() {
  this.ref('id');
  this.field('title', {boost: 10});
  this.field('speaker');
  this.field('excerpt');
  this.field('year');
  for (let key in window.store) {
  this.add({
    'id': key,
    'title': window.store[key].title,
    'speaker': window.store[key].speaker,
    'excerpt': window.store[key].excerpt,
	'year': window.store[key].year
  });
}
});

const getTerm = function() {
  searchfield.addEventListener('keyup', function(event) {
    event.preventDefault();
    const query = this.value ;   
    doSearch(query);
  })
}

var doSearch = function () {
		console.log("Searching for " + searchfield.value);
		searchcount.style.display = "block";
		selectElement('year-select', '*');
		var result = index.search('*' + searchfield.value + '*');
		filteredEvents.innerHTML = '';
		searchcount.innerHTML = `Found ${result.length} lectures`;
		showResults(result);
};

var showResults = (result) => {

	upcomingEvents.style.display = "none";
	filteredEvents.style.display = "block";

    for (let item of result) {
      var ref = item.ref;
      var searchitem = document.createElement('div');
      searchitem.className = 'searchitem';
      searchitem.innerHTML = `<div class="circle-date">${window.store[ref].dayofweek}<br><div class='centre-date'>${window.store[ref].date}</div>${window.store[ref].year}</div>
	  <div class="event-content"><h2><a href="${window.store[ref].url}">${window.store[ref].title}</a></h2>
	  <h3>Speaker: ${window.store[ref].speaker}</h3>
	  <p>${window.store[ref].excerpt}</p></div>
	  <hr>`;

      filteredEvents.appendChild(searchitem);
}
};

getTerm();

function timeFilterEvents() {
	searchcount.style.display = "none";
	filteredEvents.innerHTML = '';
	searchfield.value='';
	
	var selectedYear = document.getElementById("year-select").value;
	
	if(selectedYear=='upcoming'){
		upcomingEvents.style.display = "block";
		filteredEvents.style.display = "none";
	}
	else{
		upcomingEvents.style.display = "none";
		filteredEvents.style.display = "block";
		var result = index.search('year: ' + selectedYear);
		showResults(result);
	}
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}