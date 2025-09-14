export class LibraryUtils {
    static readonly LIBRARY_CODE = "LIB";
    private static itemCounter = 0;
    
    static generateItemId(): string {
        return `${this.LIBRARY_CODE}-${String(++this.itemCounter).padStart(4, '0')}`;
    }
    
static generateMemberId(): string {
        return `MEM-${Date.now()}`;
    }
    
    static formatDate(date: Date): string {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}
