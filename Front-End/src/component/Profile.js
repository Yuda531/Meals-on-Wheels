import author from "../images/author-photo.png";

function Profile() {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div class='container py-5'>
        <div class='row'>
          <div class='col-lg-4'>
            <div class='card mb-4'>
              <div class='card-body text-center'>
                <img
                  src={author}
                  alt='avatar'
                  class='rounded-circle img-fluid text-center mx-auto'
                  style={{ width: "150px" }}
                />
                <h3 class='my-3 name'>Sandra Fortin</h3>
              </div>
            </div>
          </div>
          <div class='col-lg-8'>
            <div class='card mb-4 p-3'>
              <div class='card-body'>
                <div class='row'>
                  <div class='col-sm-3'>
                    <p class='mb-0'>Full Name</p>
                  </div>
                  <div class='col-sm-9'>
                    <p class='text-muted mb-0'>Sandra Fortin</p>
                  </div>
                </div>
                <hr />
                <div class='row'>
                  <div class='col-sm-3'>
                    <p class='mb-0'>Email</p>
                  </div>
                  <div class='col-sm-9'>
                    <p class='text-muted mb-0'>sandra@chow.com</p>
                  </div>
                </div>
                <hr />
                <div class='row'>
                  <div class='col-sm-3'>
                    <p class='mb-0'>Phone</p>
                  </div>
                  <div class='col-sm-9'>
                    <p class='text-muted mb-0'>(097) 234-5678</p>
                  </div>
                </div>
                <hr />
                <div class='row'>
                  <div class='col-sm-3'>
                    <p class='mb-0'>Mobile</p>
                  </div>
                  <div class='col-sm-9'>
                    <p class='text-muted mb-0'>(098) 765-4321</p>
                  </div>
                </div>
                <hr />
                <div class='row'>
                  <div class='col-sm-3'>
                    <p class='mb-0'>Address</p>
                  </div>
                  <div class='col-sm-9'>
                    <p class='text-muted mb-0'>Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Profile;
