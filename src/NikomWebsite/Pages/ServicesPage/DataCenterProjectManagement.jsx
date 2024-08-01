import React from 'react'
import ServiceDetails from '../../Component/Service/ServiceDetails'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'

const DataCenterProjectManagement = () => {
    const InfoList = [
        'Business Continuity & Disaster Recovery',
        'Data Center Disaster Recovery Assessment Services',
        'Data Center Virtualization Strategies & Assessment',
        'Data Center Optimization Evaluations',
        'Data Center Relocation Evaluation & Planning',
        'Data Center Consolidation Evaluation & Planning',
        'IT Technology Roadmap Planning',
        'Data Center Routing and Switching Planning & Feasibility',
        'Data Center Server Planning & Feasibility',
        'Data Center Storage Area Network (SAN) and Data Protection Planning & Feasibility'
    ]
    const ServicePara = [
      "Over many years we have developed a proven project process to plan, design, and build data centers, computer rooms, and server rooms. The process includes comprehensive array of services geared to design, build, commission, monitor, manage, operate, and maintain mission critical facilities, such as data centers, computer rooms, server rooms, and network operations centers. Through experience we have developed this Data Center Facility Project Process which allows us to repeatedly deliver within schedule, scope, and budget.",
      'Typically, the initial four project phases are bundled as Planning & Feasibility. This allows us to project the true requirements for new data center design and re-design of existing facilities. Key Design Criteria, or "Needs", includes establishing load, availability, and deployment density design criteria. From there, we perform a comprehensive Site Survey to establish existing conditions and facility constraints. For a new space this survey includes looking for sources of power, communications lines and possibly chilled water as well as locations for landing generators, switchgear, UPS and heat rejection equipment.',
      'After completing the Needs and Survey, we establish recommendations for upgrades or improvements. We then develop plans and visual representations of our concepts in the Plan stage. Plans usually include CFD modeling, one-lines, drawings, project cost estimating, and master scheduling. At the conclusion of the planning phase, clients have a true understanding of the project scope, schedule, and budget.',
      'From here, clients can leverage our Design & Engineering Services for mechanical, electrical, structured cabling, IT, and other areas of the full data center project process. After design is completed and accepted by the client we provide Procurement Services, Data Center Project Management, Construction Management, Contractor Management, Commissioning for facility related supporting infrastructure, and Implementation Services for IT-related infrastructure.'
    ]
    const FacilityList = [
        'Contractor Management',
        'Data Center Commissioning',
        'Delivery & Rigging Co-Ordination',
        'Equipment Installation Services',
        'Data Center Relocation Coordination & Implementation of IT',
        'Equipment Installation Services',
        'Data Centre Relocation Coordination & Implementation'
    ]
  return (
    <>
      <BreadcrumbDesign pagename={'Data Center Project Management'} pagelink={'data-center-project-management'}/>
      <ServiceDetails 
      ServiceMainImage={assets.DataProjectManagement}
      ServiceHead={'Data Center Project Management'}
      ServicePara={ServicePara}
      ServiceFacilityHead={"Facility"}
      ServiceFacilityPara={FacilityList} ShowFacilityList={true}/>
    </>
  )
}

export default DataCenterProjectManagement