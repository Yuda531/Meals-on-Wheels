import backgroundImage from "../../images/bg/tileable_wood_texture.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarAdmin from "../NavbarAdmin";

const MemberAdmin = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/admin/all-members"
        );
        setMembers(response.data);
        setFilteredMembers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    const filtered = members.filter((member) => {
      const memberName = member.member_name
        ? member.member_name.toLowerCase()
        : "";
      const memberAge = member.age ? member.age.toString() : "";
      return (
        memberName.includes(searchTerm.toLowerCase()) ||
        memberAge.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredMembers(filtered);
  }, [searchTerm, members]);

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
                    <th>Age</th>
                    <th className="text-center">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((member, index) => (
                    <tr key={member.id}>
                      <td>{index + 1}</td>
                      <td>{member.userId.name}</td>
                      <td>{member.userId.email}</td>
                      <td>{member.age}</td>
                      <td>
                        <table>
                          <tr>
                            <td>Latitude: {member.latitude}</td>
                            <td>Longitude: {member.longitude}</td>
                          </tr>
                        </table>
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
};

export default MemberAdmin;
