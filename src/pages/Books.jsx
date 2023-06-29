import Navbar from "../components/Navbar";
import BookList from "../components/BookList";
import BookBrief from "../components/BookBrief";
import BookCard from "../components/BookCard";
import books from "../data/books";

function Books(){
    return <div className="page ">
        <Navbar />
        <div className="book-page-container">
            
            <div className="book-page-list">
                <BookList />
            </div>

            <div className="book-page-info">
                <BookBrief />

                {books.map((book)=>{
                    return <BookCard title={book.title} img = {book.cover} brief={book.brief} />
                })}


            </div>
            
        </div>
       

    </div>
}

export default Books;