type Book={
    title:string,
    autor:string,
    year?:number
}
const book:Book = {
    title:"Harry Potter and the Philosopher's Stone",
    autor:"J.K. Rowling",
    year:1997
}
console.log(`${book.title} by ${book.autor} (${book.year})`)


