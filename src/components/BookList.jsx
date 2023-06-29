import { useParams } from "react-router-dom";
import BookLink from "./BookLink";
import books from "../data/books";

function BookList(props){
    const { title } = useParams();

    const otherBooks = books.filter((book)=>{
        return book.title !== title
    })

    return <div>
        <div className="book-title">
            {props.etc} पुस्तके
        </div>

        <div className="book-title-container">
                {otherBooks.map((book)=>{
                    return <BookLink title={book.title} />
                })}
        </div>
    </div>
}

export default BookList;