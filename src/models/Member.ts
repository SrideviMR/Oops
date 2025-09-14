import { Item } from './Item';

export class Member {
    private id: string;
    private name: string;
    private email: string;
    private borrowedItems: Item[] = [];
    private maxBorrowLimit: number = 5;
    
    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    getId(): string {
        return this.id;
    }
    
    getName(): string {
        return this.name;
    }
    
    canBorrow(): boolean {
        return this.borrowedItems.length < this.maxBorrowLimit;
    }
    
    borrowItem(item: Item): boolean {
        if (this.canBorrow() && item.isItemAvailable()) {
            this.borrowedItems.push(item);
            item.checkOut();
            return true;
        }
        return false;
    }
    
    returnItem(item: Item): boolean {
        const index = this.borrowedItems.indexOf(item);
        if (index > -1) {
            this.borrowedItems.splice(index, 1);
            item.returnItem();
            return true;
        }
        return false;
    }
    
    getBorrowedItems(): Item[] {
        return [...this.borrowedItems];
    }
}