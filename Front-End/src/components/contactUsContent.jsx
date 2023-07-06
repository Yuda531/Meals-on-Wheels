import { EnvelopeFill, TelephoneFill, Linkedin, Instagram, Youtube } from 'react-bootstrap-icons';

function ContactUsContent(){
    return(
        <div className="body">
            <div className="backblur my-auto">
                <div style={{paddingTop:"100px"}}>
                    <div className="d-flex col-12">
                        <div className="col-4 my-auto">
                    
                            <ul className='col-12'>
                            <h3 className="display-6 container text-white">
                            Connect with <span className="text-warning"> us</span>
                            </h3>
                                <li>
                                    <small id="contacts" className="lead text-white ">
                                    <span><EnvelopeFill className="col-1 mx-3 my-3" /></span> meals@wheels.com
                                    </small>
                                </li>
                                <li>
                                    <small id="contacts1" className="lead text-white ">
                                    <span><TelephoneFill className="col-1 mx-3 my-3" /></span>+62 812 8430 0979
                                    </small>
                                </li>
                                <li>
                                    <a id="contacts5" className="lead text-white  " href="https://www.instagram.com/lord_difit/" target="_blank" rel="noopener noreferrer">
                                    <span><Linkedin className="col-1 mx-3 my-3" /></span>Meals on Wheels
                                    </a>
                                </li>
                                <li>
                                    <a id="contacts3" className="lead text-white  " href="https://www.instagram.com/lord_difit/" target="_blank" rel="noopener noreferrer">
                                    <span><Instagram className="col-1 mx-3 my-3" /></span>@mealsonwheels
                                    </a>
                                </li>
                                <li>
                                    <a id="contacts4" className="lead text-white " href="https://www.youtube.com/@xernomgaming3818" target="_blank" rel="noopener noreferrer">
                                    <span><Youtube className="col-1 mx-3 my-3" /></span>Meals on Wheels Official
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="contactForm" className="col-8 px-5">
                            <h3 className="display-3 container text-white">
                            Contact <span className="text-warning">Us</span>.
                            </h3>
                            <br />
                            <form action="" className="custom-form col-12">
                            <div className="form-floating">
                                <input type="text" placeholder="Your Username" className="col-10 form-control" id="username" />
                                <label htmlFor="username">Your Username</label>
                            </div>
                            <br />
                            <div className="form-floating">
                                <textarea placeholder="Your Message" className="col-10 form-control" id="message" name="" cols="30" rows="29" />
                                <label htmlFor="message">Your Message</label>
                            </div>
                            <div className="form-floating d-flex justify-content-center">
                                <input type="submit" className="btn btn-outline-warning col-6 mt-4" />
                            </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <hr className="border-white" />
                    <div className="d-flex col-12 p-5">
                        <div className="col-8">
                        <iframe className="col-11 rounded-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5166128085034!2d107.59893341744385!3d-6.948221999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6279d52ed8b%3A0xfbc31838ba12ddbf!2sSekolah%20Tinggi%20Teknologi%20Bandung!5e0!3m2!1sid!2sid!4v1688222866125!5m2!1sid!2sid" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-4  my-auto">
                        <h3 className="display-1 text-white">
                        Where to find <span className="text-warning">Us</span>.
                        </h3>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default ContactUsContent;