/*
/  Library class. Contains the ability to add and remove shelves,
/  and to report all books contained in all shelves.
*/

function Library(){
    
    var shelves = [];
    
    this.addShelf = function(shelf){
        shelves.push(shelf);
    };
    
    this.removeShelf = function(shelf){
        var shelfLocation = shelves.indexOf(shelf);
        
        if (shelfLocation > -1){
            shelves.splice(shelfLocation, 1);
        } else{
            alert("Shelf not found!");
        }
    };
    
    this.reportBooks = function(){
        var message = "";
        
        for (var i in shelves){
            message += shelves[i].reportBooks() + "\n";
        }
        alert(message);
    };
    
    
}

/*
/  Shelf class. Contains the ability to add and remove books,
/  and to report all books on shelf. Takes one argument, the
/  section of the library, possibly 'fiction' or 'nonfiction.'
*/

function Shelf(section){
    
    this.section = section;
    
    var books = [];
    
    this.addBook = function(book){
        books.push(book);
    };
    
    this.removeBook = function(book){
        var bookLocation = books.indexOf(book);
        
        if (bookLocation > -1){
            books.splice(bookLocation, 1);
        } else{
            alert("Book not found!");
        }
    };
    
    this.reportBooks = function(){
        var message = this.section.toString() + " shelf contains:";
        
        for (var i in books){
            message += " " + books[i].title;
        }
        return message;
    };
}

/*
/  Book class. Contains book title and the ability to place and remove
/  onto a shelf.
*/

function Book(title){
    
    this.title = title;

    this.enshelf = function(shelf){
        shelf.addBook(this);
    };
    
    this.deshelf = function(shelf){
        shelf.removeBook(this);
    };
    
}
