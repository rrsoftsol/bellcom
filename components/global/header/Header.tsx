"use client";
import { headerMenu, topMenu } from "@/constants/menu";
import useScroll from "@/hooks/useScroll";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scroll } = useScroll();
  const path = usePathname();
  const isHomePage = path === "/";

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
      <header  className={`bsnav-sticky bsnav-sticky-slide ${scroll ? " sticked in fixed-top" : ""}`}  >
        <div className="customContainer">
          <div className="navbar navbar-expand-md bsnav">
            <a className="navbar-brand" href="/">
              <Image src={logo} className="logo" alt="logo" />
            </a>
            <button
              className={`navbar-toggler toggler-spin ${open ? "active" : ""}`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end align-items-end">
              <ul className="navbar-nav navbar-mobile mr-0 topnav">
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/careers">
                    Careers
                  </a>
                </li>

                <li className="nav-item socialNav">
                  <a href="/" target="_blank" className="socialIcon">
                    <span className="icon-facebook icomoon"></span>
                  </a>
                  <a href="/" target="_blank" className="socialIcon">
                    <span className="icon-linkedin icomoon"></span>
                  </a>
                  <a href="/" target="_blank" className="socialIcon">
                    <span className="icon-twitter icomoon"></span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav navbar-mobile mr-0 bottomNav">
                <li className="nav-item">
                  <a className="nav-link" href="//">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item dropdown megamenu fadeup">
                  <a className="nav-link" href="/#">
                    Services <i className="caret"></i>
                  </a>
                  <div className="navbar-nav">
                    <div className="container">
                      <div className="row mb-3 g-0">
                        <div className="col-md-6">
                          <a className="navsubItem" href="/services">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Engineering &amp; Design
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/services">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Project Management
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/services">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Advisory &amp; Consultancy
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/services">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Bid Management
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/services">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Turn key Solutions
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown megamenu fadeup">
                  <a className="nav-link" href="/sectors">
                    Sectors <i className="caret"></i>
                  </a>
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
                            <span className="navsubItemname">
                              Industrial Infra
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Power &amp; Energy
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/sectors/healthcare">
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
                            <span className="navsubItemname">
                              Mining &amp; metallurgical Engineering
                            </span>
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a className="navsubItem" href="/">
                            <i className="bi bi-arrow-right-short"></i>
                            <span className="navsubItemname">
                              Engineering Services
                            </span>
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
                            <span className="navsubItemname">
                              Geo-Spacial Solutions
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <MobileMenu open={open} setOpen={setOpen} />
        </div>
      </header>
    </>
  );
}
