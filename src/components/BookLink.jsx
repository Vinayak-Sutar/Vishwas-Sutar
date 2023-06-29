function BookLink(props){

    const redirect = "/books/"+props.title;

    return <a href={redirect} className="book-list">{props.title}</a>
}

export default BookLink;




