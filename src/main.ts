import { Library } from './services/Library';
import { Book } from './models/Book';
import { Magazine } from './models/Magazine';
import { Member } from './models/Member';
import { LibraryUtils } from './utils/LibraryUtils';
import { Collection } from './utils/Collections';

function demonstrateLibrarySystem() {
    console.log("=== TypeScript OOP Library Management System Demo ===\n");
    
    const cityLibrary = new Library("City Central Library");
    
    const book1 = new Book(
        LibraryUtils.generateItemId(),
        "The TypeScript Handbook",
        "Microsoft Team",
        "978-1234567890",
        350
    );
    
    const book2 = new Book(
        LibraryUtils.generateItemId(),
        "Clean Code",
        "Robert C. Martin",
        "978-0132350884",
        464
    );
    
    const magazine1 = new Magazine(
        LibraryUtils.generateItemId(),
        "JavaScript Weekly",
        45,
        "Tech Publications",
        new Date('2024-01-15')
    );
    
    cityLibrary.addItem(book1);
    cityLibrary.addItem(book2);
    cityLibrary.addItem(magazine1);
    
    const member1 = new Member(
        LibraryUtils.generateMemberId(),
        "test user1",
        "testuser1@email.com"
    );
    console.log("Member1 ID:", member1);
    const member2 = new Member(
        LibraryUtils.generateMemberId(),
        "test user2",
        "bob@email.com"
    );
    
    cityLibrary.addMember(member1);
    cityLibrary.addMember(member2);
    
    cityLibrary.displayAllItems();
    
    console.log("\n=== Search Results for 'TypeScript' ===");
    const searchResults = cityLibrary.search("TypeScript");
    searchResults.forEach(item => console.log(item.getItemInfo()));
    
    console.log("\n=== Borrowing Items ===");
    const borrowSuccess = cityLibrary.borrow(book1.getId(), member1.getId());
    console.log(`Book borrowing ${borrowSuccess ? 'successful' : 'failed'}`);
    
    console.log("\n=== Updated Catalog After Borrowing ===");
    cityLibrary.displayAllItems();
    
    console.log("\n=== Using Generic Collection ===");
    const bookCollection = new Collection<Book>();
    bookCollection.add(book1);
    bookCollection.add(book2);
    
    const foundBook = bookCollection.find(book => book.getAuthor().includes("Martin"));
    if (foundBook) {
        console.log(`Found book by Martin: ${foundBook.getTitle()}`);
    }
    
    console.log(`Total books in collection: ${bookCollection.count()}`);
}

// Run the demonstration
demonstrateLibrarySystem();