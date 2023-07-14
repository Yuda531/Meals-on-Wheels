import React, { useEffect, useState } from 'react';
import volun from '../images/bg/volunteer.png'
import driver from '../img/delivery.png'
import axios from 'axios';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';




function VolunteerChoice() {

    const [selectedRole, setSelectedRole] = useState('');
    const handleSetRole = () => {
        // Make an API call to update the user's role
        axios
          .post('http://localhost:8080/user/{id}/update-role"')
          .then((response) => {
            console.log('User role updated successfully');
            // Perform any necessary actions upon successful role update
          })
          .catch((error) => {
            console.error('Failed to update user role:', error);
            // Handle any errors
          });
      };


    const [userRole, setUserRole] = useState(null);
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
          const { role } = JSON.parse(user);
          setUserRole(role);
        }
      }, []);
    


  return (
<div className="body">
      <div className="backblur">
        <div className="col-12 d-flex">
          <div className="col-5 p-4 my-auto text-white">
            <h1 className="display-1">Welcome.</h1>
            <h2 className="lead">New Volunteer</h2>
            <hr />
            <p className="lead">
              You have chosen to <span className='fw-bold'>Volunteer</span> on <span className="text-warning fw-bold">Meals</span> on <span className="text-success fw-bold">Wheels</span>. <br />
              What do you wish to volunteer at?
            </p>
          </div>
          <div className="col-7 d-flex px-4 mx-auto my-auto aboutt">
            <button
              type="button"
              className="col-6 rounded-5 p-4 whyUs2 mx-5"
              data-bs-toggle="modal"
              data-bs-target="#modal2"
            //   onClick={openModal2}
            >
              <img src={volun} alt="" className="col-10 mx-auto my-auto" />
              <br />
              <br />
              <p className="display-5 text-center mt-3">Partners</p>
            </button>

            <button
              type="button"
              className="col-6 rounded-5 p-4 whyUs2"
              data-bs-toggle="modal"
              data-bs-target="#modal1"
            //   onClick={openModal1}
            >
              <img src={driver} alt="" className="col-10 mx-auto my-auto" />
              <p className="display-5 text-center mt-3">Caregiver</p>
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Be a Caregiver?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={driver} alt="" className="col-6 d-flex justify-content-center mx-auto my-2" />
              <p className='lead text-center'>Drive our meals to those who need it.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-success" onClick={() => { setSelectedRole('CAREGIVER'); handleSetRole(); }} data-bs-dismiss="modal">
                Yes, I'd like to
              </button>
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal2">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Be a Partner?</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <img src={volun} alt="" className="col-6 d-flex justify-content-center mx-auto" />
              <p className='lead text-center'>Be our Partner! Supply healthy meals together.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-success" onClick={() => { setSelectedRole('PARTNER'); handleSetRole(); }} data-bs-dismiss="modal">
                Yes, I'd like to
              </button>
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerChoice;
