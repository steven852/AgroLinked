import 'fontawesome/css/all.min.css';
const Footer = () => {

  return (
    <div className="container-fullwidth">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 text-white bg-success">
          <div className="d-none d-lg-block">
            <b>Find us on our social networks:</b>
          </div>
          <div>
            <a href="#" className="text-white me-4">
              <span className="fab fa-facebook-f"></span>
            </a>
            <a href="#" className="text-white me-4">
              <span className="fab fa-twitter"></span>
            </a>
            <a href="#" className="text-white me-4">
              <span className="fab fa-google"></span>
            </a>
            <a href="#" className="text-white me-4">
              <span className="fab fa-instagram"></span>
            </a>
            <a href="#" className="text-white me-4">
              <span className="fab fa-linkedin"></span>
            </a>
            <a href="#" className="text-white me-4">
              <span className="fab fa-github"></span>
            </a>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="container text-center text-md-start">

            <div className="row">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">AgroLinked</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                <p>
                  Do it better when you are Agro-Linked.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>

                <p>
                  <a href="#!" className="text-dark">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Bootstrap Angular</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                <p>
                  <a href="#!" className="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-1 text-white text-center bg-dark">
          <p>© 2021 Copyright: <a href="#">AgroLinked</a></p>
        </section>
      </footer>
    </div>

  )
}

export default Footer
