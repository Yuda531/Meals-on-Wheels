import React from 'react';
import privacy from '../img/privacy.png'

const PrivacyPolicy = () => {
  return (
    <div className="body">
        <div className="backblur">
            <div className="col-12 d-flex">
                <div className='col-6 lead'>
                    <h1 className="display-3 text-white">Privacy & Policy</h1>
                    <hr className="border-light" />

                    <div style={{ maxHeight: "400px", overflow: "auto" }} className="teams">
                    <p className="lead text-white">
                        At Meals on Wheels, we are committed to protecting your privacy. This Privacy Policy outlines how we collect,
                        use, and safeguard your personal information when you use our food delivery service.
                    </p>

                    <p className="text-white">
                        <span className="fw-bold">Information We Collect:</span> We may collect certain personal information such as
                        your name, address, contact details, and dietary restrictions when you place an order with us. This information
                        is used solely for the purpose of delivering our services and ensuring a personalized experience.
                    </p>

                    <br />

                    <p className="text-white">
                        <span className="fw-bold">How We Use Your Information:</span> Your personal information is used to process and
                        deliver your food orders, communicate with you about your orders and service updates, and improve our services
                        to meet your needs.
                    </p>

                    <br />

                    <p className="text-white">
                        <span className="fw-bold">Sharing of Information:</span> We do not sell or share your personal information with
                        third parties for marketing purposes. However, we may share your information with trusted service providers who
                        assist us in delivering our services and maintaining our operations.
                    </p>

                    <br />

                    <p className="text-white">
                        <span className="fw-bold">Data Security:</span> We take reasonable precautions to protect your personal
                        information from unauthorized access, disclosure, alteration, or destruction. We implement industry-standard
                        security measures and regularly review our security practices to ensure your data is safe.
                    </p>

                    <br />

                    <p className="text-white">
                        <span className="fw-bold">Your Choices:</span> You have the right to review, update, or delete your personal
                        information held by us. You may also choose to opt-out of receiving marketing communications from us.
                    </p>

                    <br />

                    <p className="text-white">
                        <span className="fw-bold">Updates to Privacy Policy:</span> We may update this Privacy Policy from time to
                        time. Any changes will be posted on our website, and by continuing to use our services, you agree to the updated
                        terms.
                    </p>
                    </div>




        
                </div>
                <div className="col-6 mx-3 my-auto">
                    <img className='col-12' src={privacy} alt="" />
                </div>
            </div>

        </div>
    </div>

  );
};

export default PrivacyPolicy;
