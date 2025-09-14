export abstract class Item {
    protected id: string;
    protected title: string;
    protected isAvailable: boolean = true;
    
    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
    }
    
    getId(): string {
        return this.id;
    }
    
    getTitle(): string {
        return this.title;
    }
    
    isItemAvailable(): boolean {
        return this.isAvailable;
    }
    
    abstract getItemInfo(): string;
    
    checkOut(): boolean {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }
    
    returnItem(): void {
        this.isAvailable = true;
    }
}