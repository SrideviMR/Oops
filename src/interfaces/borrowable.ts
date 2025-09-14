export interface Borrowable {
    borrow(itemId: string, memberId: string): boolean;
    return(itemId: string): boolean;
}