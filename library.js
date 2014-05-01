function Library(){
    
    var shelves = [];
    
    this.addShelf = function(shelf){
        shelves.push(shelf);
    }
    
    this.removeShelf = function(shelf){
        var shelfLocation = shelves.indexOf(shelf);
        
        if (shelfLocation > -1){
            shelves.splice(shelfLocation, 1);
        } else{
            alert("Shelf not found!");
        }
    }
    
    this.reportBooks = function(){
        var message = "";
        
        for (var i in shelves){
            message += shelves[i].reportBooks() + "\n";
        }
        alert(message);
    }
    
    
}

function Shelf(section){
    
    this.section = section;
    
    var books = [];
    
    this.addBook = function(book){
        books.push(book);
    }
    
    this.removeBook = function(book){
        var bookLocation = books.indexOf(book);
        
        if (bookLocation > -1){
            books.splice(bookLocation, 1);
        } else{
            alert("Book not found!");
        }
    }
    
    this.reportBooks = function(){
        var message = this.section.toString() + " shelf contains:";
        
        for (var i in books){
            message += " " + books[i].title;
        }
        return message;
    }
}

function Book(title){
    
    this.title = title;
    this.currentShelf;
    
    
    this.enshelf = function(shelf){
        shelf.addBook(this);
    }
    
    this.unshelf = function(shelf){
        shelf.removeBook(this);
    }
    
}

