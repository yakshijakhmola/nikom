import React from 'react'
import { assets } from '../../../assets/assets'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'

const ProjectMilestone = () => {
    const ProjectMilestoneJson = [
        {
            Project_image: assets.Project,
            Project_Name: "Aviva Chennai",
            Project_para: "Disaster Recovery Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "ONGC - Head Quarter",
            Project_para: "Vasant Kunj, New Delhi",
        },
        {
            Project_image: assets.Project,
            Project_Name: "NHPC datacentre",
            Project_para: "",
        },
        {
            Project_image: assets.Project,
            Project_Name: "Jaipur Smart City",
            Project_para: "Command & Control Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "MHA-ICR-ER",
            Project_para: "MHA-ICR-ER",
        },
        {
            Project_image: assets.Project,
            Project_Name: "Aviva Chennai",
            Project_para: "Disaster Recovery Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "L& T Info Tech",
            Project_para: "Income Tax Dept Vaishali, Ghaziabad",
        },
        {
            Project_image: assets.Project,
            Project_Name: "Param Siddhi @ CDAC, Pune",
            Project_para: "Super Computing Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "Param Ganga@ IIT Roorkee",
            Project_para: "Super Computing Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "AAI- Hyderabad",
            Project_para: "Data Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "NIT-Trichy",
            Project_para: "Data Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "IIT Hyderabad",
            Project_para: "Param Sewa - Super Computing Centre",
        },
        {
            Project_image: assets.Project,
            Project_Name: "IIT- Gandhi Nagar",
            Project_para: "Data Centre",
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagename={'Milestones Project'} pagelink={'milestones-project'}/>
        <div className='section'>
            <div className="container">
                <div className="grid grid-cols-12 gap-5">
                    {ProjectMilestoneJson.map((projectval, id)=>{
                        return(
                            <>
                                <div className='col-span-12 md:col-span-6 xl:col-span-4 lg:col-span-4 bg-white p-3 shadow-dark-shadow rounded-md transition-all duration-900  ease-linear' data-aos="fade-right" data-aos-delay={(id + 1) * 100}>
                                    <div className='overflow-hidden rounded-lg transition-all duration-900 ease-linear'><img src={projectval.Project_image} alt="projectmilestone" className='rounded-md mb-3 hover:scale-110 transition-all duration-900 ease-linear' /></div>
                                    <h5 className=''>{projectval.Project_Name}</h5>
                                    <p className='text-darkred'>{projectval.Project_para}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectMilestone