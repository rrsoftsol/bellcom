 


import about01 from "@/public/images/about01.jpg"; 
import chairman from "@/public/images/chairman.jpg"; 
import Head from "next/head";

import Image from "next/image";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Bellcome',
}
export default function page() {
  return (
    <div className="subpage"> 
      
        <div className="subpageHeader">
            <div className="customContainer">
                 <article className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">
                    <h2 className="h5 text-uppercase fred fsbold">Welcome to Bellcom</h2>
                    <h1 className="fbold">We shall stand by our promises</h1>
                    <p className="flight">Bellcom has the distinction of being listed as ‘A Grade&apos; contractor</p>
                </article>
            </div>
        </div> 
        <div className="subpageBody"> 
            <div className="customContainer"> 
                <div className="row">
                    <div className="col-md-6 align-self-cente aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                    <Image
          src={about01}
          alt="about"
          className="img-fluid w-100 radiusImg"
        /> 
                     </div>
                    <div className="col-md-6 align-self-center aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                        <h5>Where we &apos;ve Been</h5>
                        <h3>Company Profile</h3>
                        <p>The importance of firm infrastructure for sustained economic growth and development is well recognized in India. Morgan Stanley, the global leader in financial services reports that India would become $5 trillion economy by 2025 and major impact will be seen in the areas of trade and infrastructure. At BELLCOM, infrastructure segment has gained momentum in the last few years and is experiencing a rapid growth across different sectors of infrastructure. The dynamics of this segment is entirely diversified from that of conventional projects across all the sectors.</p>

                        <p>It needs requisite experience and a proven track record to meet such stringent constraints. BELLCOM&apos;s forte lies in it&apos;s a) Skilled, Highly experienced &amp; Qualified team b) Modern Equipment and Technology c) Relentless determination to deliver to-notch quality d) Strong Risk Management e) Adherence to timelines and delivery schedules d) Unwavering Commitment to its clients and Environment.</p>

                        <p>We thankfully enjoy the unstinted support, trust and goodwill of our clients and they are our best brand ambassadors.  Led by a well experienced and professional team, BELLCOM was established on the pillars of quality.</p>
                        <p className="text-uppercase fbold lspacing aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">15 YEARS IN <span className="flight">BUSINESS</span></p>
                        <p className="text-uppercase fbold lspacing aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">1400+ PROJECTS <span className="flight">COMPLETED</span></p>
                        <p className="text-uppercase fbold lspacing aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">400+ CLIENTS <span className="flight">SERVED</span></p>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-6 align-self-center order-md-last">
                    <Image
          src={about01}
          alt="about"
          className="img-fluid w-100 radiusImg"
        /> 
                       </div>
                    <div className="col-md-6 align-self-center aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                        <p>We the team at BELLCOM are committed to comply with the pre-requisites, project standards, safety standards and we seamlessly improvise the effectiveness of our quality management system.</p>
                        <h5>OUR COMMITMENT</h5>
                        <h3>Mission</h3>
                        <p>Achieve excellence &amp; portray brilliance in every facet to meet our clients&apos; meticulous needs with regard to quality, on-time delivery, safety and environmental concerns.</p>

                        <h3>Our Vision</h3>
                        <p>To serve with spirit and purpose that brings honour through innovation, prudence, persistent performance and to be the unparalleled provider of finest infrastructure development organization by improving quality relentlessly.</p>

                        <h3>Philosophy</h3>
                        <p>A successful society is characterized by rising living standard, infrastructure and incessant development by generating new discoveries in science and technology</p>
                    </div>
                </div> 
                <div className="row teamRow">
                    <div className="col-md-12">
                         <h5 className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Team</h5>
                        <h3 className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Leadership Board</h3>
                    </div> 
                                        <div className="col-md-3 col-sm-6">
                        <div className="teamCol aos-item aos-init" data-aos="fade-up" data-aos-duration="1000"> 
                            <a href="team-padma.php">
                            <Image
          src={chairman}
          alt="about"
          className="img-fluid w-100"
        /> 
                             </a>
                            <article className="p-3 m-0 mx-auto text-center">
                                <h4 className="h6 fsbold text-uppercase">DR. PADMA VEERAPANENI</h4>
                                <p className="text-center p-0 m-0">Designation</p>
                            </article>
                        </div>
                    </div>
                                       <div className="col-md-3 col-sm-6">
                        <div className="teamCol aos-item aos-init" data-aos="fade-up" data-aos-duration="1000"> 
                            <a href="javascript:void(0).php">
                            <Image
          src={chairman}
          alt="about"
          className="img-fluid w-100"
        /> 
                            </a>
                            <article className="p-3 m-0 mx-auto text-center">
                                <h4 className="h6 fsbold text-uppercase">TEAM Name will be here</h4>
                                <p className="text-center p-0 m-0">Designation</p>
                            </article>
                        </div>
                    </div>
                                       <div className="col-md-3 col-sm-6">
                        <div className="teamCol aos-item aos-init" data-aos="fade-up" data-aos-duration="1000"> 
                            <a href="javascript:void(0).php">
                            <Image
          src={chairman}
          alt="about"
          className="img-fluid w-100"
        /> 
                            </a>
                            <article className="p-3 m-0 mx-auto text-center">
                                <h4 className="h6 fsbold text-uppercase">TEAM Name will be here</h4>
                                <p className="text-center p-0 m-0">Designation</p>
                            </article>
                        </div>
                    </div>
                                       <div className="col-md-3 col-sm-6">
                        <div className="teamCol aos-item aos-init" data-aos="fade-up" data-aos-duration="1000"> 
                            <a href="javascript:void(0).php">
                            <Image
          src={chairman}
          alt="about"
          className="img-fluid w-100"
        /> 
                            </a>
                            <article className="p-3 m-0 mx-auto text-center">
                                <h4 className="h6 fsbold text-uppercase">TEAM Name will be here</h4>
                                <p className="text-center p-0 m-0">Designation</p>
                            </article>
                        </div>
                    </div>             
                </div> 
            </div> 

            <div className="bluebg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                            <h4 className="h4 flight">Values define us. Our values guide us in creating a better experience for our clients or for that matter, anyone who comes into contact with us.</h4>
                        </div>
                        <div className="col-md-6 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                           <ul className="listItems">
                               <li><span className="fsbold">Integrity: </span>Always doing the right thing matters to us. We take pride in being honest</li>
                                <li><span className="fsbold">Professional Competence: </span>Competence is at the heart of performing exceedingly well</li>
                                 <li><span className="fsbold">Customer Empathy: </span>We value others; both employees and customers. We feel the way they do</li>
                                  <li><span className="fsbold">Punctuality: </span>Showing up on time matters; and we encourage this behavior</li>
                                   <li><span className="fsbold">Respect for Individual: </span>We value diversity and difference. For us, this is something to be celebrated</li>
                           </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

    </div>
  );
}
