type Book={
    title:string,
    autor:string,
    year?:number,
    readonly avalable:boolean
   
}

const book:Book={
    title:"Harry Potter and the Philosopher's Stone",
    autor:"J.K. Rowling",
    year:1997,
    avalable:true
}


console.log(book.title,book.autor,book.year)