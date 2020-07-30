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

    // 本を追加するメソッド
    addBook(book) {

        this._books.push(book);
        
    }

    // 本を検索するメソッド
    serch(querry) {
        // 全ての本に対して
        for(const book of this_books) {

            // もしタイトルか著者にquerryが含まれていたら
            if(book.title.includes(querry) || book.author.includes(querry)) {
                // その本を返す
                return book;
            }

        }
    }

}
