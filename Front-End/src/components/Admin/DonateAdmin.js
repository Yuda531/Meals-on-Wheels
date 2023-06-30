

const Donate = () => {

    const donations = [
        {
            id : 1,
            name : "Roger Richard",
            address : "Los Angeles",
            amount : 50
        },
        {
            id : 2,
            name : "Sarah Moan",
            address : "Amsterdam",
            amount : 25
        },
        {
            id : 3,
            name : "Harry Scarfield",
            address : "Edinburgh",
            amount : 150
        },
        {
            id : 4,
            name : "Antonio Gracha",
            address : "California",
            amount : 50
        },
    ];

    return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5">Donations</h1>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-4">
            <div className="card-body shadow">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Amount ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donate, index) => (
                      <tr key={donate.id}>
                        <td>{index + 1}</td>
                        <td>{donate.name}</td>
                        <td>{donate.address}</td>
                        <td>{donate.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
