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
import NavbarDesign from './NikomWebsite/Component/Navbar/NavbarDesign';
import FooterDesign from './NikomWebsite/Component/Footer/FooterDesign';
import BlogCardPage from './NikomWebsite/Component/Blog/BlogCardPage';
import BlogDetails from './NikomWebsite/Component/Blog/BlogDetails';
import DataCenterConsultancy from './NikomWebsite/Pages/ServicesPage/DataCenterConsultancy';
import DefenceandHomeLandSecurities from './NikomWebsite/Pages/ServicesPage/DefenceandHomeLandSecurities';
import DataCenterDesignEngineering from './NikomWebsite/Pages/ServicesPage/DataCenterDesignEngineering';
import IntelligentTransportManagement from './NikomWebsite/Pages/ServicesPage/IntelligentTransportManagement';
import EGovernment from './NikomWebsite/Pages/ServicesPage/EGovernment';
import AudioVisualsAndSmartRoomsSolutions from './NikomWebsite/Pages/ServicesPage/AudioVisualsAndSmartRoomsSolutions';
import InformationTechnology from './NikomWebsite/Pages/ServicesPage/InformationTechnology';
import AssetTrackingService from './NikomWebsite/Pages/ServicesPage/AssetTrackingService'
import EnergyManagementSolutions from './NikomWebsite/Pages/ServicesPage/EnergyManagementSolutions';
import DataCenterOperationsAndMaintenance from './NikomWebsite/Pages/ServicesPage/DataCenterOperationsAndMaintenance'
import DataCenterProjectManagement from './NikomWebsite/Pages/ServicesPage/DataCenterProjectManagement';
import DataCenterConstruction from './NikomWebsite/Pages/ServicesPage/DataCenterConstruction';
import DataCenterMonitoringAndControl from './NikomWebsite/Pages/ServicesPage/DataCenterMonitoringAndControl';
import ProjectMilestone from './NikomWebsite/Component/Project/ProjectMilestone';
import AwardandCertificate from './NikomWebsite/Pages/AwardandCertificate';
import DummyBlog from './NikomWebsite/Pages/DummyBlog';
import Career from './NikomWebsite/Pages/Career';
import ManagingDataCentreLifecycle from './NikomWebsite/Pages/ServicesPage/ManagingDataCentreLifecycle';
import FacilityManagementandOandM from './NikomWebsite/Pages/ServicesPage/FacilityManagementandOandM';
import SafetyandSmartCitySolutions from './NikomWebsite/Pages/ServicesPage/SafetyandSmartCitySolutions';
import AVSolutions from './NikomWebsite/Pages/ServicesPage/AVSolutions';
import AviationDefenceSolutions from './NikomWebsite/Pages/ServicesPage/AviationDefenceSolutions';
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
          path: "/service",
          element: <ServicePage/>
        },
        {
          path: "/servicedetails",
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
          path: '/blogs',
          element: <BlogCardPage/>
        },
        {
          path: '/blogdetails',
          element: <BlogDetails/>
        },
        {
          path: '/data-center-consultancy',
          element: <DataCenterConsultancy/>
        },
        {
          path: '/defence-and-homeland-security',
          element: <DefenceandHomeLandSecurities/>
        },
        {
          path: '/data-center-design-and-engineering',
          element: <DataCenterDesignEngineering/>
        },
        {
          path: '/intelligent-transport-management',
          element: <IntelligentTransportManagement/>
        },
        {
          path: '/electronic-government',
          element: <EGovernment/>
        },
        {
          path: '/audio-visuals-and-smart-rooms-solutions',
          element: <AudioVisualsAndSmartRoomsSolutions/>
        },
        {
          path: '/information-technology',
          element: <InformationTechnology/>
        },
        {
          path: '/asset-tracking-service',
          element: <AssetTrackingService/>
        },
        {
          path: '/energy-management-solutions',
          element: <EnergyManagementSolutions/>
        },
        {
          path: '/data-center-monitoring-and-control',
          element: <DataCenterMonitoringAndControl/>
        },
        {
          path: '/data-center-operations-and-maintenance',
          element: <DataCenterOperationsAndMaintenance/>
        },
        {
          path: '/data-center-project-management',
          element: <DataCenterProjectManagement/>
        },
        {
          path: '/data-center-construction',
          element: <DataCenterConstruction/>
        },
        {
          path: '/projects',
          element: <ProjectMilestone/>
        },
        {
          path: '/awards-and-recognition',
          element: <AwardandCertificate/>
        },
        {
          path: '/blog1',
          element: <DummyBlog/>
        },
        {
          path: '/career',
          element: <Career/>
        },
        {
          path: '/managing-data-centre-lifecycle',
          element: <ManagingDataCentreLifecycle/>
        },
        {
          path: '/facility-management-and-oandm',
          element: <FacilityManagementandOandM/>
        },
        {
          path: '/safety-and-smart-city-solutions',
          element: <SafetyandSmartCitySolutions/>
        },
        {
          path: '/av-solutions',
          element: <AVSolutions/>
        },
        {
          path: '/aviation-and-defence-solutions',
          element: <AviationDefenceSolutions/>
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
