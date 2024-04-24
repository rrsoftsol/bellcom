import engineringdesign01 from "@/public/images/engineringdesign01.jpg";

import engineering01 from "@/public/images/engineering01.jpg";
import engineering02 from "@/public/images/engineering02.jpg";
import engineering03 from "@/public/images/engineering03.jpg";
import engineering04 from "@/public/images/engineering04.jpg";

import chairman from "@/public/images/chairman.jpg";

import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="subpage">
        <div className="subpageHeader">
          <div className="customContainer">
            <article
              className="aos-item aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <h2 className="h5 text-uppercase fred fsbold">Service</h2>
              <h1 className="fbold">Engineering &amp; Design</h1>
              <p className="flight">
                Growth is incomplete without goodness. From building assets of
                national relevance to transforming lives through self-reliance
                and sustainability.
              </p>
            </article>
          </div>
        </div>
        <div className="subpageBody">
          <div className="customContainer">
            <div className="row">
              <div className="col-md-6 align-self-center align-self-center order-lg-last">
                {" "}
                <Image
                  src={engineringdesign01}
                  alt="about"
                  className="img-fluid w-100 radiusImg"
                />
              </div>
              <div className="col-md-6 align-self-center">
                <h3
                  className="pb-4 aos-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Engineering Services
                </h3>
                <p
                  className="aos-item aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Customers across diverse industries turn to Cyient to solve
                  complex engineering challenges. From helping to design a
                  new-generation aircraft engine that delivers game-changing
                  environmental performance, to contributing a quarter of the
                  rolling stock engineering effort for a flagship rail program,
                  to developing a 100-ton cross-terrain truck crane for market
                  in record time, we share our customers&apos; passion for
                  engineering excellence.
                </p>

                <p
                  className="pb-0 aos-item aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  We have an engineering DNA and are problem solvers by nature.
                  We apply our domain and technical expertise to help customers
                  design, build and maintain world-className products.
                </p>

                <ul
                  className="listItems aos-item aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <li>System Engineering</li>
                  <li>Mechanical Engineering</li>
                  <li>Embedded Software Electronics</li>
                  <li>Electrical Engineering</li>
                  <li>Plant Engineering</li>
                  <li>Manufacturing Engineering</li>
                  <li>Network Engineering</li>
                  <li>Field Engineering</li>
                </ul>
                <p
                  className="listItems aos-item aos-init"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Customers across diverse industries turn to Cyient to solve
                  complex engineering challenges. From helping to design a
                  new-generation aircraft engine that delivers game-changing
                  environmental performance, to contributing a quarter of the
                  rolling stock engineering effort for a flagship rail program,
                  to developing a 100-ton cross-terrain truck crane for market
                  in record time, we share our customers&apos; passion for
                  engineering excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="redbox">
            <div className="container">
              <div className="row">
                <div className="col-md-4 align-self-center">
                  <ul
                    className="leftList aos-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <li>Product Requirement capture</li>
                    <li>Configuration studies</li>
                    <li>Concept Design</li>
                    <li>System and sub-systems modeling</li>
                    <li>System and sub-systems modeling</li>
                  </ul>
                </div>
                <div className="col-md-4 text-cewnter">
                  <div className="iconDiv">
                    <span className="icon-engineering-1 icomoon"></span>
                  </div>
                </div>
                <div className="col-md-4 align-self-center">
                  <ul
                    className="rightList aos-item aos-init"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <li>Performance Simulation</li>
                    <li>
                      System and sub-systems verification &amp; validation
                    </li>
                    <li>Compliance and cerification</li>
                    <li>
                      System and sub-systems verification &amp; validation
                    </li>
                    <li>Compliance and cerification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="customContainer">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="articleCol">
                  <Image
                    src={engineering01}
                    alt="about"
                    className="img-fluid w-100"
                  />
                  <article className="position-absolute">
                    <h6
                      className="aos-item aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Collaborating on the design of a game-changing aircraft
                      engine
                    </h6>
                  </article>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="articleCol">
                  <Image
                    src={engineering02}
                    alt="about"
                    className="img-fluid w-100"
                  />
                  <article className="position-absolute">
                    <h6
                      className="aos-item aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Helping a global mobility solution provider deliver the
                      Elizabeth Line
                    </h6>
                  </article>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="articleCol">
                  <Image
                    src={engineering03}
                    alt="about"
                    className="img-fluid w-100"
                  />{" "}
                  <article className="position-absolute">
                    <h6
                      className="aos-item aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Designing a protein analyzer for emerging markets
                    </h6>
                  </article>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="articleCol">
                  <Image
                    src={engineering04}
                    alt="about"
                    className="img-fluid w-100"
                  />
                  <article className="position-absolute">
                    <h6
                      className="aos-item aos-init"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      Helping an off-highway equipment manufacturer accelerate
                      product development
                    </h6>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
