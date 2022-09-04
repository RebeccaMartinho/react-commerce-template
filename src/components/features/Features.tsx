import { Search } from "react-bootstrap-icons"
import oPlanet from '../../public/proteja-o-planeta.png'
import Item from "./FeatureItem"


function Features(){
    return(
       <div className="col-12 d-flex flex-column justify-content-center align-items-center">
        <div className="col-10 d-flex justify-content-between p-2 align-items-center">
            <h3>Feature Topics</h3>
            <a href="/" style={{textDecoration:"none", color:"red"}}>Show All</a>
        </div>
        <br />
        <div className="col-10 d-flex justify-content-between align-items-center">
            <Item size="280px" image="features/amazon.jpeg"/>
            <Item size="280px" image="features/amazon.jpeg"/>
            <Item size="280px" image="features/amazon.jpeg"/>
            <Item size="280px" image="features/amazon.jpeg"/>
            {/* <Item image="chamada-telefonica.png"/>
            <Item image="computador-portatil.png"/>
            <Item image="video.png"/> */}
       
        </div>
       </div>
    )
}

export default Features