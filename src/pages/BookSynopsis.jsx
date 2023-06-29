import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookInfo from "../components/BookInfo";
import Synopsis from "../components/Synopsis";
import BookList from "../components/BookList";
import books from "../data/books";

function BookSynopsis(){
    const { title } = useParams();

    const book = books.find((book)=>{
        return book.title === title ;
    })
    // console.log(book);   


    return <div className="page">
        <Navbar />
        
        <div className="synopsis-book-page-container">
            <div className="synopsis-book-page-list">
                <BookInfo book={book}/>
                <BookList book={book} etc={"इतर"}  />
                
            </div>

            <div className="synopsis-book-page-info">
                <Synopsis book={book} />
            </div>
        </div>
    </div>
}

export default BookSynopsis;