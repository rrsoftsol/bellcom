import { v4 as uuidv4 } from "uuid";

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
  export const topMenu: MenuItem[] = [
   
    {
      id: uuidv4(),
      name: "About us",
      isSubmenu: false,
      icon: "ri-home-3-line",
      link: "/buy-forex" 
      
    },
    {
      id: uuidv4(),
      name: "Careers",
      isSubmenu: false,
      icon: "ri-home-3-line",
      link: "/sell-forex"     
    },
    {
      id: uuidv4(),
      name: "News Room",
      isSubmenu: false,
      icon: "ri-home-3-line",
      link: "/remittances" 
    },
    
    {
      id: uuidv4(),
      name: "Contact",
      isSubmenu: false,
      icon: "ri-home-3-line",    
      link: "/contact",
    } ,
    
    {
      id: uuidv4(),
      name: "Awards",
      isSubmenu: false,
      icon: "ri-home-3-line",    
      link: "/contact",
    } 
    
  ];
export const headerMenu: MenuItem[] = [
   
  {
    id: uuidv4(),
    name: "Company",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/buy-forex" 
    
  },
  {
    id: uuidv4(),
    name: "Projects",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/sell-forex"     
  },
  {
    id: uuidv4(),
    name: "Services",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/remittances" 
  },
  {
    id: uuidv4(),
    name: "business",
    isSubmenu: false,
    icon: "ri-home-3-line",
    link: "/membership-services" 
  },
  {
    id: uuidv4(),
    name: "Careers",
    isSubmenu: false,
    link: "/about",
    icon: "ri-home-3-line",
    
  },{
    id: uuidv4(),
    name: "Industries",
    isSubmenu: false,
    icon: "ri-home-3-line",    
    link: "/contact",
  } 
  
];

export const footerLinks = [
  {
    id: uuidv4(),
    title: "Quick Links",
    links: [
      {
        id: uuidv4(),
        name: "Home",
        link: "/",
      },
      {
        id: uuidv4(),
        name: "About us",
        link: "/about",
      },
      {
        id: uuidv4(),
        name: "Services",
        link: "/services",
      } 
    ],
  },
  {
    id: uuidv4(),
    title: "Company",
    links: [
      {
        id: uuidv4(),
        name: "Enquiry",
        link: "/about",
      },
      {
        id: uuidv4(),
        name: "Contact",
        link: "/contact",
      },
      {
        id: uuidv4(),
        name: "FAQ",
        link: "/faq",
      },
    ],
  },
   
];
