"use client";
import { useState } from "react";

import recog01 from "@/public/images/recog01.png";
import recog02 from "@/public/images/recog02.png";
import recog03 from "@/public/images/recog03.png";
import Image from "next/image";
import PeopleTrustTabItem from "../shared/PeopleTrustTabItem";

const tabButton = ["Test Your Knowledge", "Tutorial Videos", "Live Commentary"];

export default function PeopleTrustUs() {
  const [active, setActive] = useState("test-your-knowledge");
  return (
    <div className="homerecog"> 
        <div className="container">
            <div className="row titleRow justify-content-center pb-4">
                <div className="col-md-10 text-center">
                    <article className="position-relative">
                        <h2 className="aos-item" data-aos-duration="1000">Awards</h2>
                        <h3 className="aos-item aos-init aos-animate" data-aos="zoom-out" data-aos-duration="1000">Industry Recognition</h3>
                        <p className="aos-item aos-init" data-aos="zoom-out" data-aos-duration="1000">Awards are an indicator of acceptance for your efforts. Experion takes pride in the fact that laurels have reached us throughout our existence as a company. We have won awards for our solutions, our growth model and for our service levels. Top ratings and industry recognition are second nature for us.</p>                       
                    </article>
                </div>
            </div> 
            <div className="row pt-4 gx-2">
                <div className="col-sm-4">
                    <div className="recogDiv">
                    <Image
          src={recog01}
          alt="engineering"
          className="img-fluid w-100"
        /> 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="recogDiv"><Image
          src={recog02}
          alt="engineering"
          className="img-fluid w-100"
        />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="recogDiv"><Image
          src={recog03}
          alt="engineering"
          className="img-fluid w-100"
        />
                    </div>
                </div>
            </div> 
        </div> 
    </div>
  );
}
