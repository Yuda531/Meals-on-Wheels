// MealsManage.js
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

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
      minFunds: 5,
    },
    {
      id: 4,
      mealsName: "Baked Salmon with Steamed Broccoli",
      mealsDescription:
        "Tender and flaky baked salmon served with steamed broccoli, a perfect combination for a healthy meal.",
      minFunds: 5,
    },
    // Add more dummy data here...
  ];

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5">All Meals Menu</h1>
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
                      <th>Meals Name</th>
                      <th>Meals Description</th>
                      <th>Min. Funds ($)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestMeals.map((meal, index) => (
                      <tr key={meal.id}>
                        <td>{index + 1}</td>
                        <td>{meal.mealsName}</td>
                        <td>{meal.mealsDescription}</td>
                        <td>{meal.minFunds}</td>
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
              </div>
            </div>
          </div>
        </div>
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
					<div class="modal fade" id="deleteMenu" >
					  <div class="modal-dialog">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h1 class="modal-title fs-5" id="deleteMenuLabel">Delete this menu</h1>
					        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <div class="modal-body">
					        You want to really delete this menu
					      </div>
					      <div class="modal-footer">
					        <a href="delete/${user.getUserId()}" class="btn btn-outline-danger">Delete</a>
					      </div>
					    </div>
					  </div>
					</div>
    </div>
  );
};

export default MealsManage;
