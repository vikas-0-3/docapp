import React from 'react'
import Medicalrecordcard from './Cards/Medicalrecordcard'
import Medicalordersmodal from './Models/Medicalordersmodal';

import _ from "lodash";

const Medicineorders = () => {

    const MedicalObjects = {
        0: {
          date: "06JUN",
          title: "Cancer Medicines",
          description: "Test description",
          name: "Vikas Gupta"
        },
        1: {
            date: "03JUN",
            title: "Migrane Medicines",
            description: "Test description",
            name: "Vikas Gupta"
        },
        2: {
            date: "02JUN",
            title: "Fever Medicines",
            description: "Test description",
            name: "Vikas Gupta"
        }
      }


  return (
    <>
            <nav className="navbar">
                <button type="button" className="btn btn-sm btn-info text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Order Medicines</button>
            </nav>
            <br />

            {_.times(3, (i) => (
                  <Medicalrecordcard key={i} date={MedicalObjects[i].date} title={MedicalObjects[i].title} description={MedicalObjects[i].description} name={MedicalObjects[i].name} /> 
            ))}

            <Medicalordersmodal />
        </>
  )
}

export default Medicineorders