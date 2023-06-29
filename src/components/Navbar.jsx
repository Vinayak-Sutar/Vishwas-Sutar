function Navbar(){
    return <div className="navbar">
        <div className="nav-title">Vishwas Sutar</div>
        <div >
            <ul className="nav-links">
                <li className="nav-link"><a className="nav-link" href="/home">Home</a></li>
                <li className="nav-link"><a className="nav-link" href="/music">Music</a></li>
                <li className="nav-link"><a className="nav-link" href="/books">Books</a></li>
                <li className="nav-link"><a className="nav-link" href="/samajbhan">Samajbhan</a></li>
                <li className="nav-link"><a className="nav-link" href="/about">About</a></li>
            </ul>
        </div>
    </div>
}

export default Navbar;