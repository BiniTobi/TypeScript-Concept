type  Book ={
    title:string,
    autor:string,
    year:number
}

const showBook =(book:Book)=>{
    return `${book.title} by ${book.autor} (${book.year})`
}


const data =showBook({title:"Harry Potter and the Philosopher's Stone",autor:"J.K. Rowling",year:1997})

console.log(data)