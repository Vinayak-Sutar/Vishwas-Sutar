function BookInfo (props) {
    return <div>
        
        <div className="book-title">
            {props.book.title}
        </div>

        <div className="book-title-container">
                <a href="" className="book-list">मुखपृष्ठ</a>
                <div>प्रकाशक : {props.book.publisher}</div>
                <div>किंमत : {props.book.price} ₹</div>
                <div>पृष्ठसंख्या : {props.book.pages}</div>
                <div>प्रथमावृत्ती : {props.book.release[0]}</div>
                {props.book.release[1]? <div>द्वितीयावृत्ती : {props.book.release[1]}</div>:null}
                

        </div>

    </div>
}

export default BookInfo;