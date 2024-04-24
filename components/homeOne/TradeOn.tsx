import coin from "@/public/images/coin.png";
import coinVector from "@/public/images/coin_vector.png";
import star2 from "@/public/images/star2.png";
import tradeOn from "@/public/images/trade_on.png";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function TradeOn() {
  return (
    <div className="homeSectors"> 
    <div className="container">
        <div className="row titleRow justify-content-center pb-4">
            <div className="col-md-10 text-center">
                <article className="position-relative">
                    <h2 className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">Services</h2>
                    <h3 className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">We help leaders and organizations reimagine value to stakeholders and transform with Engineering &amp; Design Services</h3>
                    <p className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">To serve with spirit and purpose that brings honour through innovation, prudence, persistent performance and to be the unparalleled provider of finest infrastructure development or organization by improving quality relentlessly</p>                       
                </article>
            </div>
        </div>
    </div>  
    <div className="container-fluid"> 
        <div className="sectorsSlider">    
                                    <div className="swiper-slide">
                    <span className="icon-engineeringdesign aos-item icomoon aos-init" data-aos="fade-up"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>                            
                    <h4 className="fsbold h4 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Engineering &amp; Design</h4>
                    <p className="aos-item aos-init" data-aos="fade-up">De3riving cost - effective, efficient, sustainable infrastructure solutions, Flow simulation &amp; Conceptual Design</p>
                    <a className="aos-item aos-init" data-aos="fade-up" href="engineeringDesign.php">Read More <span className="icon-rightarrow icomoon"></span></a>
                </div>
                                   <div className="swiper-slide">
                    <span className="icon-projectmanagement aos-item icomoon aos-init" data-aos="fade-up"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>                            
                    <h4 className="fsbold h4 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Project Management</h4>
                    <p className="aos-item aos-init" data-aos="fade-up">Project supervision and project implementation management and Quality and technical audit</p>
                    <a className="aos-item aos-init" data-aos="fade-up" href="javascript:void(0)">Read More <span className="icon-rightarrow icomoon"></span></a>
                </div>
                                   <div className="swiper-slide">
                    <span className="icon-advisoryconsultancy aos-item icomoon aos-init" data-aos="fade-up"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>                            
                    <h4 className="fsbold h4 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Advisory &amp; Consultancy</h4>
                    <p className="aos-item aos-init" data-aos="fade-up">Project technical auditing, contract documentation, Pre-Frasibility and Feasibility Studies</p>
                    <a className="aos-item aos-init" data-aos="fade-up" href="javascript:void(0)">Read More <span className="icon-rightarrow icomoon"></span></a>
                </div>
                                   <div className="swiper-slide">
                    <span className="icon-bidmanagement aos-item icomoon aos-init" data-aos="fade-up"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>                            
                    <h4 className="fsbold h4 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Bid Management</h4>
                    <p className="aos-item aos-init" data-aos="fade-up">Pre-Tender / Pre-bid Services, keeping track of latest projects, preparing competitive proposals</p>
                    <a className="aos-item aos-init" data-aos="fade-up" href="javascript:void(0)">Read More <span className="icon-rightarrow icomoon"></span></a>
                </div>
                                   <div className="swiper-slide">
                    <span className="icon-engineering-1 aos-item icomoon aos-init" data-aos="fade-up"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span>                            
                    <h4 className="fsbold h4 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Turn key Solutions</h4>
                    <p className="aos-item aos-init" data-aos="fade-up">Customized &amp; Integrated Infrastructure development solutions, end-to-end services from inception</p>
                    <a className="aos-item aos-init" data-aos="fade-up" href="javascript:void(0)">Read More <span className="icon-rightarrow icomoon"></span></a>
                </div>
                 
        </div>
    </div> 
</div>
  );
}
