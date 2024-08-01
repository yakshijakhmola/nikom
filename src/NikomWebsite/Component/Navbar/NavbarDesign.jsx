import React, { useState, useEffect } from 'react';
import './NavbarDesign.css'; // Make sure to create and import the corresponding CSS file
import { assets } from '../../../assets/assets';
import { useNavigate } from 'react-router-dom';

const NavbarDesign = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("")
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [menuTitle, setMenuTitle] = useState('');
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (menu) => {
    console.log({menu})
    // const subMenu = hasChildren.querySelector('.menu-subs');
    // setSubMenu(subMenu);
    // const title = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    // setMenuTitle(title);
    setSubMenuActive(true);
    setActiveMenu(menu)
  };

  const hideSubMenu = () => {
    setSubMenuActive(false);
    setMenuTitle('');
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`}>
      <div className="container-fluid">
        <div className="wrapper">
          <div className="header-item-left">
            <a onClick={()=>navigate('/')} className="brand">
              <img src={assets.Logo} alt="NikomLogo" />
              </a>
          </div>
          <div className="header-item-center">
            <div className={`overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? 'active' : ''}`}>
              <div className="menu-mobile-header active">
                {subMenuActive && <button type="button" className="menu-mobile-arrow" onClick={hideSubMenu}><i className="fa-solid fa-arrow-rotate-left"></i></button>}
                <div className="menu-mobile-title">{menuTitle}</div>
                <button type="button" className="menu-mobile-close" onClick={toggleMenu}><i className="fa-solid fa-xmark"></i></button>
              </div>
              <ul className="menu-section">
                <li><a onClick={()=>navigate('/')}>Home</a></li> 
                <li className="menu-item-has-children">
                  <a onClick={()=>showSubMenu("about")}>About <i className="fa-solid fa-chevron-down"></i></a>
                  {activeMenu === "about" && <div className={`menu-subs menu-column-1 ${subMenuActive ? 'active' : ''}`}>
                    <ul>
                      <li><a onClick={()=>navigate('/about')}>Company About</a></li>
                      <li><a onClick={()=>navigate('/awards-and-certificate')}>Awards & Certificate</a></li>
                      <li><a onClick={()=>navigate('/leadership')}>Leadership</a></li>
                      <li><a onClick={()=>navigate('/ourteam')}>Advisory Team</a></li>
                    </ul>
                  </div>}
                </li>
                <li><a onClick={()=>navigate('/projects')}>Projects</a></li>
                <li className="menu-item-has-children">
                  <a onClick={()=>showSubMenu("case-studies")}>Case Studies<i className="fa-solid fa-chevron-down"></i></a>
                  {activeMenu === "case-studies" && <div className={`menu-subs menu-column-1 ${subMenuActive ? 'active' : ''}`}>
                  <a onClick={()=>navigate('/case-studies')}><h6 className='text-darkred'>All Case Studies</h6></a>
                    <ul>
                      <li><a onClick={()=>navigate('/casestudiesdetails')}>Case Studies Details1</a></li>
                      <li><a onClick={()=>navigate('/casestudiesdetails')}>Case Studies Details2</a></li>
                      <li><a onClick={()=>navigate('/casestudiesdetails')}>Case Studies Details</a></li>
                    </ul>
                  </div>}
                </li>
                <li className="menu-item-has-children">
                  <a onClick={()=>showSubMenu("service")}>Services <i className="fa-solid fa-chevron-down"></i></a>
                  {activeMenu === "service" && <div className={`menu-subs menu-mega menu-column-4 ${subMenuActive ? 'active' : ''}`}>
                  <div className="list-item">
                  <a onClick={()=>navigate('/service')}><h6 className='text-darkred'>All Services</h6></a>
                    <ul>
                      <li><a onClick={()=>navigate('/data-center-consultancy')}>Data Center Consultancy</a></li>
                      <li><a onClick={()=>navigate('/data-center-design-and-engineering')}>Data Center Design And Engineering</a></li>
                      <li><a onClick={()=>navigate('/data-center-project-management')}>Data Center Project Management</a></li>
                      <li><a onClick={()=>navigate('/data-center-construction')}>Data Center Construction</a></li>
                    </ul>
                  </div>
                  <div className="list-item">
                    <ul>
                      <li><a onClick={()=>navigate('/data-center-monitoring-and-control')}>Data Center Monitoring And Control</a></li>
                      <li><a onClick={()=>navigate('/data-center-operations-and-maintenance')}>Data Center Operations And Maintenance</a></li>
                      <li><a onClick={()=>navigate('/energy-management-solutions')}>Energy Management Solutions</a></li>
                      <li><a onClick={()=>navigate('/asset-tracking-service')}>Asset Tracking Service</a></li>
                    </ul>
                  </div>
                  <div className="list-item">
                    <ul>
                      <li><a onClick={()=>navigate('/defence-and-homeland-security')}>Defence And Homeland Securities</a></li>
                      <li><a onClick={()=>navigate('/information-technology')}>Information Technology</a></li>
                      <li><a onClick={()=>navigate('/audio-visuals-and-smart-rooms-solutions')}>Audio Visuals / Smart Rooms Solutions</a></li>
                      <li><a onClick={()=>navigate('/electronic-government')}>E-government</a></li>
                      <li><a onClick={()=>navigate('/intelligent-transport-management')}>Intelligent Transport Management</a></li>
                    </ul>
                  </div>
                  <div className="list-item">
                    <img src="img/navbar-image.png" className="responsive" alt="Shop Product" />
                  </div>
                </div>}
                  
                </li>
                <li><a onClick={()=>navigate('/partners')}>Partners</a></li>
                <li><a onClick={()=>navigate('/blogs')}>Blog</a></li>
                <li><a onClick={()=>navigate('/contact')}>Contact Us</a></li>
              </ul>
            </nav>
          </div>
          <button type="button" className="menu-mobile-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarDesign;
 