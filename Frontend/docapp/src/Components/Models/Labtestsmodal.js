import React from 'react'

const Labtestsmodal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Upload Lab Tests</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="container">
                    <input className="form-control form-control-sm" type="text" placeholder="Title" />
                    <br />
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control form-control-sm" placeholder="Doctor" list="doctors" />
                            <datalist id="doctors">
                                <option value="vikas" />
                            </datalist>
                        </div>
                        <div className="col">
                            <input type="date" className="form-control form-control-sm" placeholder="Date" />
                        </div>
                    </div>
                    <br />
                    <input className="form-control form-control-sm" id="formFileSm" type="file" />
                    <br />
                    <textarea class="form-control form-control-sm" placeholder="Describe your record" id="medicalrecorddescription"></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Labtestsmodal