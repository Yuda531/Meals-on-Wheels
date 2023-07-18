import terms from '../img/terms.png'

function Terms(){
    return(
        <div className="body">
            <div className="backblur">
                <div className="col-12 d-flex">
                    <div className="text-white lead col-6">
        <h1 className="display-3 text-white">Terms and Conditions</h1>
        <hr className="border-light" />

        <div style={{ maxHeight: "400px", overflow: "auto" }}
      className="teams">
        <p className="lead fw-bold text-white">1. Introduction</p>
        <p>
            Welcome to Meals on Wheels! These terms and conditions govern your use of our food delivery service for disabled
            and elderly customers. By using our service, you agree to comply with and be bound by these terms and conditions.
            Please read them carefully before placing an order.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">2. Service Description</p>

        <p>
            Meals on Wheels is a charity organization that provides nutritious meals to disabled and elderly individuals who
            are unable to cook or shop for themselves. Our service includes the delivery of meals to the specified address at
            the agreed-upon schedule.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">3. Eligibility</p>

        <p>
            Our service is available to individuals who meet the following criteria:
        </p>
        <ul className="px-4 mb-4" style={{listStyleType:"disc"}}>
            <li className="mb-2">Must be disabled or elderly (age 60 or above)</li>
            <li className="mb-2">Must have difficulty preparing meals or shopping for food</li>
            <li className="mb-2">Must reside within our designated delivery area</li>
        </ul>

        {/* <h2 className="display-4"></h2> */}
        <br /><br />

        <p className="lead fw-bold text-white">4. Placing an Order</p>

        <p>
            To request meal delivery, eligible individuals must contact our office and provide the necessary information
            including their name, address, dietary restrictions, and preferred delivery schedule. Orders should be placed in
            advance to ensure timely delivery.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">5. Delivery and Service Schedule</p>

        <p>
            Meals on Wheels operates on specific delivery days and times. Our delivery staff will bring the meals to the
            specified address during the designated time slot. However, please note that unforeseen circumstances such as
            traffic or weather conditions may affect the delivery schedule. We will make our best effort to notify customers
            in such cases.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">6. Payment</p>

        <p>
            Meals on Wheels is a non-profit organization, and our services are provided free of charge. We rely on donations
            and grants to sustain our operations and provide meals to those in need. Contributions are greatly appreciated
            and can be made through our website or other designated channels.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">7. Limitation of Liability</p>

        <p>
            While we make every effort to ensure the quality and safety of our meals, Meals on Wheels cannot be held liable
            for any damages or issues arising from the consumption of our provided meals. Individuals with specific dietary
            restrictions or allergies are advised to consult with their healthcare providers before consuming our meals.
        </p>
        <br /><br />

        {/* <h2 className="display-4"></h2> */}
        <p className="lead fw-bold text-white">8. Modification of Terms</p>

        <p>
            Meals on Wheels reserves the right to modify these terms and conditions at any time. Any changes will be
            communicated through our website or other appropriate channels. By continuing to use our service, you agree to
            be bound by the updated terms and conditions.
        </p>


        </div>

        
                    </div>
                    <div className="col-6 mx-5 my-auto">
                        <img className='col-12' src={terms} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Terms;