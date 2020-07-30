"use strict"

// 
// 本及び本棚クラスを作成し本棚クラスに検索メソッドを作成する
// 

// 本クラス
class Book {
    constructor(title, author){

        this.title = title;

        this.author = author;

    }
}

// 本棚クラス
class Bookshelf {

    constructor(){

        this._books = [];

    }

    addBook(book) {

        this._books.push(book);
        
    }

}
