import React from 'react';
import richie from "../img/richiedriver.png";
import { CircleFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import pp from '../img/user.png';

const CommonProfile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let userSession = sessionStorage.getItem("user");
    userSession = JSON.parse(userSession);
  


    return ( 
        <div className="body">
        <div className="backblur">
          <h1 className="display-5 text-white">
            Welcome, {userSession.roleId.roleName}!
          </h1>
          <hr className="border-white" />
          <div className="col-12 d-flex">
            <div className="col-5 profileCard">
              <div className="col-12">
                <div className="col-6 mx-auto ">
                  <img style={{borderRadius:"50%"}} src={pp} className="col-12" alt="" />
                </div>
                <div className="col-6 profileCardData mx-auto text-center text-white">
                  <small className="display-6">
                    {userSession.name}
                  </small>
                  <br />
                  <br />
                  <small className="lead text-white fw-bold">
                    {userSession.email}
                  </small>
                  <br />
                  <small className="lead"><CircleFill color="green" /> {userSession.roleId.roleName}</small>
                  <small className="lead d-none"><CircleFill color="red" /> {userSession.roleId.roleName}</small>
                  <small className="lead d-none"><CircleFill color="yellow" /> Busy</small>
                  <hr className="border-white" />
                  
                  <small className="lead">
                    Joined since 2011
                  </small>
                  <br />
                  <br />
                  
                  <button className="btn btn-success col-12 mb-3">Edit Profile</button> <br />
                  <button onClick={handleShow} className="btn btn-outline-warning col-12 mb-3">Set Status</button>
                  
                  
                </div>
              </div>
            </div>
            <div className="col-7 px-5 aboutt">
            <div className="orderTable text-white">
              <small className="display-6 m-4">My Orders</small>
              
                  <div className="newOrder d-flex col-12 p-3">
                      <table className="custom-table col-12">
                          <thead>
          
                              <div className="d-flex mb-2 text-black">
                                  <th className='col-3 mx-auto'>Order Name</th>
                                  <th className='col-3 mx-auto'>Time Order</th>
                                  <th className='col-6 mx-auto'>Status</th>
                              </div>
                              <hr className="border-white" />
                          </thead>
                          <div style={{maxHeight:"147px", overflow:"auto"}} className="orders teams">
                          
                          <div className="anOrder">
                              <div className="d-flex col-12 mb-3 px-4">
                                  <p className="col-3 my-auto">Food name</p>
                                  <p className="col-3 my-auto">06/08/2023</p>
                                  <div className="col-6 d-flex">
                                      <button className=" btn btn-outline-danger">Proccess</button>
  
                                  </div>
                              </div>
                              <hr className="border-light" />
                          </div>
  
                          <div className="anOrder">
                              <div className="d-flex col-12 mb-3 px-4">
                                  <p className="col-3 my-auto">Food name</p>
                                  <p className="col-3 my-auto">06/08/2023</p>
                                  <div className="col-6 d-flex">
                                      <button className=" col-4 btn btn-outline-success">Done</button>  
                                  </div>
                              </div>
                              <hr className="border-light" />
                          </div>
  
 
                          <div className="anOrder">
                              <div className="d-flex col-12 mb-3 px-4">
                                  <p className="col-3 my-auto">Food name</p>
                                  <p className="col-3 my-auto">06/08/2023</p>
                                  <div className="col-6 d-flex">
                                      <button className=" col-4 btn btn-outline-success">Done</button>  
                                  </div>
                              </div>
                              <hr className="border-light" />
                          </div>
  
                          <div className="anOrder">
                              <div className="d-flex col-12 mb-3 px-4">
                                  <p className="col-3 my-auto">Food name</p>
                                  <p className="col-3 my-auto">06/08/2023</p>
                                  <div className="col-6 d-flex">
                                      <button className=" col-4 btn btn-outline-success">Done</button>  
                                  </div>
                              </div>
                              <hr className="border-light" />
                          </div>
                  
                          </div>
                      </table>
                  </div>
              
             
            </div>
        
    
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Set your status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="d-flex justify-content-center">
                  <small id='activeStatusModal' className="lead statusSet"><CircleFill color="green" /> Active</small>
                  <small id='unactiveStatusModal' className="lead statusSet"><CircleFill color="red" /> Not Active</small>
                  <small id='busyStatusModal' className="lead statusSet"><CircleFill color="yellow" /> Busy</small>
              </div>
          </Modal.Body>
          <Modal.Footer>
              <div className="d-flex justify-content-center col-12">
              <Button className='col-5 me-1' variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button className='col-5 ms-1' variant="outline-success" onClick={handleClose}>
              Save Changes
            </Button>
              </div>
            
          </Modal.Footer>
        </Modal>
      </div>
     );
}
 
export default CommonProfile;