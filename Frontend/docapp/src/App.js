import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';


// components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navlist from './Components/Navlist';
import Dashboard from './Components/Dashboard';
import MedicalRecords from './Components/MedicalRecords';
// library
import _ from "lodash";



function App() {
  const logo = require('./docapp-logo.png');
  const navigate = useNavigate();
  const urlme = (url) => {
    
    if(url === "appointments") {
      navigate('/appointments', {replace: true});
    }
    if(url === "medicalrecords") {
      navigate('/medicalrecords', {replace: true});
    }
  }



  const LeftNavObjects = {
    0: {
      name: "Appointments",
      helpertext: "Book a appointment",
      count: 14,
      onclick: "appointments"
    },
    1: {
      name: "Medical Records",
      helpertext: "Track all your medical reports",
      count: 14,
      onclick: "medicalrecords"
    },
    2: {
      name: "Lab Tests",
      helpertext: "Track all your test reports",
      count: 14,
      onclick: "labtests"
    },
    3: {
      name: "Medicine Orders",
      helpertext: "Track all your medicines",
      count: 5,
      onclick: "medicineorders"
    },
    4: {
      name: "Online Consultations",
      helpertext: "Get a Quality Consultation in a min",
      count: 3,
      onclick: "onlineconsultations"
    },
    5: {
      name: "Articles",
      helpertext: "Check out our new articles",
      count: 14,
      onclick: "articles"
    },
    6: {
      name: "Feedback",
      helpertext: "Your suggestions are always welcome",
      count: 0,
      onclick: "feedback"
    },
    7: {
      name: "Payments",
      helpertext: "Pay your bills in few steps",
      count: 0,
      onclick: "payments"
    }
  }
  return (
    <>
      <div className="App">
        <Header logo={logo}  />

        <div className="container-fluid p-4">
          <div className="row">

            <div className="col-3 fixheight">
              <ol className="list-group list-group-flush">
                {_.times(8, (i) => (
                  <Navlist key={i} name={LeftNavObjects[i].name} helpertext={LeftNavObjects[i].helpertext} count={LeftNavObjects[i].count} onclick={LeftNavObjects[i].onclick} urlme={urlme} />
                ))}
              </ol>
            </div>


            <div className="col-8 fixheight mx-4 overflow-auto">

              <Routes>
                <Route exact path="/" element={
                  <Dashboard />
                } />
                <Route exact path="/medicalrecords" element={
                  <MedicalRecords />

                } />
              </Routes>
              

          


                  
            </div>

            
          </div>
        </div>

        <Footer />

      </div>

    </>
  );
}

export default App;
