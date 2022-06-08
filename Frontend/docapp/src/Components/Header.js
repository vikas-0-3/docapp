import React from 'react'
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="App-header">


        <nav className="navbar whitebkg p-0">
          <div className="container p-2">
            <Link className="navbar-brand" to='/' >
              <img src={props.logo} alt="Docapp-Logo" width="30" height="24" /> <b>DOCAPP</b>
            </Link>

            <div className="d-flex">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Vikas
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/">Profile</a></li>
                  <li><a className="dropdown-item" href="/">Settings</a></li>
                  <li><a className="dropdown-item" href="/">Logout</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>

      </header>
  )
}

export default Header