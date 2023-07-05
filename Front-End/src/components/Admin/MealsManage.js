// MealsManage.js
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import backgroundImage from "../../images/bg/purty_wood.png";
import "../../CSS/admin/AdminDashboard.css";

const MealsManage = () => {
  const requestMeals = [
    {
      id: 1,
      mealsName: "Grilled Chicken Salad",
      mealsDescription:
        "A healthy and nutritious salad made with grilled chicken, fresh vegetables, and a light dressing.",
      minFunds: 10,
    },
    {
      id: 2,
      mealsName: "Vegetable Stir-Fry",
      mealsDescription:
        "A delicious stir-fry dish packed with colorful vegetables, tofu, and a flavorful sauce.",
      minFunds: 5,
    },
    {
      id: 3,
      mealsName: "Quinoa Bowl",
      mealsDescription:
        "A nourishing bowl filled with cooked quinoa, roasted vegetables, and a tangy dressing.",
      minFunds: 7,
    },
    {
      id: 4,
      mealsName: "Baked Salmon with Steamed Broccoli",
      mealsDescription:
        "Tender and flaky baked salmon served with steamed broccoli, a perfect combination for a healthy meal.",
      minFunds: 9,
    },
    {
      id: 5,
      mealsName: "Spaghetti Bolognese",
      mealsDescription:
        "Classic Italian pasta dish with hearty meat sauce, served over a bed of spaghetti.",
      minFunds: 8,
    },
    {
      id: 6,
      mealsName: "Caesar Salad",
      mealsDescription:
        "Crisp romaine lettuce tossed with homemade Caesar dressing, croutons, and Parmesan cheese.",
      minFunds: 6,
    },
    {
      id: 7,
      mealsName: "Beef Tacos",
      mealsDescription:
        "Soft corn tortillas filled with seasoned ground beef, topped with salsa, cheese, and fresh cilantro.",
      minFunds: 7,
    },
    {
      id: 8,
      mealsName: "Mushroom Risotto",
      mealsDescription:
        "Creamy and flavorful risotto made with Arborio rice and sautéed mushrooms.",
      minFunds: 9,
    },
    {
      id: 9,
      mealsName: "Honey Garlic Shrimp",
      mealsDescription:
        "Tender shrimp cooked in a sweet and savory honey garlic sauce, served with steamed rice.",
      minFunds: 10,
    },
    {
      id: 10,
      mealsName: "Chicken Parmesan",
      mealsDescription:
        "Breaded chicken cutlets topped with marinara sauce and melted mozzarella cheese, served with spaghetti.",
      minFunds: 9,
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMeals, setFilteredMeals] = useState(requestMeals);

  useEffect(() => {
    const filtered = requestMeals.filter((meals) => {
      const mealsNameIncludesTerm = meals.mealsName.toLowerCase().includes(searchTerm.toLowerCase());
      const minFundsIncludesTerm = meals.minFunds.toString().toLowerCase().includes(searchTerm.toLowerCase());
      return mealsNameIncludesTerm || minFundsIncludesTerm;
    });
    setFilteredMeals(filtered);
  }, [searchTerm]);
  

  return (
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
              <img src="images/search.png" alt="" />
            </div>
          </section>
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Meals Name</th>
                  <th>Meals Description</th>
                  <th>Min. Funds</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredMeals.map((meal) => (
                  <tr key={meal.id}>
                    <td>{meal.id}</td>
                    <td>
                      {/* Replace the image source and text with appropriate data */}
                      <img
                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt=""
                      />
                      {meal.mealsName}
                    </td>
                    <td>{meal.mealsDescription}</td>
                    <td>
                      <i class="fa fa-usd"></i> {meal.minFunds}
                    </td>
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
                  <label for="meals_name" class="form-label">
                    Meals Name
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="meals_name"
                    name="meals_name"
                    value="${meals_name}"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="meals_desc" class="form-label">
                    Meals Description
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="meals_desc"
                    name="meals_desc"
                    value="${meals_desc}"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="funds" class="form-label">
                    Min. Funds ($)
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="funds"
                    name="funds"
                    value="${funds}"
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
                  <label for="meals_name" class="form-label">
                    Meals Name
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="meals_name"
                    name="meals_name"
                    value="${meals_name}"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="meals_desc" class="form-label">
                    Meals Description
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="meals_desc"
                    name="meals_desc"
                    value="${meals_desc}"
                    required
                  />
                </div>

                <div class="mb-3">
                  <label for="funds" class="form-label">
                    Min. Funds ($)
                  </label>{" "}
                  <input
                    type="text"
                    class="form-control"
                    id="funds"
                    name="funds"
                    value="${funds}"
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
                Delete this menu
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
  );
};

export default MealsManage;
