import { Search } from "react-bootstrap-icons"
import oPlanet from '../public/proteja-o-planeta.png'


function CenterSearch(){
    return(
       <div className="col-12 d-flex justify-content-center align-items-center">
         <div className="col-10 rounded d-flex justify-content-around " style={{height:"400px", backgroundColor:"#dbefce"}}>
            <div className="col-5 d-flex flex-column align-items-start justify-content-around h-75 p-5">
               <div className="d-flex flex-column align-items-start">
               <h1 className="font-weight-bold">The Best Products</h1>
                <h6>in Every Category</h6>
               </div>

                <div className="flex-shrink-1 d-flex w-100">
                    <div className="border rounded-2 bg-white input-group">
                        <div className="input-group-prepend d-flex align-items-center">
                            <span
                                className="bg-white border-0 shadow-none rounded-2 pe-0 input-group-text"
                                id="basic-addon1"
                            >
                                <Search />
                            </span>
                        </div>
                        <input
                        type="text"
                        className="border-0 shadow-none rounded-2 form-control"
                        placeholder="Products and reviews"
                        aria-label="Products and reviews"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
            </div>
     
           <img src={ oPlanet} className="mr-5" alt=""/>
    
       
        </div>
       </div>
    )
}

export default CenterSearch