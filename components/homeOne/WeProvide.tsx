import { teamMembers } from "@/constants/team";
import engineering from "@/public/images/engineeringHomeimg.jpg";
import ServiceCard from "@/ui/ServiceCard";
import Image from "next/image";
import Link from "next/link";


export default function WeProvide() {
  return (
    <div className="homeServices"> 
    <div className="container">
        <div className="row titleRow justify-content-center pb-4">
            <div className="col-md-10 text-center">
                <article className="position-relative aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">
                    <h2>Sectors</h2>
                    <h3>Innovation, transformation, and disruption since 2016</h3>
                    <p>Growth is incomplete without goodness. From building assets of national relevance to transforming lives through self-reliance and sustainability, our vision is balancing growth with goodness.</p>
                    <p><a href="sectors.php" className="link">View All <span className="icon-rightarrow icomoon"></span></a></p>
                </article>
            </div>
        </div>
    </div> 
    <div className="container-fluid pt-3 gx-1 ">
        <div className="row gx-1 gy-1">
            <div className="col-md-6 col-lg-5">
                <div className="serviceCol position-relative">
                    <a href="javascript:void(0)">
                    <Image
          src={engineering}
          alt="engineering"
          className="img-fluid w-100"
        />
                         <article className="position-absolute">
                            <h4 data-aos="fade-up" data-aos-duration="1000" className="text-uppercase fwhite fsbold position-relative aos-item aos-init">Civil Infra</h4>
                            <p className="fwhite aos-item">Deriving cost-effective, efficient, sustainable infrastructure solutions, Flow simulation &amp; conceptual design, Preparation of Detailed Designs &amp; Project Rreport</p>                               
                        </article>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-3">
                <div className="serviceCol position-relative">
                    <a href="javascript:void(0)">  <Image
          src={engineering}
          alt="engineering"
          className="img-fluid w-100"
        />
                        <article className="position-absolute">
                            <h4 className="text-uppercase fwhite fsbold position-relative aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Telecom Infra</h4>
                            <p className="fwhite">Deriving cost-effective, efficient, sustainable infrastructure s</p>
                        </article>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="serviceCol position-relative">
                    <a href="javascript:void(0)">  <Image
          src={engineering}
          alt="engineering"
          className="img-fluid w-100"
        />
                        <article className="position-absolute">
                            <h4 className="text-uppercase fwhite fsbold position-relative aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Industrial Infra</h4>
                            <p className="fwhite">Deriving cost-effective, efficient, sustainable infrastructure solutions, Flow simulation &amp; conceptual design, Preparation of Detailed Designs.</p>
                        </article>
                    </a>
                </div>
            </div>
            <div className="col-md-6 col-lg-6">
                <div className="serviceCol position-relative">
                    <a href="javascript:void(0)">  <Image
          src={engineering}
          alt="engineering"
          className="img-fluid w-100"
        />
                        <article className="position-absolute">
                            <h4 className="text-uppercase fwhite fsbold position-relative aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Power Energy</h4>
                            <p className="fwhite">Deriving cost-effective, efficient, sustainable infrastructure solutions, Flow simulation &amp; conceptual design, Preparation of Detailed Designs &amp; Project Rreport</p>
                        </article>
                    </a>
                </div>
            </div>
            <div className="col-md-12 col-lg-6">
                <div className="serviceCol position-relative">
                    <a href="healthCareSector.php">  <Image
          src={engineering}
          alt="engineering"
          className="img-fluid w-100"
        />
                        <article className="position-absolute">
                            <h4 className="text-uppercase fwhite fsbold position-relative aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Health Care</h4>
                            <p className="fwhite">Deriving cost-effective, efficient, sustainable infrastructure solutions, Flow Simulation &amp; conceptual design, Preparation of Detailed Designs &amp; Project Rreport</p>
                        </article>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
