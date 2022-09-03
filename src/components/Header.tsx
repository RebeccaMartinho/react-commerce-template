
import {
  Search,
  Bell,
  CartCheck,
  Clock
} from "react-bootstrap-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../public/planeta-terra.png'


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded p-2">
      <div className="container-fluid p-0">
       <div className="d-flex w-25 align-items-center justify-content-around">
       <img src={logo} width={60} alt="planeta-terra" />
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       </div>

       <div className="flex-shrink-1 d-flex w-50  ">
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

        <div
          className="collapse navbar-collapse navbar-expanded"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <div className="d-flex align-items-center lh-lg gap-5 fw-bold ms-3">
              <a
                href="/notifications"
                className=""
              >
                <Bell color="black" size={25}/>
              </a>
              <span
                // on:click="{openFormModal}"
                className="cursor-pointer text-decoration-none text-gray-700"
              >
                <CartCheck  size={25} />
              </span>
              <div
                // on:click="{logout}"
                style={{width:"100px"}}
                className="cursor-pointer text-decoration-none text-gray-700 d-flex justify-content-around align-items-center"
              >
                <Clock color="green" size={25} /> <small>Open</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
