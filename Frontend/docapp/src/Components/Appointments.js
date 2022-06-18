import React from 'react'
import Medicalrecordcard from './Cards/Medicalrecordcard'
import Appointmentmodal from './Models/Appointmentmodal';

import _ from "lodash";
const Appointments = () => {

    const appointment  = {
        0: {
          date: "06JUN",
          title: "Cancer Treatment",
          description: "Patient havig cancer, and gonna die..",
          name: "Vikas Gupta (02:00 AM - 02:30 PM)"
        },
        1: {
            date: "03JUN",
            title: "Migrane Medicines",
            description: "Peron having mirane",
            name: "Vikas Gupta (11:00 AM - 11:45 AM)"
        },
        2: {
            date: "02JUN",
            title: "Fever Lab Report Check",
            description: "Person having covid",
            name: "Vikas Gupta (10:00 AM - 11:00 AM)"
        }
      }

    return (
        <>
            <nav className="navbar">
                <button type="button" className="btn btn-sm btn-info text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Schedule Appointment</button>
                <span className="text-right text-muted fw-bolder">APPOINTMENTS</span>
            </nav>
            <br />


            {_.times(3, (i) => (
                <Medicalrecordcard key={i} nametitle={"Appointment with"} date={appointment[i].date} title={appointment[i].title} description={appointment[i].description} name={appointment[i].name} />
            ))}

            <Appointmentmodal />
        </>
    )
}

export default Appointments