---
---

{% include_relative lunr.js %}

const searchform = document.getElementById("search-form");
const searchfield = document.getElementById("searchfield");
const articleResults = document.getElementById("article-results");
const searchcount = document.querySelector('.searchcount')

var index = lunr(function() {
  this.ref('id');
  this.field('title', {boost: 10});
  this.field('author');
  this.field('type');
  this.field('year');
  for (let key in window.store) {
  this.add({
    'id': key,
    'title': window.store[key].title,
    'author': window.store[key].author,
    'type': window.store[key],
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
		selectElement('year-select', '*');
		selectElement('type-select', '*');
		searchcount.style.display = "block";
		var result = index.search('*' + searchfield.value + '*');
		articleResults.innerHTML = '';
		searchcount.innerHTML = `Found ${result.length} articles`;
		showResults(result);
};

var showResults = (result) => {
    for (let item of result) {
      var ref = item.ref;
      var searchitem = document.createElement('div');
      searchitem.className = 'searchitem';
      searchitem.innerHTML = `<p class="journal-result-small">${window.store[ref].year} | Type: ${window.store[ref].type}</p>
	  <h2 class="journal-result-large"><a target="_blank" href="${window.store[ref].url}">${window.store[ref].title}</a></h2>`;
		if(window.store[ref].subtitle){
		  searchitem.innerHTML = searchitem.innerHTML +`<p class="journal-result-small grey-text">${window.store[ref].subtitle}</p>`;
		}
	  if(window.store[ref].image && window.store[ref].imageheight){
	  searchitem.innerHTML = searchitem.innerHTML +`<br><img style="border: solid 3px #7b7b7b; height: ${window.store[ref].imageheight}px; margin: auto; display: block;" src="${window.store[ref].image}">`;
	  }
	  searchitem.innerHTML = searchitem.innerHTML +`<hr>`;

      articleResults.appendChild(searchitem);
}
};

getTerm();

function filterEvents() {
	searchcount.style.display = "none";
	articleResults.innerHTML = '';
	searchfield.value='';
	
	var selectedYear = document.getElementById("year-select").value;
	var selectedType = document.getElementById("type-select").value;
	console.log("filtering by:" + selectedYear + " & " + selectedType);

	var result = window.store;
if(selectedYear.length>0){
	var result = result.filter(element => element.year == selectedYear);
}
if(selectedType.length>0){
	var result = result.filter(element => element.type == selectedType);
}
	for(let item of result){
	  var searchitem = document.createElement('div');
      searchitem.className = 'searchitem';
      searchitem.innerHTML = `<p class="journal-result-small">${item.year} | Type: ${item.type}</p>
	  <h2 class="journal-result-large"><a target="_blank" href="${item.url}">${item.title}</a></h2>`;
		if(item.subtitle){
		  searchitem.innerHTML = searchitem.innerHTML +`<p class="journal-result-small grey-text">${item.subtitle}</p>`;
		}
	  if(item.image && item.imageheight){
		searchitem.innerHTML = searchitem.innerHTML +`<br><img style="border: solid 3px #7b7b7b; height: ${item.imageheight}px; margin: auto; display: block;" src="${item.image}">`;
	  }
	  searchitem.innerHTML = searchitem.innerHTML +`<hr>`;

      articleResults.appendChild(searchitem);
	}
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

filterEvents();