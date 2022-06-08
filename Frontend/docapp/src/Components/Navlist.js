import React from 'react'

const Navlist = (props) => {

  return (
            <li className="list-group-item d-flex justify-content-between align-items-start" onClick={()=>{props.urlme(props.onclick)}} >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{props.name}</div>
                  {props.helpertext}
                </div>
                { (props.count > 0)?<span className="badge bg-info rounded-pill">{props.count}</span>:<span></span> }
                
            </li>
  )
}

export default Navlist