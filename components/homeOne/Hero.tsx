"use client";
// Import Swiper styles
import "swiper/css";
// @ts-ignore
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import { testimonial } from "@/constants/testimonial";
import quoteLeft from "@/public/images/icon/quote_left.png";
import slider1 from "@/public/images/slider01.jpg";
import slider2 from "@/public/images/slider02.jpg";
import sun from "@/public/images/sun.png";
import vector2 from "@/public/images/vector2.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="homeSlider">
    <div className="slideshow">
                    <div className="slide slide--current">               
            <div className="slide__img-wrap">
                <div className="slide__img" style={{backgroundImage: `url(${slider1.src})`}}></div>
                <div className="slide__img-reveal"></div>
            </div>
            <span className="slide__number">#01</span>
            <div className="slide__title">
                <h3 className="fbold">Leader of Trending Infrastructure</h3>
                <p className="flight">The importance of firm infrastructure for sustained economic growth and development is well recognized in India</p>
            </div>              
        </div>            
                    <div className="slide">               
            <div className="slide__img-wrap">
                <div className="slide__img" style={{backgroundImage: `url(${slider2.src})`}}></div>
                <div className="slide__img-reveal"></div>
            </div>
            <span className="slide__number">#02</span>
            <div className="slide__title">
                <h3 className="fbold">We top at Civil Infrastructure</h3>
                <p className="flight">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi?</p>
            </div>              
        </div>            
                    <div className="slide">               
            <div className="slide__img-wrap">
                <div className="slide__img" style={{backgroundImage: `url(${slider1.src})`}}></div>
                <div className="slide__img-reveal"></div>
            </div>
            <span className="slide__number">#03</span>
            <div className="slide__title">
                <h3 className="fbold">We handle Govt Projects</h3>
                <p className="flight">The importance of firm infrastructure for sustained economic growth and development is well recognized in India</p>
            </div>              
        </div>            
                    <div className="slide">               
            <div className="slide__img-wrap">
                <div className="slide__img" style={{backgroundImage: `url(${slider2.src})`}}></div>
                <div className="slide__img-reveal"></div>
            </div>
            <span className="slide__number">#04</span>
            <div className="slide__title">
                <h3 className="fbold">Leader of Trending Infrastructure</h3>
                <p className="flight">The importance of firm infrastructure for sustained economic growth and development is well recognized in India</p>
            </div>              
        </div>            
                  
        <nav className="slidenav">
            <button className="slidenav__item slidenav__item--prev"><span className="icon-leftarrow icomoon"></span></button>
            <button className="slidenav__item slidenav__item--next"><span className="icon-rightarrow icomoon"></span></button>               
        </nav>
    </div>
</div>
  );
}
