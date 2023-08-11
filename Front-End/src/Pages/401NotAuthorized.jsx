function NotAuthorized(){
    return(
        <div style={{height:"500px"}} className="container mt-4">
        <div className="d-flex justify-content-center">
          <div className="col-12">
            <div className="text-center">
              <h1 className="display-3 fw-bold mb-4">401 - UNAUTHORIZED</h1>
              <h2 className="display-6 text-danger">Access Denied</h2>
              <hr />
              <p className="lead text-dark">
                Sorry, you don't have authorization to access this page. Please contact admin if you think this is a mistake.
              </p>
              <br />
              <a className="lead" href="/">Go back to home</a>
            </div>
          </div>
        </div>
      </div>
    )
} 
export default NotAuthorized;