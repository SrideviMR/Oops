import { Item } from './Item';

export class Magazine extends Item {
    private issueNumber: number;
    private publisher: string;
    private publishDate: Date;
    
    constructor(id: string, title: string, issueNumber: number, publisher: string, publishDate: Date) {
        super(id, title); //polymorphism uses id, title from parent class Item
        this.issueNumber = issueNumber; //initializing the properties of Magazine class
        this.publisher = publisher;
        this.publishDate = publishDate;
    }
    
    getItemInfo(): string {
        return `Magazine: ${this.title} Issue #${this.issueNumber} by ${this.publisher}`;
    }
    
    checkOut(): boolean {
        const currentDate = new Date();
        const daysDiff = (currentDate.getTime() - this.publishDate.getTime()) / (1000 * 3600 * 24);
        
        if (daysDiff > 30) {
            console.log("This is an older magazine - extended checkout period available");
        }
        
        return super.checkOut();
    }
}