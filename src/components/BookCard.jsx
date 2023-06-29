function BookCard(props){

    const redirect = "/books/"+props.title;

    return <div>
        <div className="card">
            <div>
                <img className="card-image" src={props.img} alt="" />
            </div>

            <div className="card-info">

                <div>
                    <div className="card-title">{props.title}</div>
                </div>

                <div className="card-line"></div>

                <div className="card-brief">
                {props.brief}
                
                    
                </div>
                
                <a className="card-link" href={redirect}>KNOW MORE →</a>

            </div>

        </div>
    </div>
}

export default BookCard;