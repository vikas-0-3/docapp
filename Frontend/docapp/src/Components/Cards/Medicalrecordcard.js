import React from 'react'
import attachment from '../../../src/attachment.jpg'
const Medicalrecordcard = (props) => {
    return (
        <div className="card mb-3 medicalrecordcard">
            <div className="row g-0">
                <div className="col-md-2 p-2">
                    <img src={attachment} className="img-fluid rounded-start" alt="Attachment" width={"60px"} />
                    <br /><br />
                    <span className='h5 text-info'>{props.date}</span>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">Prescribed by - {props.name}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medicalrecordcard