import backgroundImage from "../../images/bg/tileable_wood_texture.png";
import { useEffect } from "react";
import { useState } from "react";
import NavbarAdmin from "../NavbarAdmin";

const MemberAdmin = () => {
  const MemberMOW = [
    {
      id: 1,
      email: "grascha98@gmail.com",
      password: "qwerty123",
      member_name: "Grascha Ajendra",
      address: "Moskow",
    },
    {
      id: 2,
      email: "john@example.com",
      password: "password123",
      member_name: "John Doe",
      address: "New York",
    },
    {
      id: 3,
      email: "emma@example.com",
      password: "abc123",
      member_name: "Emma Smith",
      address: "London",
    },
    {
      id: 4,
      email: "alex@example.com",
      password: "xyz456",
      member_name: "Alex Johnson",
      address: "Paris",
    },
    {
      id: 5,
      email: "sara@example.com",
      password: "pass123",
      member_name: "Sara Thompson",
      address: "Berlin",
    },
    {
      id: 6,
      email: "michael@example.com",
      password: "mypass",
      member_name: "Michael Brown",
      address: "Tokyo",
    },
    {
      id: 7,
      email: "laura@example.com",
      password: "laura321",
      member_name: "Laura Davis",
      address: "Sydney",
    },
    {
      id: 8,
      email: "peter@example.com",
      password: "peterp",
      member_name: "Peter Wilson",
      address: "Toronto",
    },
    {
      id: 9,
      email: "julia@example.com",
      password: "julia456",
      member_name: "Julia Clark",
      address: "Rio de Janeiro",
    },
    {
      id: 10,
      email: "kevin@example.com",
      password: "kevinpass",
      member_name: "Kevin Martinez",
      address: "Mexico City",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(MemberMOW);

  useEffect(() => {
    const filtered = MemberMOW.filter(
      (member) =>
        member.member_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  }, [searchTerm]);
  

  return (
    <>
      <NavbarAdmin />
      <div
      className="backimg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <div className="container">
        <main className="table">
          <section className="table__header">
            <h1 className="text-black ps-3 ">List Members</h1>
            <div className="input-group">
              <input
                type="search"
                placeholder="Search Member..."
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
                  <th>No</th>
                  <th>Members Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.id}</td>
                    <td>{member.member_name}</td>
                    <td>{member.email}</td>
                    <td>{member.password}</td>
                    <td>{member.address}</td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-secondary rounded-3 px-2 py-1"
                          data-bs-toggle="modal"
                          data-bs-target="#addMenu"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn btn-primary rounded-2 ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#editMenu"
                        >
                          <i className="fas fa-edit fa-sm"></i>
                        </button>
                        <button
                          className="btn btn-danger rounded-2 ms-2"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteMenu"
                        >
                          <i className="fas fa-trash fa-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>

      {/* <!-- add Modal --> */}
      <div
        class="modal fade"
        id="addMenu"
        tabindex="-1"
        aria-labelledby="addMenuLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addMenuLabel">
                Add Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="/#" method="post">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="member_name" class="form-label">
                    Members Name
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_name"
                    name="member_name"
                    value="${member_name}"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="member_email" class="form-label">
                    Email
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_email"
                    name="member_email"
                    value="${member_email}"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    name="password"
                    value="${password}"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="member_address" class="form-label">
                    Address
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_address"
                    name="member_address"
                    value="${member_address}"
                    required
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- edit Modal --> */}
      <div
        class="modal fade"
        id="editMenu"
        tabindex="-1"
        aria-labelledby="editMenuLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editMenuLabel">
                Edit Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form action="/#" method="post">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="member_name" class="form-label">
                    Members Name
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_name"
                    name="member_name"
                    value="${member_name}"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="member_email" class="form-label">
                    Email
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_email"
                    name="member_email"
                    value="${member_email}"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="member_address" class="form-label">
                    Address
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="member_address"
                    name="member_address"
                    value="${member_address}"
                    required
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <!-- delete confirmation --> */}
      <div class="modal fade" id="deleteMenu">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="deleteMenuLabel">
                Delete this Member
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">You want to really delete this menu</div>
            <div class="modal-footer">
              <a
                href="delete/${user.getUserId()}"
                class="btn btn-outline-danger"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MemberAdmin;
