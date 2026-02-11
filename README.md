# 📚 Library Management System -- TypeScript (OOP Implementation)

## 📌 Overview

This project is a Library Management System built using TypeScript to
demonstrate strong Object-Oriented Programming principles, clean
architecture, and domain modeling.

The system allows: - Adding books and magazines - Registering members -
Borrowing and returning items - Enforcing borrowing restrictions

This project focuses on clean code, modularity, and business rule
enforcement rather than UI or database integration.

------------------------------------------------------------------------

# 🏗️ Architecture Overview

The project follows a layered object-oriented architecture:

Library (Coordinator / Facade) │ ├── Members (Borrow Logic) │ └── Items
├── Book └── Magazine

Core Components:

-   Library → Coordinates operations
-   LibraryItem → Abstract base class
-   Book → Extends LibraryItem
-   Magazine → Extends LibraryItem
-   Member → Handles borrowing rules

------------------------------------------------------------------------

# 🔄 System Flow

Borrow Flow:

1.  Library.borrow(itemId, memberId) is called
2.  Library fetches item and member
3.  Request delegated to Member.borrowItem()
4.  Member checks:
    -   Borrow limit
    -   Item availability
5.  If valid → item.checkOut() executed
6.  Item marked unavailable

------------------------------------------------------------------------

# 🧠 OOP Concepts Implemented (From This Codebase)

## 1️⃣ Abstraction

abstract class LibraryItem defines shared structure. Derived classes
must implement getDetails().

## 2️⃣ Inheritance

Base Class: - LibraryItem

Derived Classes: - Book extends LibraryItem - Magazine extends
LibraryItem

## 3️⃣ Encapsulation

Private properties protect internal state:

-   maxBorrowLimit
-   borrowedItems
-   isAvailable

Validation happens inside class methods, not externally.

## 4️⃣ Polymorphism

Both Book and Magazine implement getDetails(), allowing the system to
treat all as LibraryItem while preserving specific behavior.

------------------------------------------------------------------------

# 🔒 Borrow Restriction Logic

Borrowing is restricted using:

1.  Borrow Limit Restriction

Each member has:

private maxBorrowLimit = 5

Borrow allowed only if borrowedItems.length \< maxBorrowLimit

2.  Item Availability Restriction

Each item maintains:

private isAvailable = true

Borrow only succeeds if item.checkOut() returns true.

Business logic is implemented inside Member.borrowItem(), ensuring
proper separation of concerns.

------------------------------------------------------------------------

# 🎯 Design Principles Applied

✔ Single Responsibility Principle\
✔ Separation of Concerns\
✔ Clean Domain Modeling\
✔ Modular and Maintainable Structure

------------------------------------------------------------------------

# 📊 Architecture Diagram (Mermaid)

``` mermaid
classDiagram

class Library {
  +addItem()
  +registerMember()
  +borrow()
  +returnItem()
}

class LibraryItem {
  <<abstract>>
  #id
  #title
  +getDetails()
  +checkOut()
  +returnItem()
}

class Book {
  -author
  +getDetails()
}

class Magazine {
  -issueNumber
  +getDetails()
}

class Member {
  -borrowedItems
  -maxBorrowLimit
  +borrowItem()
  +returnItem()
  +canBorrow()
}

Library --> Member
Library --> LibraryItem
LibraryItem <|-- Book
LibraryItem <|-- Magazine
Member --> LibraryItem
```

------------------------------------------------------------------------

# 🚀 How to Run

1.  Install dependencies

npm install

2.  Compile TypeScript

npx tsc

3.  Run

node dist/index.js

------------------------------------------------------------------------

# 📌 Key Takeaways

This project demonstrates:

-   Strong OOP fundamentals
-   Business rule enforcement
-   Encapsulation and abstraction
-   Clean architecture principles
-   Scalable design structure

It serves as a foundational backend domain modeling project in
TypeScript.
https://github.com/SrideviMR/Oops
