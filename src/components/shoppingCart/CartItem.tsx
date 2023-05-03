import Button from 'react-bootstrap/Button';
import {Trash} from "react-bootstrap-icons";
import { useState } from 'react';

export default function BasicExample() {
  
  const [count, setCount] = useState(1);

  const url = 'https://source.unsplash.com/featured/50x50?abstract';
  return (
  <div className="card w-100 my-2">
    <div className="row">
      <div className="col-md-12 cart w-100">
        <div className="row my-2">
          <div className="row main align-items-center">
            <div className="col-2 text-center "> 
              <img className="colcard-img-top  " src={`${url}`}  alt="Card image cap"/>
            </div>
            <div className="col-4">
              <div className="row text-muted">Piteira</div>
              <div className="row">Piteira rollinho limited edition nome grande</div>
            </div>
            <div className="col">
              { count > 0 ?  <a className="text-dark mx-2" href="#" onClick={() => setCount(count - 1)}>-</a> : '' }
              <a className="border p-1 text-dark" href="#" >{count}</a><a className="text-dark mx-2"  href="#" onClick={() => setCount(count + 1)}>+</a>
             </div>
            <div className="col text-center">R$ 44,00 </div>
            <button className="col-1 btn btn-danger" type="submit"><Trash color="white"/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
