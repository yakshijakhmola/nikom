import React, { useState, useEffect } from 'react';
import '../Navbar/NavbarDesign.css';
import { useNavigate } from 'react-router-dom';

const NavbarDesign = () => {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  const [menuTitle, setMenuTitle] = useState('');
  const [activeMenu, setActiveMenu] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 150) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenuElement = hasChildren.querySelector('.menu-subs');
    setSubMenu(subMenuElement);
    setSubMenuActive(true);
    setMenuTitle(hasChildren.querySelector('i').parentNode.childNodes[0].textContent);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setSubMenuActive(false);
      }, 300);
      setMenuTitle('');
    }
  };

  const handleMenuSectionClick = (e) => {
    if (!menuActive) return;
    const hasChildren = e.target.closest('.menu-item-has-children');
    if (hasChildren) {
      showSubMenu(hasChildren);
    }
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="wrapper">
          <div className="header-item-left">
            <h1>
              <a href="#" className="brand">
                <img src="img/logo.png" alt="" />
              </a>
            </h1>
          </div>
          <div className="header-item-center">
            <div className={`overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            <nav className={`menu ${menuActive ? 'active' : ''}`}>
              <div className="menu-mobile-header">
                <button type="button" className="menu-mobile-arrow" onClick={hideSubMenu}>
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <div className="menu-mobile-title">{menuTitle}</div>
                <button type="button" className="menu-mobile-close" onClick={toggleMenu}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              {!activeMenu&&<ul className="menu-section" onClick={handleMenuSectionClick}>
                <li onClick={()=> navigate('/')}><a href="#">Home</a></li>
                <li className="menu-item-has-children">
                  <a onClick={()=>navigate('/about')}>About <i className="fa-solid fa-chevron-down" onClick={()=>setActiveMenu("about")}></i></a>
                  <div className="menu-subs menu-column-1">
                    <ul>
                      <li><a href="#">Brief Profile</a></li>
                      <li><a href="#">Vision</a></li>
                      <li><a href="#">Mission</a></li>
                      <li><a onClick={()=>navigate('/leadership')}>Leadership</a></li>
                      <li><a onClick={()=>navigate('/ourteam')}>Advisory Team</a></li>
                      <li><a href="#">Social Responsibility</a></li>
                      <li><a href="#">Corporate Governance</a></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <a onClick={()=>navigate('/case-studies')}>Case Studies <i className="fa-solid fa-chevron-down"></i></a>
                  <div className="menu-subs menu-column-1">
                    <ul>
                      <li><a onClick={()=>navigate('/casestudiesdetails')}>Case Studies Detsils1</a></li>
                      <li><a href="#">Case Studies Detsils2</a></li>
                      <li><a href="#">Case Studies Detsils3</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#">Projects</a></li>
                <li className="menu-item-has-children">
                  <a onClick={()=>navigate('/Service')}>Services <i className="fa-solid fa-chevron-down"></i></a>
                  <div className="menu-subs menu-mega menu-column-4">
                    <div className="list-item">
                      <ul>
                        <li><a onClick={()=>navigate('/ServiceDetails')}>Data Center Consultancy</a></li>
                        <li><a href="#">Defence and Homeland Security</a></li>
                        <li><a href="#">IT & Networking Solutions</a></li>
                        <li><a href="#">Data Center Design & Engineering</a></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <ul>
                        <li><a href="#">Data Center Project Management</a></li>
                        <li><a href="#">Data Center Construction</a></li>
                        <li><a href="#">Data Center Monitoring & Control</a></li>
                        <li><a href="#">Data Center Operations & Maintenance</a></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <ul>
                        <li><a href="#">Energy Management Solutions</a></li>
                        <li><a href="#">Asset Tracking Service</a></li>
                        <li><a href="#">Audio Visuals / Smart Rooms Solutions</a></li>
                      </ul>
                    </div>
                    <div className="list-item">
                      <img src="img/navbar-image.png" className="responsive" alt="Shop Product" />
                    </div>
                  </div>
                </li>
                <li><a onClick={()=>navigate('/partners')}>Partners</a></li>
                <li><a onClick={()=>navigate('blogs')}>Blog</a></li>
                <li><a onClick={()=>navigate('/contact')}>Contact Us</a></li>
                <li><a onClick={()=>navigate('/try1')}>Try</a></li>
              </ul>}
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
