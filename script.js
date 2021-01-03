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
        array.forEach(item => {
            var div = document.createElement('div');
            div.setAttribute('class','item');
            div.innerHTML = `<br><h3>${item.name}</h3><br><h3>${item.author}</h3><br>
                <h3>${item.pages} Pages</h3><br>`;
            var buttonDiv = document.createElement('button');
            if(item.read == true) {
                buttonDiv.textContent = 'Read';
            } else {
                buttonDiv.textContent = 'Not Read';
                div.style['background-color'] = 'wheat';
                div.style['color'] ='firebrick';
            }
            var eraseDiv = document.createElement('button');
            eraseDiv.textContent= 'Erase';
            div.appendChild(buttonDiv);
            div.appendChild(eraseDiv);
            shelf.appendChild(div);
            shelf.appendChild(formContainer);
            shelf.appendChild(newBook);
            eraseDiv.addEventListener('click', () => {
                shelf.removeChild(div);
            })
            buttonDiv.addEventListener('click', () => {
                buttonDiv.textContent = 'Read';
                div.style['background-color'] = 'firebrick';
                div.style['color'] ='wheat';

            })
        })
}
const container = document.querySelector('#container');
const formContainer = document.querySelector('#form-container');
const shelf = document.querySelector('#shelf');
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const newBook = document.querySelector('#new');

submit.addEventListener('click', () => {
    var name = document.getElementById("name").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById('yes').checked;
    var book = new Book(name,author,pages,read);
    addBookToLibrary(book);
    console.log(myLibrary);
    showBookLibrary(myLibrary);
    formContainer.style.display = 'none';

});

newBook.addEventListener('click', () => {
    formContainer.style.display = 'block';
})