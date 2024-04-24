import { footerLinks } from "@/constants/menu";
import star2 from "@/public/images/star2.png";
import starFocus from "@/public/images/star_focus.png";
import vector from "@/public/images/vector.png";
import vector4 from "@/public/images/vector4.png";
import SocialIcons from "@/ui/SocialIcons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
    <div className="topfooter">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul>                            
                        <li><a href="about.php">About us</a></li>
                        <li><a href="careers.php">Careers</a></li>
                        <li><a href="blog.php">Blog</a></li>
                        <li><a href="contact.php">Contact</a></li>                            
                    </ul>                        
                </div>
                <div className="col-md-2">                       
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="projects.php">Projects</a></li>                           
                        <li><a href="sectors.php">Sectors</a></li>
                        <li><a href="divisions.php">Divisions</a></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><a href="engineeringDesign.php">Engineering &amp; Design</a></li>
                        <li><a href="javascript:void(0)">Project Management</a></li>
                        <li><a href="javascript:void(0)">Advisory &amp; Consultancy</a></li>
                        <li><a href="javascript:void(0)">Bid Management</a></li>
                        <li><a href="javascript:void(0)">Turn Key Solutions</a></li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <p>102, Kamala Residency, 8-3-991, Srinagar Colony, Hyderabad, Telangana - 500 073, INDIA</p>
                    <p>Toll Free: 1800 102 8586</p>
                    <p>Mail: contact@bellcom.com</p>
                    <p>Contact: +91 9866296699</p>
                    <ul className="d-flex footerSocial pt-3">
                        <li>
                            <a href="javascript:void(0)" target="_blank"><span className="icon-facebook"></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" target="_blank"><span className="icon-twitter"></span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" target="_blank"><span className="icon-linkedin"></span></a>
                        </li>
                    </ul>
                </div>    
             
            </div>
        </div>
    </div>

    <div className="bottomFooter text-center">
        <p>All copy rights Reserved @bellcom India Pvt Ltd 2021</p>
    </div>
      <a id="movetop" className="movetop" href="javascript:void(0)"><i className="bi bi-arrow-up-short icomoon"></i></a>
</footer>
  );
}
