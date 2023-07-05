import img from '../images/gorengan.jpg'
import bg from '../images/bgmakananjay.jpg'
import { useState } from "react";
import { useEffect } from "react";

const PartnerDash = () => {
	const donations = [
		{
		  id: 1,
		  name: "Roger Richard",
		  address: "Los Angeles",
		  amount: 50,
		},
		{
		  id: 2,
		  name: "Sarah Moan",
		  address: "Amsterdam",
		  amount: 25,
		},
		{
		  id: 3,
		  name: "Harry Scarfield",
		  address: "Edinburgh",
		  amount: 150,
		},
		{
		  id: 4,
		  name: "Antonio Gracha",
		  address: "California",
		  amount: 50,
		},
		{
		  id: 5,
		  name: "Agung Yuda",
		  address: "Baleendah",
		  amount: 500,
		},
		{
		  id: 6,
		  name: "Asep Supriyadi",
		  address: "Pameungpeuk",
		  amount: 250,
		},
	  ];
	
	  // Calculate the total donation amount
	  const totalDonation = donations.reduce(
		(accumulator, donate) => accumulator + donate.amount,
		0
	  );
	
	  const [searchTerm, setSearchTerm] = useState("");
	  const [filteredDonors, setFilteredDonors] = useState(donations);
	
	  useEffect(() => {
		const filtered = donations.filter(
		  (donor) =>
			donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			donor.address.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredDonors(filtered);
	  }, [searchTerm]);

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
		<section class="jumbotron">
                <div class="jumbotron__content">
                    <h1 className='text-light'>Hi Welcome, <span className='text-warning'>Partner🥗</span> </h1>
                    <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                        cursus ante dapibus diam. Sed nisi.</p>
                </div>
              
            </section>


      {/* table kedua */}	
      <div className="container">
        <main className="table">
          <section className="table__header">
            <h1 className="text-dark ps-3 ">Member Orders</h1>
            <div className="input-group">
            <input
                // type="search"
                // placeholder="Search Donor..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* <img src="images/search.png" alt="" /> */}
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
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">1</td>
                                <td class="d-flex align-items-center">
                                    <img src="https://img.kurio.network/0_fXbTBqMzFnVY00OV-Erl1b9Ks=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/20/05/08/6ade4a06-0dda-41f7-b08a-d870a37f9248.jpg"
                                        alt="" />
                                    <span>burayot</span>
                                </td>
                                <td class="align-middle">Rocky</td>
                                <td class="align-middle">27 Aug, 9000</td>
                                <td class="align-middle">
                                    <p className="status cancelled m-0">Panding</p>
                                </td>
                                <td class="align-middle">
                                    <p className="status shipped m-0">Detail</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="align-middle">2</td>
                                <td class="d-flex align-items-center">
                                    <img src="https://pasundan.jabarekspres.com/wp-content/uploads/2022/04/ayam-geprek.jpg" alt="" />
                                    <span>Bakso Kimochi</span>
                                </td>
                                <td class="align-middle">Rocky</td>
                                <td class="align-middle">27 Aug, 9000</td>
                                <td class="align-middle">
                                    <p className="status pending">Pending</p>
                                </td>
                                <td class="align-middle">
                                    <p className="status shipped m-0">Detail</p>
                                </td>
                            </tr>

                            <tr>
                                <td class="align-middle">3</td>
                                <td class="d-flex align-items-center">
                                    <img src="https://img-global.cpcdn.com/recipes/5d60946d255537b4/680x482cq70/bubur-ayam-sayur-foto-resep-utama.jpg"
                                        alt="" />
                                    <span>Bubur Enak</span>
                                </td>
                                <td class="align-middle">Rocky</td>
                                <td class="align-middle">27 Aug, 9000</td>
                                <td class="align-middle">
                                    <p className="status delivered m-0">Panding</p>
                                </td>
                                <td class="align-middle">
                                    <p className="status shipped m-0">Detail</p>
                                </td>
                            </tr>
							<tr>
                                <td class="align-middle">3</td>
                                <td class="d-flex align-items-center">
                                    <img src="https://cdn.keepo.me/images/post/lists/2019/10/30/main-list-image-c4f340f1-3fc6-4557-b72c-992f5f457cb4-1.jpg"
                                        alt="" />
                                    <span>Bubur Enak</span>
                                </td>
                                <td class="align-middle">Rocky</td>
                                <td class="align-middle">27 Aug, 9000</td>
                                <td class="align-middle">
                                    <p className="status delivered m-0">Panding</p>
                                </td>
                                <td class="align-middle">
                                    <p className="status shipped m-0">Detail</p>
                                </td>
                            </tr>

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