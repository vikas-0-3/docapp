import React from 'react'
import Medicalrecordcard from './Cards/Medicalrecordcard'
import Medicalrecordsmodal from './Models/Medicalrecordsmodal'
import _ from "lodash";

const MedicalRecords = () => {

    const MedicalObjects = {
        0: {
          date: "06JUN",
          title: "Cancer Report",
          description: "Test description",
          name: "Vikas Gupta"
        },
        1: {
            date: "03JUN",
            title: "Migrane Report",
            description: "Test description",
            name: "Vikas Gupta"
        },
        2: {
            date: "02JUN",
            title: "Fever Report",
            description: "Test description",
            name: "Vikas Gupta"
        }
      }


    return (
        <>
            <nav className="navbar">
                <button type="button" className="btn btn-sm btn-info text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Upload Records</button>
            </nav>
            <br />


            {_.times(3, (i) => (
                  <Medicalrecordcard key={i} date={MedicalObjects[i].date} title={MedicalObjects[i].title} description={MedicalObjects[i].description} name={MedicalObjects[i].name} /> 
            ))}

        



            <Medicalrecordsmodal />
        </>
    )
}

export default MedicalRecords