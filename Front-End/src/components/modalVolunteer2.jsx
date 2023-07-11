// Modal1.jsx
import React from 'react';
import volun from "../img/volunteer.png"
import driver from '../img/delivery.png'


const Modal2 = ({ closeModal2 }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='display-4'>Be a Partner?</h2>
        <img src={volun} alt="" className="col-10 mx-auto my-2" />
        <p className='lead'>Be our Partner! Supply healthy meals together.</p>

        <button className='btn-outline-success' onClick={closeModal2}>Yes, i'd like to</button>
        <button className='btn-outline-danger' onClick={closeModal2}>Close</button>

      </div>
    </div>
  );
};

export default Modal2;
