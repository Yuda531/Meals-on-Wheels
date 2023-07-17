// MealsManage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.css";
import backgroundImage from "../../images/bg/purty_wood.png";
import "../../CSS/admin/AdminDashboard.css";
import Swal from "sweetalert2";
import NavbarAdmin from "../NavbarAdmin";

const MealsManage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [formData, setFormData] = useState({
    meals_name: "",
    meals_description: "",
    stock: 0,
  });
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/all-meals")
      .then((response) => {
        console.log(response.data); // Tampilkan data yang diterima ke konsol
        setMeals(response.data);
        setFilteredMeals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const filtered = meals.filter((meal) => {
      const mealsNameIncludesTerm = meal.meals_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const stockIncludesTerm = meal.stock
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return mealsNameIncludesTerm || stockIncludesTerm;
    });
    setFilteredMeals(filtered);
  }, [searchTerm, meals]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedMeal) {
      axios
        .put(
          `http://localhost:8080/admin/edit-meals/${selectedMeal.meals_id}`,
          formData
        )
        .then((response) => {
          console.log("Menu berhasil diedit");
          Swal.fire("Data has been changed", "", "success").then(() => {
            setFormData({
              meals_name: "",
              meals_description: "",
              stock: 0,
            });
            setSelectedMeal(null); // Clear selected meal
            axios
              .get("http://localhost:8080/admin/all-meals")
              .then((response) => {
                setMeals(response.data);
                setFilteredMeals(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      handleAddMeal();
    }
  };

  const handleAddMeal = () => {
    axios
      .post("http://localhost:8080/admin/add-meals", formData)
      .then((response) => {
        console.log("Menu berhasil ditambahkan");
        Swal.fire("Success Add Menu", "", "success").then(() => {
          setFormData({
            meals_name: "",
            meals_description: "",
            stock: 0,
          });
          axios
            .get("http://localhost:8080/admin/all-meals")
            .then((response) => {
              setMeals(response.data);
              setFilteredMeals(response.data);
              // Refresh the page after adding the meal
              window.location.href = "/admin_meals";
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditMeal = (meal) => {
    setSelectedMeal(meal);

    setFormData({
      meals_name: meal.meals_name,
      meals_description: meal.meals_description,
      stock: meal.stock,
    });
  };

  const handleDeleteMeal = (mealsId) => {
    axios
      .delete(`http://localhost:8080/admin/delete-meals?mealsId=${mealsId}`)
      .then((response) => {
        // Tindakan yang dilakukan setelah penghapusan berhasil
        console.log("Menu berhasil dihapus");
        // Show SweetAlert2 success notification
        Swal.fire("Delete Menu Success", "", "success").then(() => {
          // Navigate to /admin_meals
          window.location.href = "/admin_meals";
        });
        // Refresh data (optional)
        axios
          .get("/meals/all-meals")
          .then((response) => {
            setMeals(response.data);
            setFilteredMeals(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <h1 className="text-black ps-3 ">All Meals Menu</h1>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search Meals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
              className="btn btn-lg btn-secondary rounded-3 px-2 py-1"
              data-bs-toggle="modal"
              data-bs-target="#addMenu"
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
            </section>
            <section className="table__body">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Meals Name</th>
                    <th>Meals Description</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMeals.map((meal, index) => (
                    <tr key={meal.meals_id}>
                      <td>{index + 1}</td>
                      <td>{meal.meals_name}</td>
                      <td>{meal.meals_description}</td>
                      <td>{meal.stock}</td>
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
                            onClick={() => handleEditMeal(meal)}
                          >
                            <i className="fas fa-edit fa-sm"></i>
                          </button>
                          <button
                            className="btn btn-danger rounded-2 ms-2"
                            onClick={() => handleDeleteMeal(meal.meals_id)}
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
          className="modal fade"
          id="addMenu"
          tabIndex="-1"
          aria-labelledby="addMenuLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addMenuLabel">
                  Add Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleAddMeal}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="meals_name" className="form-label">
                      Meals Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="meals_name"
                      name="meals_name"
                      value={formData.meals_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="meals_desc" className="form-label">
                      Meals Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="meals_desc"
                      name="meals_description"
                      value={formData.meals_description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="funds" className="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Menu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- edit Modal --> */}
        <div
          className="modal fade"
          id="editMenu"
          tabIndex="-1"
          aria-labelledby="editMenuLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editMenuLabel">
                  Edit Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="meals_name" className="form-label">
                      Meals Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="meals_name"
                      name="meals_name"
                      value={formData.meals_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="meals_desc" className="form-label">
                      Meals Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="meals_desc"
                      name="meals_description"
                      value={formData.meals_description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="funds" className="form-label">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsManage;
