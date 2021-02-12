import React from 'react'
const Testimonals = () => {
    return ( 
      <div className="site-section testimonial-wrap" id="testimonials-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">People Says</h3>
            <h2 className="section-title mb-3">Testimonials</h2>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
        <div>
          <div className="testimonial">
            <figure
              className="mb-4 d-block align-items-center justify-content-center"
            >
              <div>
                <img
                  src="images/person_3.jpg"
                  alt=""
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black"><strong>John Smith</strong></p>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <figure
              className="mb-4 d-block align-items-center justify-content-center"
            >
              <div>
                <img
                  src="images/person_2.jpg"
                  alt=""
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>

            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>

            <p className="text-black"><strong>Robert Aguilar</strong></p>
          </div>
        </div>

        <div>
          <div className="testimonial">
            <figure
              className="mb-4 d-block align-items-center justify-content-center"
            >
              <div>
                <img
                  src="images/person_4.jpg"
                  alt=""
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black"><strong>Roger Spears</strong></p>
          </div>
        </div>

        <div>
          <div className="testimonial">
            <figure
              className="mb-4 d-block align-items-center justify-content-center"
            >
              <div>
                <img
                  src="images/person_1.jpg"
                  alt=""
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black"><strong>Kyle McDonald</strong></p>
          </div>
        </div>
      </div>
    </div>

    );
} 
export default Testimonals;