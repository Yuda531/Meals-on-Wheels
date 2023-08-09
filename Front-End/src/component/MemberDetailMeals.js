import recipe1 from "../images/recipePhoto-01.jpg";
import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";
import thumb3 from "../images/recipeThumb-03.jpg";
import author from "../images/author-photo.png";
import recipebg from "../images/recipeBackground.jpg";
import Sidebar from "./Sidebar";
import StickyHeader from "../components/Navbar";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";


function MemberDetailMeals() {
  const [meal, setMeal] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let userSession = sessionStorage.getItem("user");
  userSession = JSON.parse(userSession);

  const handleOrder = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will order this meal!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Create order object
        const orderData = {
          orderMaker: userSession.name,
          orderName: meal.meals_name,
          // Other order details...
        };

        // Send POST request to save order
        axios.post("http://localhost:8080/user/order", orderData)
          .then(response => {
            Swal.fire(
              'Success!',
              'Successfully ordered.',
              'success'
            );
            handleClose();
          })
          .catch(error => {
            console.error(error);
            Swal.fire(
              'Error!',
              'Failed to place order.',
              'error'
            );
          });
      }
    });
  }

  useEffect(() => {
    // Mengambil ID makanan dari URL
    const mealsId = window.location.pathname.split('/').pop();
  
    // Membuat API call untuk mengambil data makanan berdasarkan ID
    axios
      .get(`http://localhost:8080/admin/${mealsId}`)
      .then((response) => {
        setMeal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(meal && meal.meals_name);

  return (
    <div>
      <StickyHeader/>
      <div class='recipeBackground'>
        <img src={recipebg} alt='' />
      </div>
      <div class='container acumalaka' itemscope itemtype='http://schema.org/Recipe'>
        {/*  Recipe */}
        <div class='twelve columns'>
          <div class='alignment'>
            {/*  Header */}
            <section class='recipe-header'>
              <div class='title-alignment'>
                <h2>{meal && meal.meals_name}</h2>
              </div>
            </section>

            {/*  Slider */}
            <div class='recipeSlider rsDefault'>
              <img itemprop='image' style={{height: '300px'}} class='rsImg' src={recipe1} alt='' />
              <img
                itemprop='image'
                class='rsImg'
                src='images/recipePhoto-02.jpg'
                alt=''
              />
            </div>

            {/*  Details */}
            <section class='recipe-details' itemprop='nutrition'>
              <ul>
                <li>
                  Status: <strong itemprop='recipeYield'>Available</strong>
                </li>
                <li>
                  Calories: <strong itemprop='calories'>632 kcal</strong>
                </li>
              </ul>
              <a onClick={handleShow} href='#' class='print'>
                <i class='fa fa-cutlery'></i> Order
              </a>
              <div class='clearfix'></div>
            </section>

            {/*  Text */}
            <div className="my-3">
              <h3 className="fw-bold">Description</h3>
              <h4>
              {meal && meal.meals_description}
              </h4>
            </div>


          </div>
        </div>

        {/*  Sidebar
================================================== */}
        <Sidebar></Sidebar>
      </div>
      {/* modal */}
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Order This Food?</Modal.Title>
          </Modal.Header>
            <div className="p-3">
              <h3>Name    : {userSession.name}</h3>
              <h3>Email   : {userSession.email}</h3>
            </div>
          <Modal.Footer>
              <div className="d-flex justify-content-center col-12">
              <Button className='col-5 me-1' variant="outline-danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button className='col-5 ms-1' variant="outline-success" onClick={handleOrder}>
              Continue
            </Button>
              </div>
            
          </Modal.Footer>
        </Modal>
    </div>
  );
}
export default MemberDetailMeals;
