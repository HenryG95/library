let myLibrary = [];
function Book (name,author,pages,read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
function addBookToLibrary (book) {
    myLibrary.push(book);
}
function showBookLibrary (array) {
        var div = document.createElement('div');
        div.textContent = 'hello';
        shelf.appendChild(div);
}

const shelf = document.querySelector('#shelf');
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById('yes').checked;
    var book = new Book(name,author,pages,read);
    addBookToLibrary(book);
    console.log(myLibrary);
    showBookLibrary(myLibrary);

});