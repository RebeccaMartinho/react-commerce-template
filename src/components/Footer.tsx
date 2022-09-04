import {Button} from 'react-bootstrap';
import Item from './features/FeatureItem';
function Footer(){
    return(
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2">
            <div className="col-10 d-flex justify-content-between align-items-center">
                <div className="col-2 d-flex flex-column align-items-start justify-content-start">
                    <div className="d-flex flex-column align-items-start justify-content-start">
                        <span>Why Trust</span>
                        <h3>Consumer</h3>
                        <h3>Voice?</h3> 
                    </div>
                    <Button variant="primary">Learn More</Button>
                </div>

                <div className="col-10 d-flex justify-content-between align-items-center">
            <Item size="350px" image="features/amazon.jpeg"/>
            <Item size="350px" image="features/amazon.jpeg"/>
            <Item size="350px" image="features/amazon.jpeg"/>
     
            {/* <Item image="chamada-telefonica.png"/>
            <Item image="computador-portatil.png"/>
            <Item image="video.png"/> */}
       
        </div>
            </div>
        </div>
    )
}

export default Footer