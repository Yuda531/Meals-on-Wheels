import background from '../img/sedekah1.jpg'
import StickyHeader from '../components/header';

const Donor = () => {
  return (
    // <div style={{ backgroundColor: "#A2FF86" }}>
    //   <div className="container">
    //     <div className="col-8 p-5 m-5 bg-white">
    //       <h1>
    //         <span style={{ color: "red" }}>Indonesia</span> Senior need you
    //       </h1>
    //       <h3>
    //         Every knock delivers the food, compassion and care that our aging
    //         neighbors need.
    //       </h3>
    //     </div>

    //     <div className="col-8 p-5 m-5 bg-white text-center d-flex flex-column">
    //       <h1>Donation Now</h1>

    //       <div
    //         className="btn-group m-5"
    //         role="group"
    //         aria-label="Basic radio toggle button group"
    //       >
    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio1"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio1">
    //           $10
    //         </label>

    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio2"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio2">
    //           $15
    //         </label>

    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio3"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio3">
    //           $20
    //         </label>
    //       </div>

    //       <div
    //         className="mt-auto btn-group m-5"
    //         role="group"
    //         aria-label="Basic radio toggle button group"
    //       >
    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio4"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio4">
    //           $25
    //         </label>

    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio5"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio5">
    //           $50
    //         </label>

    //         <input
    //           type="radio"
    //           className="btn-check"
    //           name="btnradio"
    //           id="btnradio6"
    //           autoComplete="off"
    //         />
    //         <label className="btn btn-outline-primary" htmlFor="btnradio6">
    //           $100
    //         </label>
    //       </div>
    //       <button type="button" class="btn btn-primary btn-sm">
    //         Primary
    //       </button>
    //     </div>
    //   </div>
    // </div>



    /////

    <div className="d-flex align-items-center justify-content-center mt-4" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 p-5 m-5 bg-white">
            <StickyHeader activePage={"contact-us"} />
            <h1>
              <span style={{ color: "red" }}>Indonesia</span> Senior need you
            </h1>
            <h3>
              Every knock delivers the food, compassion and care that our aging neighbors need.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 p-5 m-5 bg-white text-center d-flex flex-column">
            <h1>Donate Now</h1>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                $10
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                $15
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                $20
              </label>
            </div>
            <div className="btn-group mt-4" role="group" aria-label="Basic radio toggle button group">
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio4"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio4">
                $25
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio5"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio5">
                $50
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio6"
                autoComplete="off"
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio6">
                $100
              </label>
            </div>
            <button type="button" className="btn btn-primary btn-sm mt-4">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Donor;
