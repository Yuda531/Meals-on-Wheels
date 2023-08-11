import img from '../images/measl2.jpeg'
import bg from '../images/bgmakananjay.jpg'
import iconGif from '../images/barbecue.gif'
import { useState } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2';


const PartnerDash = () => {
  let User = sessionStorage.getItem("user");
  User = JSON.parse(User);

  const donations = [
    {
      id: 1,
      meals: "Paha ajri",
      name: "Asep Roger",
      date: "06/08/2023",
      amount: 8,
      status: "Panding",
    },
    {
      id: 2,
      meals: "Serabi nesan",
      name: "Yang Maha Agung",
      date: "06/08/2023",
      amount: 100,
      status: "Process",
    },
    {
      id: 3,
      meals: "loly SD",
      name: "Rehan crod",
      date: "06/08/2023",
      amount: 13,
      status: "Success",
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDonors, setFilteredDonors] = useState(donations);

  useEffect(() => {
    const filtered = donations.filter(
      (donor) =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDonors(filtered);
  }, [searchTerm]);

  const handleStatusChange = (donor, selectedStatus) => {
    if (selectedStatus !== null) {
      Swal.fire({
            title: 'Status Updated!',
            text: `Meals ${donor.meals} status has been updated to ${selectedStatus}.`,
            icon: 'success',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: ` Meals ${donor.meals} ${selectedStatus}`,
            text: `Status Updated!`,
            
            imageUrl: iconGif, // Replace this with the URL of your success GIF
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Success GIF',
          }).then(() => {
            const updatedDonors = donations.map((item) =>
              item.id === donor.id ? { ...item, status: selectedStatus } : item
            );
            setFilteredDonors(updatedDonors);
          });
        }
      });
    }
  };



  return (
    <>
      <div
        className="backimg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "50px",
          backgroundColor: 'black',


          
        }}

        
      >
        <div class="col-10 mx-auto p-5 my-4 jumb">
          <div class=" col-10">
            <h1 className='text-light display-4'>Welcome, <span className='text-warning'>{User.name}🥗</span> </h1>
            <br />
            <p className='text-light lead'>Here's a to do list for you. Happy cooking!</p>
          </div>
        </div>

        <div className="container">
          <main className="table">
            <section className="table__header">
              <h1 className="text-dark ps-3 ">Member Orders</h1>
              <div className='input-group my-auto'>
              <input
                  type="search"
                  placeholder="Search Partner..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src="images/search.png" alt="" />
              </div>
            </section>
            <section className="table__body">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Meals Request</th>
                    <th>Name</th>
                    <th>Order Date</th>
                    <th>amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDonors.map((donor) => (
                    <tr key={donor.id}>
                      <td className="align-middle">{donor.id}</td>
                      <td className="d-flex align-items-center">
                        <img src={img} alt="" />
                        <span>{donor.meals}</span>
                      </td>
                      <td className="align-middle">{donor.name}</td>
                      <td className="align-middle">{donor.date}</td>
                      <td className="align-middle">{donor.amount}</td>
                      <td className="align-middle">
                        <select
                          className={`status status-${donor.status.toLowerCase()} m-0 px-4 bg-none text-dark`}
                          onChange={(e) => handleStatusChange(donor, e.target.value)}
                        >
                          <option className="text-center" value="Panding">Pending</option>
                          <option value="Process">Proccess</option>
                          <option value="Success">Success</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="align-middle">
                        <a href="detail-meals">
                          <p className="status shipped m-0 text-dark">Detail</p>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default PartnerDash;
