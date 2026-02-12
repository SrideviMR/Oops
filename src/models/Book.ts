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
