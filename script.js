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

const form = document.querySelectorAll('#form');

console.log(form);
