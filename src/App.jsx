import './App.css'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './NikomWebsite/Pages/LandingPage/Landing';
import ServiceDetails from './NikomWebsite/Component/Service/ServiceDetails';
import CaseStudiesDetails from './NikomWebsite/Component/CaseStudies/CaseStudiesDetails';
import ContactDesign from './NikomWebsite/Pages/Contact/ContactDesign';
import ServicePage from './NikomWebsite/Pages/ServicePage';
import CaseStudiesPage from './NikomWebsite/Pages/CaseStudiesPage';
import PartnersDesign from './NikomWebsite/Component/Partners/PartnersDesign';
import About from './NikomWebsite/Pages/About';
import Leadership from './NikomWebsite/Pages/Leadership';
import OurTeam from './NikomWebsite/Component/Team/OurTeam';
import Try1 from './NikomWebsite/Pages/Try1';
import NavbarDesign from './NikomWebsite/Component/Navbar/NavbarDesign';
import FooterDesign from './NikomWebsite/Component/Footer/FooterDesign';
import BlogCardPage from './NikomWebsite/Component/Blog/BlogCardPage';
import BlogDetails from './NikomWebsite/Component/Blog/BlogDetails';
AOS.init();

function Outletext(){
  return(
    <>
      <NavbarDesign/>
      <Outlet/>
      <FooterDesign/>
    </>
  )
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outletext/>,
      children: [
        {
          path: "/",
          element: <Landing/>
        },
        {
          path: "/Service",
          element: <ServicePage/>
        },
        {
          path: "/ServiceDetails",
          element: <ServiceDetails/>
        },
        {
          path: "/case-studies",
          element: <CaseStudiesPage/>
        },
        {
          path: "/casestudiesdetails",
          element: <CaseStudiesDetails/>
        },
        {
          path: "/contact",
          element: <ContactDesign/>
        },
        {
          path: "/partners",
          element: <PartnersDesign/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: '/leadership',
          element: <Leadership/>
        },
        {
          path: 'ourteam',
          element: <OurTeam/>
        },
        {
          path: 'try1',
          element: <Try1/>
        },
        {
          path: 'blogs',
          element: <BlogCardPage/>
        },
        {
          path: 'blogdetails',
          element: <BlogDetails/>
        }
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
