import './App.css';

// components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navlist from './Components/Navlist';

// library
import _ from "lodash";

function App() {
  const logo = require('./docapp-logo.png');

  const LeftNavObjects = {
    0: {
      name: "Appointments",
      helpertext: "Book a appointment",
      count: 14
    },
    1: {
      name: "Medical Records",
      helpertext: "Track all your medical reports",
      count: 14
    },
    2: {
      name: "Lab Tests",
      helpertext: "Track all your test reports",
      count: 14
    },
    3: {
      name: "Medicine Orders",
      helpertext: "Track all your medicines",
      count: 5
    },
    4: {
      name: "Online Consultations",
      helpertext: "Get a Quality Consultation in a min",
      count: 3
    },
    5: {
      name: "Articles",
      helpertext: "Check out our new articles",
      count: 14
    },
    6: {
      name: "Feedback",
      helpertext: "Your suggestions are always welcome",
      count: 0
    },
    7: {
      name: "Payents",
      helpertext: "Pay your bills in few steps",
      count: 0
    }
  }
  return (
    <>
      <div className="App">
        <Header logo={logo} />

        <div className="container-fluid p-4">
          <div className="row">

            <div className="col-3 fixheight">
              <ol className="list-group list-group-flush">
                {_.times(8, (i) => (
                  <Navlist key={i} name={LeftNavObjects[i].name} helpertext={LeftNavObjects[i].helpertext} count={LeftNavObjects[i].count} />
                ))}
              </ol>
            </div>


            <div className="col-8 fixheight mx-4">

            </div>

            
          </div>
        </div>

        <Footer />

      </div>


    </>
  );
}

export default App;
