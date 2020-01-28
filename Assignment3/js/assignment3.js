//create template for hotel objects

//object constructor
function Books(name, bookread){
    this.name = name;
    this.bookread = bookread;
    //a method
    this.checkAvailability = function(){
        if (bookread != 0)
            return this.name + " has been read.";
        else
            return this.name + " has not been read.";
    };

}

//create new instances of hotel objects
var Book1 = new Books("Johnathan", 1);
var Book2 = new Books("The Powr of One", 4);
var Book3 = new Books("Pride and Prejudice", 0);

//update html

//var details1 = Book1.name;
var details1 = Book1.checkAvailability();
var elBook1 = document.getElementById('book1');
elBook1.textContent = details1;

//var details2 = Book2.name;
details2 = Book2.checkAvailability();
var elBook2 = document.getElementById('book2');
elBook2.textContent = details2;

//var details2 = Book2.name;
details3 = Book3.checkAvailability();
var elBook3 = document.getElementById('book3');
elBook3.textContent = details3;