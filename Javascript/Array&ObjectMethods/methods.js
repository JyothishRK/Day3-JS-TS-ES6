const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 299 },
  { title: "1984", author: "George Orwell", price: 599 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 450 },
  { title: "Brave New World", author: "Aldous Huxley", price: 550 },
  { title: "Pride and Prejudice", author: "Jane Austen", price: 350 },
];

export function showBooks() {
  console.log(books);
}

export function filterBooks() {
  const expensiveBooks = books.filter((book) => book.price > 500);
  console.log(expensiveBooks);
}

export function sortBooks() {
  const sortedBooks = books.sort();
  console.log(sortedBooks);
}

export function getTitle() {
  const titles = books.map((book) => book.title);
  console.log(titles);
}
