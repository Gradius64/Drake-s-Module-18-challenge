// Define the User type
type User = {
    id: number;
    name: string;
    email: string;
    // Add other user properties as needed
};

// Define a Book type for clarity
type Book = {
    bookId: number;
    title: string;
    author: string;
    // Add other book properties as needed
};

// Example array of users and books
let users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];

let books: Book[] = [
    { bookId: 1, title: '1984', author: 'George Orwell' },
    { bookId: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

// Function to remove a book and return the user
function removeBook(bookId: number): User | null {
    // Find the index of the book to remove
    const bookIndex = books.findIndex(book => book.bookId === bookId);
    
    if (bookIndex !== -1) {
        // Remove the book from the array
        books.splice(bookIndex, 1);
        
        // Here, you can return a user or perform other actions
        // For demonstration, returning the first user
        return users[0]; // Modify as needed to return the appropriate user
    } else {
        console.log(`Book with ID ${bookId} not found.`);
        return null; // Return null if the book was not found
    }
}