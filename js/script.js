/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const pageElements = document.querySelector('ul');
const eachProfile = pageElements.children;
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const studentsPerPage = 10;
const searchDiv = document.querySelector('.student-search');
const noResultDiv = document.querySelector('.no-result');



// Function that dynamically displays the search box
let searchInput = document.createElement('input');
let searchButton = document.createElement('button');
function showSearch() {
    searchInput.placeholder = 'Search for students...';
    searchButton.textContent = 'Search';
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
}
// Function that determines number of pages required for the total number of students
function numberOfPages() {
    let pages = Math.ceil(eachProfile.length / studentsPerPage);
    return pages;
}

// Function shows ten students when the page loads
function showFisrtGroup() {
    for (let i = 0; i < eachProfile.length; i++) {
        if (i < studentsPerPage) {
            eachProfile[i].style.display = '';
        } else {
            eachProfile[i].style.display = 'none';
        }
    }
}



// Dynamically creates the buttons for the required number of students
for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    pageLink.className = 'active';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonUl.appendChild(pageli);
    pageli.appendChild(pageLink);
}



// Event listener helps the search box function
// Array to hold number of hidden students
const searchResults = [];
searchButton.addEventListener('click', () => {
    let filter = searchInput.value.toLowerCase();
    searchResults.length = 0;
    for (let i = 0; i < eachProfile.length; i++) {
        if (eachProfile[i].innerHTML.indexOf(filter) > -1) {
            eachProfile[i].style.display = '';

        } else {
            eachProfile[i].style.display = 'none';
            searchResults.push(i);
        }
    }
    // If all students are hidden, a 'no results' message is displayed
    if (searchResults.length === eachProfile.length) {
        noResultDiv.innerHTML = '<h1>No Results</h1>';
    } else {
        noResultDiv.innerHTML = '';
    }
});

// Event listener to divide students between pages
buttonDiv.addEventListener('click', (event) => {
    noResultDiv.innerHTML = '';
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < eachProfile.length; i++) {
        if (i >= min && i < max) {
            eachProfile[i].style.display = '';
        }  else {
            eachProfile[i].style.display = 'none';
        }
    }
});

// Function call to display first ten students on load
showFisrtGroup();

// Function call to show search box if JavaScript is enabled
showSearch();
