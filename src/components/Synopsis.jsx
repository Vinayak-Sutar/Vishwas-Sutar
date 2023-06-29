const divider = require("../images/divider.png")

function Synopsis(props){
    return <div>
        <div className="synopsis">
            <div className="synopsis-title">सारांश</div>
            <img src={divider} className="divider" alt="" />

            <div>
                <img src={props.book.cover} className="synopsis-cover" alt="" />
                <p className="synopsis-para">{props.book.synopsis}</p>
            </div>

        </div>
        
    </div>
}

export default Synopsis;