import React from 'react';
import richie from "../img/richiedriver.png";
import { CircleFill } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import foodBanner from '../img/mexican-food.jpg'
import Swal from 'sweetalert2'

function CaregiverDashboard() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userEmail, setUserEmail] = useState(null);
  const [driverName, setDriverName] = useState(null);
  const [driverPlate, setDriverPlate] = useState(null);
  const [driverEmail, setDriverEmail] = useState(null);
  const [driverLicense, setDriverLicense] = useState(false);

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserEmail(parsedUser.caregiver?.userId?.name || '');
      setDriverName(parsedUser.caregiver?.driverName || '');
      setDriverEmail(parsedUser.caregiver?.userId?.email || '');
      setDriverPlate(parsedUser.caregiver?.driverPlate || '');
      setDriverLicense(parsedUser.caregiver?.licensed || false);
    }
  }, []);

  return (
    

    <div className="body">
      <div className="backblur">
        <div className="col-12 d-flex">
        <div className='col-4 theProfileImg'>

         
        

          <div className="col-12 px-5 py-5 profileCard2 text-white">
          <div className="col-10 my-5 mx-auto text-white">
                <img style={{borderRadius:"50%"}} src={richie} className="col-12" alt="" />
              </div>
          <div className=''>
                <small className="display-5 ">
                  {userEmail ? userEmail : 'Driver'}
                </small>
                <br />
               
                <p className="lead mt-3">
                 {driverName}
                 </p>

                 <p className="lead mt-3">
                 {driverEmail}
                 </p>
                </div>


            <hr className='border-white'/>

            <p className="lead">Police Number</p>

            <small className="display-6">
            {driverPlate}
            </small>
            <hr className='border-white'/>

            <p className="lead mt-2">{driverLicense ? 'Licensed Driver' : 'Not Licensed'}</p>
            </div>

</div>
          
          <div className="col-8 ms-5 px-4 aboutt text-white theOrders">
          <div className="orderTable text-white">
            <small className="display-6 m-4">New Orders</small>
            
                <div className="newOrder d-flex col-12 p-3">
                    <table className="custom-table col-12">
                        <div>
        
                            <div className="d-flex mb-2">
                                <th className='col-3 mx-auto'>Order Name</th>
                                <th className='col-3 mx-auto'>Destination</th>
                                <th className='col-6 mx-auto'>Status</th>
                            </div>
                            <hr className="border-white" />
                        </div>
                        <div style={{maxHeight:"300px", overflow:"auto"}} className="orders teams">
                        
                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                        
                        {/* My coding skills covers almost all required technical skills in order to make a functional website and application,
                        front end development, back-end programming , and database management

                        i know programming languages like html, javascript, css, jquery, sql, java, frameworks like bootstrap. reactJs. 
                        spring framework, spring boot, and Content management system like liferay. 

                        Last but not least, i have an eye for design. i always create unique and user friendly interface making users easily interact with my websites
                        */}

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>

                        <div className="anOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Take</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Skip</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                           
                    
                
                        </div>
                    </table>
                </div>
            
           
          </div>
      
    
          <div className="orderTaken text-white">
            <small className="display-6 m-4">To Drive</small>
            
                <div className="newOrder d-flex col-12 p-3">
                    <table className="custom-table col-12">
                        <div>
        
                            <div className="d-flex mb-2">
                                <th className='col-3 mx-auto'>Order Name</th>
                                <th className='col-3 mx-auto'>Destination</th>
                                <th className='col-6 mx-auto'>Status</th>
                            </div>
                            <hr className="border-white" />
                        </div>
                        <div style={{maxHeight:"300px", overflow:"auto"}} className="orders teams">
                        
                        

                        <div className="arrivedOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Arrived</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Cancel</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                        <div className="arrivedOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Arrived</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Cancel</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                        <div className="arrivedOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Arrived</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Cancel</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                        <div className="arrivedOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Arrived</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Cancel</button>

                                </div>
                            </div>
                            <hr className="border-light" />
                        </div>
                        <div className="arrivedOrder">
                            <div className="d-flex col-12 mb-3">
                                <p className="col-3 my-auto">Food name</p>
                                <p className="col-3 my-auto">Florida</p>
                                <div className="col-6 d-flex">
                                    <button className=" col-4 btn btn-outline-success">Arrived</button>
                                    <button className=" col-4 ms-2 btn btn-outline-danger">Cancel</button>

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

export default CaregiverDashboard;
