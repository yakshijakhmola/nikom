import React from 'react'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
import { assets } from '../../../assets/assets'

const OurTeam = () => {
    const teamjson = [
        { 
            team_image: [assets.Arin],
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        { 
            team_image: [assets.Vinod],
            team_name: "Vinod Sharma",
            team_post: "Chief Technology Officer"
        },
        { 
            team_image: [assets.Mithilesh],
            team_name: "Mithilesh Singh",
            team_post: "General Manager"
        },
        { 
            team_image: [assets.Gunjan],
            team_name: "Gunjan Das",
            team_post: "Senior Lead PMO"
        },
        { 
            team_image: [assets.Parshant],
            team_name: "Prashant Singh",
            team_post: "AVP - Strategic Alliances"
        },
        { 
            team_image: [assets.ShriRam],
            team_name: "Shri Ram Ranawat",
            team_post: "DGM Sales"
        },
        { 
            team_image: [assets.Ayush],
            team_name: "Ayush Gupta",
            team_post: "Business Development Executive"
        },
        { 
            team_image: [assets.Prachi],
            team_name: "Prachi Vashistha ",
            team_post: "HR Executive"
        },
        { 
            team_image: [assets.Kirti],
            team_name: "Kirti Sharma",
            team_post: "BDM"
        },
        { 
            team_image: [assets.Mahesh],
            team_name: "Mahesh Singh",
            team_post: "Manager - Accounts"
        },
        { 
            team_image: [assets.Vivek],
            team_name: "Vivek Bansal",
            team_post: "Sr. Project Manager"
        },
        { 
            team_image: [assets.Pankaj],
            team_name: "Pankaj Rajput",
            team_post: "Sr. Solution Architect"
        },
        { 
            team_image: [assets.Haris],
            team_name: "Haris Naved",
            team_post: "GM - Projects"
        },
        { 
            team_image: [assets.Neetu],
            team_name: "Neetu Kumari",
            team_post: "Asst Manager HR"
        },
        { 
            team_image: [assets.Annasa],
            team_name: "Annasa Biswas",
            team_post: "Interior Designer"
        },
        { 
            team_image: [assets.Anup],
            team_name: "Anup Sayal",
            team_post: "FMS In-Charge"
        },
        { 
            team_image: [assets.Ravi],
            team_name: "Ravi Mandal",
            team_post: "Bid Manager"
        },
        { 
            team_image: [assets.Jaswinder],
            team_name: "Jaswinder Kaur",
            team_post: "Tender Executive"
        },
        { 
            team_image: [assets.Bhuvan],
            team_name: "Bhuvan Singh",
            team_post: "Manager Operations"
        },
        { 
            team_image: [assets.Uday],
            team_name: "Uday P. Singh",
            team_post: "Technical LeadNorth"
        },
        { 
            team_image: [assets.Nirmal],
            team_name: "Nirmal Prasad",
            team_post: "DGM (Critical Infrastructure Services)"
        },
        { 
            team_image: [assets.Shivangi],
            team_name: "Shivangi Jha",
            team_post: "Assistant Manager- Govt. Sales"
        },
        { 
            team_image: [assets.Dheeraj],
            team_name: "Dheeraj Singh",
            team_post: "Manager (Datacenter – Design & Engineering)"
        },
        { 
            team_image: [assets.BSKiran],
            team_name: "B S Kiranr",
            team_post: "Zonal ManagerSouth"
        },
        { 
            team_image: [assets.Jyoti],
            team_name: "Jyoti Kumari",
            team_post: "Accounts & Finance"
        },
        { 
            team_image: [assets.Laxminaryan],
            team_name: "V.Laxminarayan",
            team_post: "Project Manager"
        },
        { 
            team_image: [assets.Shalini],
            team_name: "Shalini Chakrabarty",
            team_post: "Sr. Purchase Executive"
        },
        { 
            team_image: [assets.Uttkarsh],
            team_name: "Uttkarsh Sharma",
            team_post: "Sr. Project Coordinator"
        },
        { 
            team_image: [assets.Vijaya],
            team_name: "Vijaya Kumari",
            team_post: "Sr. HR Executive"
        },
        { 
            team_image: [assets.Sunil],
            team_name: "Sunil Gupta",
            team_post: "Admin"
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagelink={'Our Team'} pagename={'Our Team'}/>
        <div className='section'>
            <div className='container'>
                <div className='flex items-center justify-center flex-col'>
                    <p className='smallspan'>Team Members</p>
                    <h2 className='centerheading'>Our Professional Team</h2>
                </div>
                <div className='grid grid-cols-12 gap-x-5'>
                    {teamjson.map((val, ind)=>{
                        return(
                            <div key={val.id} className='my-3 overflow-hidden xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-12' data-aos="fade-right" data-aos-delay={(ind + 1) * 100}>
                                <div>
                                    <img src={val.team_image} className='w-full hover:scale-110 transition-all ease-linear duration-300' alt={val.team_name}/>
                                </div>
                                <div className='mt-0 pl-5 team-content py-5'>
                                    <h5 className='mb-0'>{val.team_name}</h5>
                                    <span className='text-darkred'>{val.team_post}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default OurTeam