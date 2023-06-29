import Navbar from "../components/Navbar";
import bgImage from "../images/pencil-sketch.png";

function Home (){
    return <div className="page">
        <Navbar />
        
        <div className="imageContainer">
            <img src={bgImage} alt="" />
        </div>
        
    </div>
}

export default Home;