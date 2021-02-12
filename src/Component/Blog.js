import { React } from "react";
const Blog = () => {
    return ( 
        <div className="site-section" id="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h3 className="section-sub-title">Blog</h3>
              <h2 className="section-title mb-3">Blog Posts</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img
                  src="images/model_1_bg.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <h2 className="font-size-regular">
                  <a href="#" className="text-black"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.</a
                  >
                </h2>
                <div className="meta mb-4">
                  Ham Brook <span className="mx-2">&bullet;</span> Jan 18, 2019<span
                    className="mx-2"
                    >&bullet;</span
                  >
                  <a href="#">News</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius.
                </p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img
                  src="images/product_1_bg.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <h2 className="font-size-regular">
                  <a href="#" className="text-black"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.</a
                  >
                </h2>
                <div className="meta mb-4">
                  James Phelps <span className="mx-2">&bullet;</span> Jan 18,
                  2019<span className="mx-2">&bullet;</span> <a href="#">News</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius.
                </p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div className="h-entry">
                <img
                  src="images/model_5_bg.jpg"
                  alt="Image"
                  className="img-fluid"
                />
                <h2 className="font-size-regular">
                  <a href="#" className="text-black"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.</a
                  >
                </h2>
                <div className="meta mb-4">
                  James Phelps <span className="mx-2">&bullet;</span> Jan 18,
                  2019<span className="mx-2">&bullet;</span> <a href="#">News</a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  eligendi nobis ea maiores sapiente veritatis reprehenderit
                  suscipit quaerat rerum voluptatibus a eius.
                </p>
                <p><a href="#">Continue Reading...</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog;