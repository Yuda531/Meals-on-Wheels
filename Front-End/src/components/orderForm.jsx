import food from '../img/healthy.png'
function OrderForm(){
    return(
        
                <div className="col-12 d-flex">
                    <div className="col-8">
                        <div className="body">
                            <div className="backblur">
                            <h1 className="display-3 text-white">
                            Place an order
                        </h1>
                        <hr className="border-white" />

                        {/* NAMA PARTNER YANG DISELECT */}
                        <p className="lead text-white">
                            selected partner name's MENU LIST
                        </p>
                        <br />

                        <div style={{maxHeight: "560px", overflow: "auto" }} className="teams px-4">

                            {/* MENU LIST DISINI */}
                            <div className="mb-4 bg-white p-4 col-12 mx-auto d-flex">
                                <div className="col-4">
                                    <img src={food} className='col-12' alt="" />
                                </div>
                                <div className="col-8 px-3 my-auto">
                                    <h1 className="display-6 mb-3">
                                        Food Name
                                    </h1>
                                <p className="lead text-dark">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptas magnam sequi provident iusto aliquam accusantium ipsum illo, quas adipisci?
                                </p>
                                <div className="d-flex justify-content-end mt-2">
                                    <button className="btn btn-outline-success col-6">
                                        Order
                                    </button>
                                </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-white p-4 col-12 mx-auto d-flex">
                                <div className="col-4">
                                    <img src={food} className='col-12' alt="" />
                                </div>
                                <div className="col-8 px-3 my-auto">
                                    <h1 className="display-6 mb-3">
                                        Food Name
                                    </h1>
                                <p className="lead text-dark">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptas magnam sequi provident iusto aliquam accusantium ipsum illo, quas adipisci?
                                </p>
                                <div className="d-flex justify-content-end mt-2">
                                    <button className="btn btn-outline-success col-6">
                                        Order
                                    </button>
                                </div>
                                </div>
                            </div>

                            <div className="mb-4 bg-white p-4 col-12 mx-auto d-flex">
                                <div className="col-4">
                                    <img src={food} className='col-12' alt="" />
                                </div>
                                <div className="col-8 px-3 my-auto">
                                    <h1 className="display-6 mb-3">
                                        Food Name
                                    </h1>
                                <p className="lead text-dark">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe voluptas magnam sequi provident iusto aliquam accusantium ipsum illo, quas adipisci?
                                </p>
                                <div className="d-flex justify-content-end mt-2">
                                    <button className="btn btn-outline-success col-6">
                                        Order
                                    </button>
                                </div>
                                </div>
                            </div>

                        </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-4 bg-white paddingNoBlur">
                        <h1 className="display-5 mt-4 mb-5 text-success">
                            Available restaurants
                        </h1>
                        <div style={{maxHeight: "560px", overflow: "auto" }} className="teamsGreen px-2">



                        {/* LIST PARTNER LAIN */}

                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        <div className="mb-4">
                            <div className="col-12 p-2 d-flex">
                                <div className="col-6">
                                    <img src={food} alt="" className="col-12" />
                                </div>
                                <div className="col-6 my-auto">
                                    <h1 className="lead text-dark">
                                        PARTNER NAME
                                    </h1>
                                    <div className="d-flex mt-4 justify-content-end">
                                    <button className="btn btn-outline-secondary col-6">
                                        View
                                    </button>
                                    </div>
                                </div>

                            </div>
                            <div style={{ padding: "0.1%" }} className="bg-dark"></div>
                        </div>
                        

                        </div> 

                    </div>
                </div>

    )
}

export default OrderForm;