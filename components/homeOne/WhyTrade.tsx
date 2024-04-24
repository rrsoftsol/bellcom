import chairman from "@/public/images/chairman.jpg"; 
import blog01 from "@/public/images/blog01.jpg";
import blog03 from "@/public/images/blog03.jpg"; 
import Image from "next/image";
import Link from "next/link";

export default function WhyTrade() {
  return (
    <div className="blogSection">
    <div className="blogSectiontitle"> 
        <div className="container">
            <div className="row titleRow justify-content-center pb-4">
                <div className="col-md-10 text-center">
                    <article className="position-relative">
                        <h2>News</h2>
                        <h3 className="aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">Dispatches from the front lines</h3>
                        <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">We believe that true impact comes from defining changes that empower communities, propel growth and infuse goodness.</p>                               
                    </article>
                </div>
            </div>
        </div> 
    </div> 
    <div className="blogItems">
        <div className="container">
             <div className="row gx-0"> 
                 <div className="col-lg-6">
                     <div className="blogItemcol">
                     <Image
          src={chairman}
          alt="engineering"
          className="img-fluid w-100"
        /> 
                         <div className="firstBlogCol">
                             <span className="blogLabel">Chairman Words</span>
                             <h4 className="h5 fwhite fsbold py-3 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Dr. Padma Veerapaneni</h4>
                             <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Dr. Padma Veerapaneni is one of the most admired Doctors in the domain of Neuro Science at National Level. She is the  receipient of numerous awards ...</p>
                             <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                                 <a href="javascript:void(0)">Read More <span className="icon-rightarrow icomoon"></span></a>
                             </p>
                         </div>
                     </div>
                 </div> 
                 <div className="col-lg-6">
                     <div className="row gx-0"> 
                         <div className="col-lg-6">
                             <div className="blogRtcol">
                                 <a href="javascript:void(0)"> <Image
          src={blog01}
          alt="engineering"
          className="img-fluid w-100"
        />
                                 </a>
                                 <article className="text-start">
                                    <span className="blogLabel">Article</span>
                                    <h5 className="h5 fsbold py-3 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Bellcom Gold at 2021 Infrastcture Excellence Award</h5>
                                    <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">In this article, we outline how businesses can reap the powerful benefits</p>
                                    <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                                        <a href="javascript:void(0)" className="blogLink">Read More <span className="icon-rightarrow icomoon"></span></a>
                                    </p>
                                 </article>
                             </div>
                         </div> 
                        <div className="col-lg-6">
                            <div className="blogRtcol">                                    
                                <article className="text-start">
                                    <span className="blogLabel">Article</span>
                                    <h5 className="h5 fsbold py-3 aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">Japan Gets Ready to Fund Large Infrastructure Projects in the US</h5>
                                    <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">In this article, we outline how businesses can reap the powerful benefits</p>
                                    <p className="aos-item aos-init" data-aos="fade-up" data-aos-duration="1000">
                                        <a href="javascript:void(0)" className="blogLink">Read More <span className="icon-rightarrow icomoon"></span></a>
                                    </p>
                                </article>
                                <a href="javascript:void(0)">
                                <Image
          src={blog03}
          alt="engineering"
          className="img-fluid w-100"
        />
                                </a>
                            </div>
                        </div> 
                     </div>
                 </div> 
             </div>
        </div>
    </div> 
</div>
  );
}
