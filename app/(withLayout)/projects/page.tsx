 


import building01 from "@/public/images/building01.jpg"; 
import chairman from "@/public/images/chairman.jpg"; 

import Image from "next/image"; 
export default function page() {
  return (
    <>
    <div className="subpage"> 
    <div className="subpageHeader">
        <div className="customContainer">
            <article className="aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                <h2 className="h5 text-uppercase fred fsbold">Projects</h2>
                <h1 className="fbold">Our Successful Projects</h1>
                <p className="flight">We are a diversified infrastructure development Company with an annual turnover of Rs.1,200 crores. Headquartered at New Delhi. We have offices spread across 14 states all over the country.</p>
            </article>
        </div>
    </div> 
    <div className="subpageBody"> 
        <div className="customContainer">
            <div id="parentVerticalTab" className="projectsTab resp-vtabs hor_1" style={{display: 'block', width: '100%', margin: '0px'}}>
                <ul className="resp-tabs-list hor_1" style={{marginTop: '3px'}}>
                    <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-0" role="tab" style={{backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>
                        <div className="projectltItem d-flex">
                            <div className="projecItemDesc">
                                <h2><span className="icon-building icomoon"></span>Buildings</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="projectCount align-self-center">
                                15
                            </div>
                        </div>
                    </li>
                    <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-1" role="tab" style={{backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>
                        <div className="projectltItem d-flex">
                            <div className="projecItemDesc">
                                <h2><span className="icon-building icomoon"></span>BRIDGES</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="projectCount align-self-center">
                                07
                            </div>
                        </div>
                    </li>
                      <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-2" role="tab" style={{backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>
                        <div className="projectltItem d-flex">
                            <div className="projecItemDesc">
                                <h2><span className="icon-building icomoon"></span>GOVT ROADS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="projectCount align-self-center">
                                14
                            </div>
                        </div>
                    </li>
                     <li className="resp-tab-item hor_1 resp-tab-active" aria-controls="hor_1_tab_item-3" role="tab" style={{backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>
                        <div className="projectltItem d-flex">
                            <div className="projecItemDesc">
                                <h2><span className="icon-building icomoon"></span>POWER UNITS</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="projectCount align-self-center">
                                12
                            </div>
                        </div>
                    </li> 
                </ul>
                <div className="resp-tabs-container hor_1 "> 
                    <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-0" 
                    ><span className="resp-arrow"></span>
                        <div className="projectltItem d-flex">
                            <div className="projecItemDesc">
                                <h2><span className="icon-building icomoon"></span>Buildings</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable.</p>
                            </div>
                            <div className="projectCount align-self-center">
                                15
                            </div>
                        </div>
                    </h2>
                    
                    <div className="resp-tab-content hor_1 d-block" aria-labelledby="hor_1_tab_item-0">                           
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-warning text-dark position-absolute">On going</span>
                                    <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      
                                      <div className="card-body">
                                        <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyd erabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-success position-absolute">Completed</span>  <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      <div className="card-body">
                                        <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyderabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-success position-absolute">Completed</span>  <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      <div className="card-body">
                                        <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyderabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-success position-absolute">Completed</span>  <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      <div className="card-body">
                                        <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyderabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-success position-absolute">Completed</span>  <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      <div className="card-body">
                                       <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyderabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6">
                                <div className="card projectCard position-relative">
                                    <span className="badge bg-success position-absolute">Completed</span>  <Image
          src={building01}
          alt="about"
          className="img-fluidcard-img-top"
        /> 
                                      <div className="card-body">
                                        <h6 className="card-title aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Project Name will be here</h6>
                                        <p className="card-text aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000"><span>Hyderabad</span><span>Year:2020</span><span>Commercial Building</span></p>                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div> 
    </div> 
</div>
</>
  );
}
