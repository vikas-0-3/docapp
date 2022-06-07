import React from 'react'

const Header = (props) => {
  return (
    <header className="App-header">


        <nav className="navbar whitebkg p-0">
          <div className="container p-2">
            <a className="navbar-brand" href="/">
              <img src={props.logo} alt="Docapp-Logo" width="30" height="24" /> <b>DOCAPP</b>
            </a>

            <div className="d-flex">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Vikas
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </div>
            </div>

          </div>
        </nav>

      </header>
  )
}

export default Header