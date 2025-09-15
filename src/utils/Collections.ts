export class Collection<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    remove(item: T): boolean {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1); //removes that specific item from the array
            return true;
        }
        return false;
    }
    
    find(author: (item: T) => boolean): T | undefined {
        return this.items.find(author);
    }
    
    getAll(): T[] {
        return [...this.items];
    }
    
    count(): number {
        return this.items.length;
    }
}