// Modal1.jsx
import React from 'react';
import volun from "../img/volunteer.png"
import driver from '../img/delivery.png'


const Modal1 = ({ closeModal1 }) => {
    const handleCaregiverConfirmation = () => {
        // Perform actions specific to the caregiver confirmation
        // ...
      
        // Close the modal
        closeModal1();
      };
      
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='display-4'>Be a Caregiver?</h2>
        <img src={driver} alt="" className="col-10 mx-auto my-2" />
        <p className='lead'>Drive our meals to those who need it.</p>

        <button className='btn-outline-success' onClick={handleCaregiverConfirmation}>Yes, i'd like to</button>
        <button className='btn-outline-danger' onClick={closeModal1}>Close</button>

      </div>
    </div>
  );
};

export default Modal1;
