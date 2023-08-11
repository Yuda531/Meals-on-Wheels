import React from "react";

const NotFound = () => {
  return (
    <div style={{height:"500px"}} className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="col-12">
          <div className="text-center">
            <h1 className="display-3 fw-bold mb-4">404 - NOT FOUND</h1>
            <h2 className="display-6">Not Found</h2>
            <hr />
            <p className="lead text-dark">
              The requested URL was not found on this server.
            </p>
            <br />
            <a className="lead" href="/">Go back to home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
