import React from 'react'

const Appointmentmodal = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Schedule an appointment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <input className="form-control form-control-sm" type="text" placeholder="Title" />
                            <br />
                            <div className="row">
                                <div className="col">
                                    <input type="date" className="form-control form-control-sm" placeholder="Date" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control form-control-sm" placeholder="Time Slot" list="timeslots" />
                                    <datalist id="timeslots">
                                        <option value="10:00 AM - 11:00 AM" />
                                        <option value="02:00 PM - 02:15 PM" />
                                    </datalist>
                                </div>
                            </div>
                            <br />
                            <input type="text" className="form-control form-control-sm" placeholder="Doctor" list="doctors" />
                            <datalist id="doctors">
                                <option value="vikas" />
                            </datalist>
                            <br />
                            <textarea class="form-control form-control-sm" placeholder="Appointment Description" id="medicalrecorddescription"></textarea>
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

export default Appointmentmodal