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

// 
// 動作確認
// 

// 本棚クラスのインスタンスを作成
const shelf = new Bookshelf;

// 本クラスのインスタンス作成
const book1 = new Book("天の光は全て星", 'フレドリック・ブラウン');
const book2 = new Book('星を継ぐ者', 'ジェイムズ・P・ホーガン');

// 本棚に本を追加
shelf.addBook(book1);
shelf.addBook(book2);

// 検索してコンソールに出力
const result = shelf.serch('星');
console.log(result);

