import React from 'react'
import NavbarDesign from '../Navbar/NavbarDesign'
import FooterDesign from '../Footer/FooterDesign'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'

const PartnersDesign = () => {
    const PartnersLogo =[
        {
            id:1,
            Partners_Logo: "./img/partners/apc.png"
        },
        {
            id:2,
            Partners_Logo: "./img/partners/ateis.png"
        },
        {
            id:3,
            Partners_Logo: "./img/partners/cisco.png"
        },
        {
            id:4,
            Partners_Logo: "./img/partners/delta.png"
        },
        {
            id:5,
            Partners_Logo: "./img/partners/hp.png"
        },
        {
            id:6,
            Partners_Logo: "./img/partners/ibm.png"
        },
        {
            id:7,
            Partners_Logo: "./img/partners/pelco.png"
        },
        {
            id:8,
            Partners_Logo: "./img/partners/schneider.png"
        },
        {
            id:9,
            Partners_Logo: "./img/partners/uniflair.png"
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagelink={'Partners'} pagename={'Partners'}/>
        <div className='section'>
            <div className='container'>
                <div className='grid grid-cols-6 gap-5'>
                    {PartnersLogo.map((val)=>{
                        return(
                            <div key={val.id}>
                                <img src={val.Partners_Logo} className='w-full grayscale-1'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default PartnersDesign