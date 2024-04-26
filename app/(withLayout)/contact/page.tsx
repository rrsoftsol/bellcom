 


import about01 from "@/public/images/about01.jpg"; 
import chairman from "@/public/images/chairman.jpg"; 

import Image from "next/image";
export default function page() {
  return (
    <div className="subpage"> 
    <div className="subpageHeader">
        <div className="customContainer">
             <article className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">
                <h2 className="h5 text-uppercase fred fsbold">Contact</h2>
                <h1 className="fbold">Reach us</h1>
                <p>
                   Keep in touch with us
                </p>
            </article>
        </div>
    </div> 
    <div className="subpageBody"> 
        <div className="customContainer"> 
            <div className="row">
                <div className="col-md-6 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                    <article className="text-center">
                        <h3>Contact us</h3>
                        <p className="text-center">Our Marketing Support Team will get back to you once your query submitted</p>
                    </article>
                                            <form className="form" id="contact_form" action="" method="post">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group has-error">
                                    <input type="text" className="form-control" name="name" placeholder="Enter your Name*" aria-describedby="name-error" aria-invalid="true" />
                                <div id="name-error" className="text-danger d-none">Enter Name</div></div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group has-error">
                                    <input type="text" className="form-control" name="phone" placeholder="Contact Number*" aria-describedby="phone-error"/>
                                <div id="phone-error" className="text-danger d-none">Enter Valid Mobile Number (do not include +91)</div></div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group has-error">
                                    <input type="text" className="form-control" name="email" placeholder="Email Address*" aria-describedby="email-error"/>
                                <div id="email-error" className="text-danger d-none">Enter Valid Email</div></div>
                            </div>
                             <div className="col-md-12">
                                <div className="form-group">
                                   <textarea className="form-control" name="msg" placeholder="Write Message"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button className="btn link" name="submitContact">Submit Now <span className="icon-rightarrow icomoon"></span>
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
 
                <div className="col-md-6 addresscolParent align-self-center aos-item aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">
                    <div className="addresscol">
                        <h3>Contact Details</h3>
                        <p>For customer support and Query, Get in touch with us.</p>
                        <table>
                            <tbody><tr>
                                <td>
                                    <span className="icon-pin icomoon"></span>
                                </td>
                                <td>
                                    <h6 className="h5 fsbold text-uppercase">Bellcom infrastructure pvt ltd</h6>
                                    <p>102, Kamala Residency, 8-3-991, Srinagar Colony, Hyderabad, Telagana - 5000 073</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                   <span className="icon-call-1 icomoon"></span>
                                </td>
                                <td>
                                    <h6 className="h5 fsbold text-uppercase">Telephone</h6>
                                    <p>+(91) 986 629 6699,  +(91) 998 929 6699</p>
                                </td>
                            </tr>
                             <tr>
                                <td>
                                   <span className="icon-email icomoon"></span>
                                </td>
                                <td>
                                    <h6 className="h5 fsbold text-uppercase">Email</h6>
                                    <p className="pb-0 mb-0"><span className="fsbold">for General:</span> info@bellcom.in</p>
                                    <p><span className="fsbold">for Marketing:</span> marketing@bellcom.in</p>
                                </td>
                            </tr>
                        </tbody></table>
                    </div>
                </div> 
            </div> 
            <div className="row">
                <div className="col-md-12 map aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15220.162064645885!2d78.41834594999999!3d17.50557925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1622013108252!5m2!1sen!2sin" width="100%" height="450" style={{border:0}}  loading="lazy"></iframe>
                </div>
            </div> 
        </div>
    </div> 
</div>
  );
}
