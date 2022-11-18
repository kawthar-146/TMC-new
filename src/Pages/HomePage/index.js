import React from "react";
import Videoa from "../../components/Videoa";
import img1 from "../../assets/123-removebg-preview.png";
import img2 from "../../assets/360_F_305718377_AE5MJ16NzAFCrTcqEl1fYtofYlfqoUlp-removebg-preview.png";
import img3 from "../../assets/mission-target-icon-or-business-goal-logo-in-red-vector-31300409-removebg-preview.png";
import img4 from "../../assets/38-381805_design-is-creativity-with-strategy-logo-design-removebg-preview.png";
import "./about.css";
import Footer from "../../components/Footer";
const HomePage = ({ ...otherProps }) => {
  return (
    <div>
      <Videoa />
      <div className=" flex items-center justify-center">
        <div className="max-w-5xl">
          <div className="containerab">
            <header>
              <h3 class="text-lighter">Techno Metal Construction</h3>
              <h3 class="text-bold">Our TMC</h3>
              <p class="text-muted">
                Started in 1985 as a company dedicated to providing customers
                with real worldsolutions for their metal construction.
              </p>
            </header>

            <main>
              <div class="section2">
                <div class="card2 card-supervisor1">
                  <div class="card2-body">
                    <div class="cards2-title text-bold">
                      <span
                        style={{
                          color: "hsl(183deg 80% 38%)",
                          fontSize: "25px",
                        }}
                      >
                        Our Vision
                      </span>
                    </div>
                    <div class="card2-text text-muted">
                      Techno Metal Construction is to be number one in the field
                      of project management as also the top notch PEB
                      manufacturer in the country and make an impact in the
                      global market by bringing together the best of all
                      resources in man-power, design & engineering,
                      manufacturing and project management.
                      <br />
                      Metal Tech is to be recognized as a bench-mark in the
                      metal building industry and also EPC sector, and this is
                      to be achieved through product perfection, engineering
                      excellence, experienced and enthusaiastic team/management,
                      and best customer service/care in the industry.
                      <br />
                      Metal Tech is firmly committed to ensure total customer
                      satisfication through/by supplying products/services as
                      per customer requirement and timely delivery through
                      quality management systems.
                    </div>
                  </div>
                  <div class="card2-footer">
                    <div class="card2-img">
                      <img src={img2} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="section2">
                <div class="card2 card2-team_builder">
                  <div class="card2-body">
                    <div class="cards2-title text-bold">
                      <span
                        style={{
                          color: "hsl(239deg 37% 46%)",
                          fontSize: "25px",
                        }}
                      >
                        About Us
                      </span>
                    </div>
                    <div class="card2-text text-muted">
                      Founded in 1985, Techno Metal Construction TMC s.a.l.
                      (1985) is a lebanese leading company that has been
                      delivering a wide range of qaulity and innovative metal
                      work and steel building constuctions inside and outisde
                      Lebanon
                      <br />{" "}
                      <span style={{ fontWeight: "bold", color: "black" }}>
                        TMC team is specialist in all areas of metal work
                      </span>
                      <br />
                      With our metal work team and our specialized Machinery, we
                      are able to fabricate a wide range of advanced metal work.
                    </div>
                  </div>
                  <div class="card2-footer">
                    <div class="card2-img">
                      <img src={img1} />
                    </div>
                  </div>
                </div>

                <div class="card2 card-karmaa1">
                  <div class="card2-body">
                    <div class="cards2-title text-bold">
                      <span
                        style={{
                          color: "hsl(33deg 92% 54%)",
                          fontSize: "25px",
                        }}
                      >
                        Our Strategy
                      </span>
                    </div>
                    <div class="card2-text text-muted">
                      The reputation of our industry and credibility of TMC as a
                      reliable and trustworthy supplier has grown to depend
                      strongly on excellence in personal safety and asset
                      integrity, coupled to effective management of all the
                      business processes within the company, plant reliability
                      and dependable delivery of our products.
                      <br />
                      Acheiving top-quartile performance in these areas require
                      operational excellence, organizational effectiveness and
                      passionate adherence to best practices.
                    </div>
                  </div>
                  <div class="card2-footer">
                    <div class="card2-img">
                      <img src={img4} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="section2">
                <div class="card2 card2-calculator">
                  <div class="card2-body">
                    <div class="cards2-title text-bold">
                      <span
                        style={{
                          color: "hsl(0deg 100% 50%)",
                          fontSize: "25px",
                        }}
                      >
                        Our Mission
                      </span>
                    </div>
                    <div class="card2-text text-muted">
                      We take tremendous pride in our productivity standards,
                      workmanship, competitive pricing and personalized
                      relationship with our customers. Techno Metal Construction
                      looks forward to the opportunity of providing the
                      necessary fabrication on your future projects.
                    </div>
                  </div>
                  <div class="card2-footer">
                    <div class="card2-img">
                      <img src={img3} />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div class="max-w-md mt-24 mx-auto mb-14 text-center">
    <h1 class="text-4xl font-semibold mb-6 lg:text-5xl"><span class="text-indigo-600">Flexible</span> Plans</h1>
    <p class="text-xl text-gray-500 font-medium">Choose a plan that works best for you and your team.</p>
  </div>
      <div class="koko1  p-8 w-full flex flex-wrap bg-grey-light">
        
        <div class="koko2 h-16 border-8 w-full md:w-1/2 lg:w-1/5 bg-btn_yellow">
          {" "}
          <p>
            37 <br /> <span>Years</span>
          </p>
        </div>
        <div class="koko2 h-16 border-8 w-full md:w-1/2 lg:w-1/5  bg-btn_yellow">
          {" "}
          <p>
            2600 <br /> <span>Completed Project</span>
          </p>
        </div>
        <div class="koko2 h-16 border-8 w-full md:w-1/2 lg:w-1/5  bg-btn_yellow"> <p>
          120 <br/> <span>Trained Professionals</span> 
          </p></div>
        <div class="koko2 h-16 border-8 w-full md:w-1/2 lg:w-1/5  bg-btn_yellow"> <p>
          80 <br/> <span>Meter clear span</span> 
          </p></div>
        <div class="koko2 h-16 border-8 w-full md:w-1/2 lg:w-1/5  bg-btn_yellow"> <p style={{border:"none"}}>
          26 <br/> <span>Countries</span> 
          </p></div>
      </div>
 

      <Footer />
    </div>
  );
};

export default HomePage;
