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
                      <li><a onClick={()=>navigate('/about')}>About Us</a></li>
                      <li><a onClick={()=>navigate('/awards-and-recognition')}>Awards & Recognition</a></li>
                      <li><a onClick={()=>navigate('/leadership')}>Leadership</a></li>
                    </ul>
                  </div>}
                </li>
                <li><a onClick={()=>navigate('/career')}>Career</a></li>
                <li className="menu-item-has-children">
                  <a onClick={()=>showSubMenu("projects")}>Projects<i className="fa-solid fa-chevron-down"></i></a>
                  {activeMenu === "projects" && <div className={`menu-subs menu-column-1 ${subMenuActive ? 'active' : ''}`}>
                  <a onClick={()=>navigate('/projects')}><h6 className='text-darkred'>Projects</h6></a>
                    <ul>
                      <li><a onClick={()=>navigate('/casestudiesdetails')}>AAI's Non-IT Infrastructure</a></li>
                    </ul>
                  </div>}
                </li>
                <li className="menu-item-has-children">
                  <a onClick={()=>showSubMenu("service")}>Services <i className="fa-solid fa-chevron-down"></i></a>
                  {activeMenu === "service" && <div className={`menu-subs menu-mega menu-column-4 ${subMenuActive ? 'active' : ''}`}>
                  <div className="list-item">
                    <span className='font-bold text-darkred'>Managing Data Centre Lifecycle</span>
                    <ul>
                      <li><a onClick={()=>navigate('/data-center-consultancy')}>Data Center Consultancy</a></li>
                      <li><a onClick={()=>navigate('/data-center-design-and-engineering')}>Data Center Design And Engineering</a></li>
                      <li><a onClick={()=>navigate('/data-center-construction')}>Data Center Construction</a></li>
                      <li><a onClick={()=>navigate('/data-center-monitoring-and-control')}>Data Center Monitoring And Control</a></li>
                      <li><a href="">Grid to Chip Turnkey EPC Projects</a></li>
                      <li><a href="">Data Centre Retrofit Projects</a></li>
                      <li><a href="">Operations command Centre</a></li>
                    </ul>
                  </div>
                  <div className="list-item">
                  
                  <span className='font-bold text-darkred'>IT & Networking Solutions</span>
                  <ul>
                    <li><a href="">HCI Hyper Converged Infrastructure</a></li>
                    <li><a href="">NOC and SOC</a></li>
                    <li><a href="">Networking</a></li>
                    <li><a href="">Servers</a></li>
                    <li><a href="">Backup/Recovery</a></li>
                    <li><a href="">Cloud Integration</a></li>
                    <li><a href="">Firewall and UTM systems</a></li>
                    <li><a href="">Virtualization</a></li>
                    <li><a href="">High Performance Computing</a></li>
                    <li><a href="">DC, DR & NDR</a></li>
                  </ul>
                  </div>
                  <div className="list-item">
                  
                  <span className='font-bold text-darkred'>Facility Management & O&M</span>
                  <ul>
                    <li><a onClick={()=>navigate('/data-center-project-management')}>Data Center Project Management</a></li>
                    <li><a onClick={()=>navigate('/data-center-operations-and-maintenance')}>Data Center Operations And Maintenance</a></li>
                  </ul>
                  <span className='font-bold text-darkred'>Safety & Smart City Solutions</span>
                  <ul>
                    <li><a onClick={()=>navigate('/energy-management-solutions')}>Energy Management Solutions</a></li>
                    <li><a onClick={()=>navigate('/electronic-government')}>E-government</a></li>
                    <li><a onClick={()=>navigate('/intelligent-transport-management')}>Intelligent Transport Management</a></li>
                  </ul>
                    <span className='font-bold text-darkred'>AV Solutions</span>
                    <ul>
                      <li><a onClick={()=>navigate('/audio-visuals-and-smart-rooms-solutions')}>Audio Visuals / Smart Rooms Solutions</a></li>
                    </ul>
                    <span className='font-bold text-darkred'>Aviation & Defence Solutions</span>
                    <ul>
                      <li><a onClick={()=>navigate('/defence-and-homeland-security')}>Defence And Homeland Securities</a></li>
                    </ul>
                    <span className='font-bold text-darkred'>Digital Transformation</span>
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
 