import { Searchable } from '../interfaces/searchable';
import { Borrowable } from '../interfaces/borrowable';
import { Item } from '../models/Item';
import { Member } from '../models/Member';

export class Library implements Searchable, Borrowable {
    private items: Map<string, Item> = new Map();
    private members: Map<string, Member> = new Map();
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    addItem(item: Item): void {
        this.items.set(item.getId(), item);
    }
    
    addMember(member: Member): void {
        this.members.set(member.getId(), member);
    }
    
    search(query: string): Item[] {
        const results: Item[] = [];
        for (const item of this.items.values()) {
            if (item.getTitle().toLowerCase().includes(query.toLowerCase()) ||
                item.getItemInfo().toLowerCase().includes(query.toLowerCase())) {
                results.push(item);
            }
        }
        return results;
    }
    
    borrow(itemId: string, memberId: string): boolean {
        const item = this.items.get(itemId);
        const member = this.members.get(memberId);
        
        if (item && member) {
            return member.borrowItem(item);
        }
        return false;
    }
    
    return(itemId: string): boolean {
        const item = this.items.get(itemId);
        if (item && !item.isItemAvailable()) {
            for (const member of this.members.values()) {
                if (member.getBorrowedItems().includes(item)) {
                    return member.returnItem(item);
                }
            }
        }
        return false;
    }
    
    displayAllItems(): void {
        console.log(`\n=== ${this.name} Library Catalog ===`);
        for (const item of this.items.values()) {
            const status = item.isItemAvailable() ? "Available" : "Checked Out";
            console.log(`${item.getItemInfo()} - Status: ${status}`);
        }
    }
    
    getAvailableItems(): Item[] {
        return Array.from(this.items.values()).filter(item => item.isItemAvailable());
    }
}
