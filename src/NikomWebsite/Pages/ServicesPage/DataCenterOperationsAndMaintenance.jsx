import React from 'react'
import { assets } from '../../../assets/assets'
import { RiCheckDoubleLine } from "react-icons/ri";
import BreadcrumbDesign from '../../Component/Breadcrumb/BreadcrumbDesign'
import ServiceSideBar from '../../Component/Service/ServiceSideBar';

const EnergyManagementSolutions = () => {
  return (
    <>
      <BreadcrumbDesign pagename={'Data Center Operations & Maintenance'} pagelink={'data-center-operations-and-maintenance'}/>
      <div className='section'>
            <div className='container'>
              <div>
                <img src={assets.DataEngineerMaintenance} className='rounded-tl-md rounded-tr-md'/>  
              </div>
                <div className='grid grid-cols-12 gap-x-5 mt-10'>
                    <div className='col-span-12 xl:col-span-8'>
                        <div className=''>
                            <div className='mb-3'>
                                <h2 className='mb-3 text-xl'>Data Center Operations & Maintenance</h2>
                                <p className='mb-3'>All data center designs are judged by their ability to provide continuous operations for the network services they support. When construction of the data center is complete, data center operations & maintenance begins. We provide outsourced data center operations and maintenance services and solutions to support data center managers. These services may include comprehensive operational management and regular scheduled maintenance for all facility supporting infrastructure and assets or, simply, preventive maintenance for specific assets in the data center.</p>
                            </div>
                            <div className='mb-3'>
                                <div>
                                    <h4 className='mb-3'>Data Center Operations</h4>
                                    <p className='mb-3'>Our Data Center Operations support is a holistic approach to data center operations which pulls from best practices gained from the Information Technology Infrastructure Library (ITIL) framework for service operations. The approach considers seven processes and functions related to complete data center operational management:</p>
                                    <ul>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Service Operation Practices:</b> Scope of Operational Support and Analysis Processes and Functions and How Operational Support and Analysis Activities Support the Service Lifecycle</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Event Management Process:</b> Process to Support Data Center Events, Event logs, Changes including Policies, Principles, Process Activities, Methods, Triggers, Inputs, and Outputs</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Incident Management Process:</b> Process to Support Data Center Incidents such as outages, equipment loss including Policies, Principles, Triggers, and Techniques for recovery</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Problem Management Process:</b> Handling of Identified Problems or Issues within the data center including root cause analysis, comprehensive fixes, improvements, and knowledge library inputs for future problem resolution.</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Request Fulfillment Process:</b> Approach to handle end user, organization requests for moves, adds, or changes to infrastructure within the data center</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Access Management Process:</b> Process for server, application, database, and physical access to the data center and its assets for end users.</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'><b>Service Desk Function:</b> Provides a support organization with rules and responsibilities for service support to end users</p>
                                      </li>
                                    </ul>
                                    <p className='mb-3'>Nikom has a long history of providing data center operational support to clients. Our data center operations support staff have many years of data center operational experience and have comprehensive ITIL training to provide best practices approaches for data center operational support. We also have data center consulting experts to manage operational budgets and help determine best course of action in terms of fix versus replace for data center assets</p>
                                </div>
                            </div>
                            <div className=''>
                                <h5 className='mb-3'>Data Center Maintenance</h5>
                                <p className='mb-3'>We offers a Data Center Managed Maintenance Service to ensure reliable operation of the critical systems installed. Since we designed and built your facility or have built many similar facilities, we have a thorough understanding of all data center facility supporting infrastructure systems used today. Therefore, our management and field technicians are in the best position to provide superior service and data center operations support.</p>
                                <p className='mb-3'>A comprehensive service plan is specifically designed to provide preventive maintenance, reliable 24/7 emergency service and corrective service for the data center. Nikom will manage the plan directly with Nikom technical resources or through our selected service affiliates and will contract directly with each supplier of the described services.</p>
                                <div className=''>
                                    <ul className='grid xl:grid-cols-2 grid-cols-1 gap-x-5'>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Data Center Managed Maintenance (DCMM) Service</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Facility Electrical Testing Services</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Grid Location Markers</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Managed Services</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Support Infrastructure Equipment Service</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Support Infrastructure Operations Review</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Technical Support</p>
                                      </li>
                                      <li className='my-3'>
                                        <p className='relative infopara pl-6'>Energy Audit</p>
                                      </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                              <p></p>     
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 xl:col-span-4 xl:mt-0 md:mt-0 mt-3'>
                        <ServiceSideBar/>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

export default EnergyManagementSolutions