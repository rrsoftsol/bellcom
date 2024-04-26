import { headerMenu } from "@/constants/menu";
import useToggle from "@/hooks/useToggle";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

export default function MobileMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {

  
  const [serviceOpen, setServiceOpen] = useState(false);
  const [sectorsOpen, setSectorOpen] = useState(false);

  const path = usePathname();
  const isHomePage = path === "/";
  const { toggle, handleToggle } = useToggle();

  //active menu link color

  interface MenuItem {
    id: string;
    name: string;
    isSubmenu: boolean;
    icon: string;
    link?: string; // Link is optional for parent menu items
    submenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
  }

  interface SubMenuItem {
    id: string;
    name: string;
    link: string;
  }
  const isMenuActive = (menu: MenuItem) => {
    if (menu.isSubmenu && menu.submenu) {
      return menu.submenu.some((submenu: SubMenuItem) => path === submenu.link);
    }
    return path === menu.link;
  };
  return (
    <>
      <div  className={`bsnav-mobile ${
          open ? "in" : ""
        }`}>
                <div className="bsnav-mobile-overlay"></div>
                <div className="navbar"><ul className="navbar-nav navbar-mobile mr-0 topnav">                       
                        <li className="nav-item"><a className="active" href="/about">About us</a></li>
                        <li className="nav-item"><a className="nav-link" href="/careers">Careers</a></li>                        
                                             
                        <li className="nav-item socialNav">
                            <a href="/" target="_blank" className="socialIcon"><span className="icon-facebook icomoon"></span></a>
                            <a href="/" target="_blank" className="socialIcon"><span className="icon-linkedin icomoon"></span></a>
                            <a href="/" target="_blank" className="socialIcon"><span className="icon-twitter icomoon"></span></a>
                        </li>
                    </ul><ul className="navbar-nav navbar-mobile mr-0 bottomNav">
                        <li className="nav-item"><a className="nav-link" href="/index">Home</a></li>                        
                        <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                        <li   className={`nav-item megamenu fadeup ${serviceOpen ? "active" : ""}`} onClick={() => setServiceOpen((prev) => !prev)}>
                          <a className="nav-link">Services <i className="caret"></i></a>                          
                            <div className="navbar-nav"  >
                                 <div className="container">                                  
                                    <div className="row mb-3 g-0">
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/services">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Engineering &amp; Design</span>
                                            </a>
                                        </div>  
                                         <div className="col-md-6">
                                           <a className="navsubItem" href="/services">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Project Management</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/services">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Advisory &amp; Consultancy</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/services">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Bid Management</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/services">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Turn key Solutions</span>
                                            </a>
                                        </div>
                                                                             
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li   className={`nav-item megamenu fadeup ${sectorsOpen ? "active" : ""}`}
                         onClick={() => setSectorOpen((prev) => !prev)}><a className="nav-link" >Sectors <i className="caret"></i></a>
                            <div className="navbar-nav">
                                 <div className="container">                                  
                                    <div className="row mb-3 g-0">
                                     <div className="col-md-6">                                          
                                           <a className="navsubItem" href="/sectors">
                                              <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">All Sectors</span>
                                            </a>
                                        </div>  
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                                <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Civil Infra</span>
                                            </a>
                                        </div>  
                                         <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Industrial Infra</span>
                                            </a>
                                        </div>
                                         <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Power &amp; Energy</span>
                                            </a>
                                        </div>
                                         <div className="col-md-6">
                                           <a className="navsubItem" href="/healthCareSector">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Health Care</span>
                                            </a>
                                        </div>
                                         <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Logistics</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Chemicals</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                                <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Defense</span>
                                            </a>
                                        </div>   
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Mining &amp; metallurgical Engineering</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Engineering Services</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Environment</span>
                                            </a>
                                        </div>
                                        <div className="col-md-6">
                                           <a className="navsubItem" href="/">
                                               <i className="bi bi-arrow-right-short"></i>
                                               <span className="navsubItemname">Geo-Spacial Solutions</span>
                                            </a>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                        </li>                        
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li> 
                    </ul></div>
            </div>
    </>
  );
}
