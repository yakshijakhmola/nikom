import React from 'react'
import NavbarDesign from '../Navbar/NavbarDesign'
import FooterDesign from '../Footer/FooterDesign'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'

const OurTeam = () => {
    const teamjson = [
        {
            id:1,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:2,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:3,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:4,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:5,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:6,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:7,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:8,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:9,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
        },
        {
            id:10,
            team_image: "./img/team/team1.jpg",
            team_name: "Arin Sarkar",
            team_post: "Vice President"
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
                <div className='grid grid-cols-5'>
                    {teamjson.map((val, ind)=>{
                        return(
                            <div key={ind} className='m-3 overflow-hidden' data-aos="fade-right" data-aos-delay={(ind + 1) * 100}>
                                <div>
                                    <img src={val.team_image} className='hover:scale-110 transition-all ease-linear duration-300'/>
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