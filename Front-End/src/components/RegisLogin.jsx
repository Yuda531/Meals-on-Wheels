import LoginOrRegis from "./LoginOrRegis";

function RegisLogin(){
    return(
        <div className="body">
            <div className="backblur">
                <div className="col-12 d-flex">
                    <div className="col-3 my-auto">
                        <h1 className="display-2 fw-bold text-white">
                            <span className="text-warning">Sign-In </span>
                                or 
                                <br /><span className="text-success">Sign-Up</span>
                        </h1>
                        
                    </div>
                    <div className="aboutt ms-4 col-1"></div>

                    <LoginOrRegis />
                </div>
            </div>
        </div>
    )
}

export default RegisLogin;