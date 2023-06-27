import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="display-4 mb-4">404 Not Found</h1>
            <p className="lead">
              The requested URL was not found on this server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
