import img from "../img/mowlogonew.png"
import deliver from "../img/delivery.png"
import healthy from "../img/healthy.png"
import afford from '../img/afford.png'
import foods from '../img/food.png'
import foodBg from '../img/foodBg.jpg'
import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ButtonAndForm from "./btnAndForm"

function LandingNoLogin(){

    
    return(
        <div className="body custom-overflow" style={{padding:"0"}}>
            <div  className="backblur">
                <div style={{paddingTop:"6%", paddingBottom:"6%"}} className=" col-12">
                    
                        <div className="d-flex col-12">
                            <div className="col-6 p-3">
                                <h1 style={{fontSize:"85px"}} className="text-white display-1 fw-bold col-12 my-auto">Meals <span className=" text-success"> on </span>
                                    <span className="text-warning">Wheels.</span>
                                </h1>
                               <br />
                                <h4 className="text-white lead">We brought you <span className="text-success fw-bold">fresh</span> and <span className="fw-bold text-success">healthy</span> meals everyday. 
                                  <br />  On <span className="fw-bold text-warning">Wheels!</span></h4>
                            </div>

                            
                                <ButtonAndForm />
                            
                        </div>
                        
                    
                    
                    
                </div>
            </div>
            <div className="whyUss" >

            <div style={{ padding:"0.25%"}} className="bg-white"></div>
                
                <div className="backblur2">
                    <div className="px-5 d-flex justify-content-center">
                    <h1 className="display-3 mb-5 my-auto">Why <span className="text-success fw-bold">
                    Meals </span> on
                                        <span className="text-warning fw-bold"> Wheels</span> ?
                                    
                   </h1> 
                        
                    </div>
                        
                    <div className="col-12 d-flex justify-content-center">
                        <div className="card rounded-5 p-5 col-3 whyUs mx-3">
                            <img src={deliver}  className="col-12 mx-auto" alt="" />
                            <h1 style={{fontSize:"30px"}} className="text-center fw-bold mt-2">
                                <span className="text-success">On</span>-time <span className="text-warning">Delivery</span>
                            </h1>
                        </div>
                        
                        <div  className="card rounded-5 p-5 col-3 whyUs mx-3">
                            <img src={healthy}   className="col-12 mx-auto" alt="" />
                            <h1 style={{fontSize:"30px"}}  className="text-center  fw-bold mt-2">
                                <span className="text-success">Healthy</span> food <span className="text-warning">Quality</span>
                            </h1>
                        </div>
                        
                        <div  className="card rounded-5 p-5 col-3 whyUs mx-3">
                            <img src={afford}   className="col-12 mx-auto" alt="" />
                            <h1 style={{fontSize:"30px"}}  className="text-center  fw-bold mt-2">
                                <span className="text-success">Affordable</span> food <span className="text-warning">Price</span>
                            </h1>
                        </div>

                        
                    </div>
                </div>
                <div style={{ padding:"0.25%"}} className="bg-white"></div>

                
                        
            </div>

           
            <div  className="backblur1">
                <div style={{padding:"0%"}} className=" col-12">
                    
                        <div className="d-flex col-12  my-auto">
                            <div style={{paddingLeft:"10%",paddingRight:"5%"}} className="col-9 my-auto">
                                {/* <img style={{borderRadius:"23% 40% 22% 60%"}} src={deliver} className="col-10" alt="" /> */}
                                <h1 style={{fontSize:"95px"}} className="text-white fw-bold col-12 my-auto">Fast <span className=" text-success"> and </span>
                                    <span className="text-warning">Satisfying.</span>
                                </h1>
                                <h4 className="text-white lead col-6 my-4">Guaranteed <span className="text-warning fw-bold">Satisfaction</span>, On-<span className="fw-bold text-success">time</span> delivery,
                                    and <span className="fw-bold text-success">Healthy</span></h4>
                                <button className="btn btn-success col-6 my-3">Order Now</button>
                               
                            </div>
                            <div className="col-3">
                                <img src={foods} className="col-12 mx-auto" alt="" />
                            </div>
                        </div>

                        
                  
                    
                    
                </div>
            </div>

          
            
        </div>

    )
}

export default LandingNoLogin;