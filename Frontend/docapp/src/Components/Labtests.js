import React from 'react'
import Medicalrecordcard from './Cards/Medicalrecordcard'
import Labtestsmodal from './Models/Labtestsmodal';

import _ from "lodash";

const Labtests = () => {

    const MedicalObjects = {
        0: {
          date: "06JUN",
          title: "Cancer Lab Report",
          description: "Patient havig cancer, and gonna die..",
          name: "Vikas Gupta"
        },
        1: {
            date: "03JUN",
            title: "Migrane Lab Report",
            description: "Peron having mirane",
            name: "Vikas Gupta"
        },
        2: {
            date: "02JUN",
            title: "Fever Lab Report",
            description: "Person having covid",
            name: "Vikas Gupta"
        }
      }


    return (
        <>
            <nav className="navbar">
                <button type="button" className="btn btn-sm btn-info text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Upload Records</button>
                <span className="text-right text-muted fw-bolder">LAB TESTS</span>
            </nav>
            <br />


            {_.times(3, (i) => (
                  <Medicalrecordcard key={i} nametitle={"Prescribed By"} date={MedicalObjects[i].date} title={MedicalObjects[i].title} description={MedicalObjects[i].description} name={MedicalObjects[i].name} /> 
            ))}

                <Labtestsmodal />
        </>
    )
}

export default Labtests