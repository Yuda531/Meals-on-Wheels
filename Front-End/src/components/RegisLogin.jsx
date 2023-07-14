import LoginOrRegis from "./LoginOrRegis";

function RegisLogin(){
    return(
        <div className="body custom-overflow">
            <div className="backblur">
                <div className="col-12 d-flex p-5">
                    <div className="col-3 my-auto">
                        <h1 className="display-4 fw-bold text-white">
                            <span className="text-warning">Sign-In </span>
                                or <span className="text-success">Sign-Up</span>
                        </h1>
                        <h2 className="lead text-white">
                            <span className="text-success fw-bold">Meals</span> on <span className="text-warning">Wheels</span>.
                        </h2>
                            
                        <p className="text-white">Register to access all features of 
                        <span className="text-success"> Meals</span> on <span className="text-warning">Wheels</span>.
                        </p>
                    </div>
                    <div className="aboutt ms-4 col-1"></div>

                    <LoginOrRegis />
                </div>
            </div>
        </div>
    )
}

export default RegisLogin;