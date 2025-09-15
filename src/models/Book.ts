import { Item } from './Item';

export class Book extends Item {
    private author: string;
    private isbn: string;
    private pages: number;
    
    constructor(id: string, title: string, author: string, isbn: string, pages: number) {
        super(id, title); //polymorphism uses id, title from parent class Item 
        this.author = author;
        this.isbn = isbn;
        this.pages = pages;
    }
    
    getAuthor(): string {
        return this.author;
    }
    
    getISBN(): string {
        return this.isbn;
    }
    
    getItemInfo(): string {
        return `Book: ${this.title} by ${this.author} (ISBN: ${this.isbn}, ${this.pages} pages)`;
    }
}

class Test {
    test() {
        console.log("Testing Book class...");
    }
     testing = new Test();
}
class Test1 extends Test {
    test() { //overridding
    console.log("Testing Book class extended...");
    }
}

const testing1 = new Test1();
testing1.test();


class Add { //overloading 
    add(a: number, b: number): number; //function overloading
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }   
}