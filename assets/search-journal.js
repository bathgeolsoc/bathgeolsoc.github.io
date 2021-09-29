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
  this.field('topic');
  this.field('year');
  for (let key in window.store) {
  this.add({
    'id': key,
    'title': window.store[key].title,
    'author': window.store[key].author,
    'topic': window.store[key],
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
		selectElement('topic-select', '*');
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
      searchitem.innerHTML = `<p class="journal-result-small">${window.store[ref].year} | Topic: ${window.store[ref].topic}</p>
	  <h2 class="journal-result-large"><a target="_blank" href="{{ site.baseurl }}/journal/articles/${window.store[ref].url}">${window.store[ref].title}</a></h2>
	  <p class="journal-result-small grey-text">${window.store[ref].author}</p>
	  <p class="journal-result-small" id="journal-result-issue"><i>Bath Geological Society Journal</i> <strong>${window.store[ref].issue}</strong>, ${window.store[ref].page}</p>
	  <hr>`;

      articleResults.appendChild(searchitem);
}
};

getTerm();

function filterEvents() {
	searchcount.style.display = "none";
	articleResults.innerHTML = '';
	searchfield.value='';
	
	var selectedYear = document.getElementById("year-select").value;
	var selectedTopic = document.getElementById("topic-select").value;
	console.log("filtering by:" + selectedYear + " & " + selectedTopic);

	var result = window.store;
if(selectedYear.length>0){
	var result = result.filter(element => element.year == selectedYear);
}
if(selectedTopic.length>0){
	var result = result.filter(element => element.topic == selectedTopic);
}
	for(let item of result){
	  var searchitem = document.createElement('div');
      searchitem.className = 'searchitem';
      searchitem.innerHTML = `<p class="journal-result-small">${item.year} | Topic: ${item.topic}</p>
	  <h2 class="journal-result-large"><a target="_blank" href="{{ site.baseurl }}/journal/articles/${item.url}">${item.title}</a></h2>
	  <p class="journal-result-small grey-text">${item.author}</p>
	  <p class="journal-result-small" id="journal-result-issue"><i>Bath Geological Society Journal</i> <strong>${item.issue}</strong>, ${item.page}</p>
	  <hr>`;

      articleResults.appendChild(searchitem);
	}
}

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function getSearchTerm(){
	if(window.location.search.substring(0,8)=="?search="){
		var searchTerm = window.location.search.slice(8).replace(/%20/g, " ");
		searchfield.value = searchTerm;
		doSearch(searchTerm);
	}
}

filterEvents();
getSearchTerm();