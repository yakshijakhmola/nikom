import React from 'react'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
import { assets } from '../../../assets/assets'

const PartnersDesign = () => {
    const Infrastructure =[
        {
            id:1,
            Infrastructure_Logo: assets.schneider
        },
        {
            id:2,
            Infrastructure_Logo: assets.garr
        },
        {
            id:3,
            Infrastructure_Logo: assets.ireo
        },
        {
            id:4,
            Infrastructure_Logo: assets.ijm
        },
        {
            id:5,
            Infrastructure_Logo: assets.jda
        },
        {
            id:6,
            Infrastructure_Logo: assets.organosys
        },
        {
            id:7,
            Infrastructure_Logo: assets.cpwd
        },
        {
            id:8,
            Infrastructure_Logo: assets.v3 
        },
        {
            id:9,
            Infrastructure_Logo: assets.jscl
        }
    ]
    const Transport =[
        {
            id:1,
            Transport_Logo: assets.indianrail
        },
        {
            id:2,
            Transport_Logo: assets.dfc
        },
        {
            id:3,
            Transport_Logo: assets.aai
        },
        {
            id:4,
            Transport_Logo: assets.dimts
        },
        {
            id:5,
            Transport_Logo: assets.cris
        },
        {
            id:6,
            Transport_Logo: assets.concor
        }
    ]
    const Utilities =[
        {
            id:1,
            Utilities_Logo: assets.tataddl
        },
        {
            id:2,
            Utilities_Logo: assets.bses
        },
        {
            id:3,
            Utilities_Logo: assets.upcl
        },
        {
            id:4,
            Utilities_Logo: assets.hprbb
        },
        {
            id:5,
            Utilities_Logo: assets.dtl
        }
    ]
    const OilAndGas =[
        {
            id:1,
            OilAndGas_Logo: assets.gail
        },
        {
            id:2,
            OilAndGas_Logo: assets.indianoil
        },
        {
            id:3,
            OilAndGas_Logo: assets.hp
        },
        {
            id:4,
            OilAndGas_Logo: assets.bharatpetroleum
        },
        {
            id:5,
            OilAndGas_Logo: assets.ongc
        },
        {
            id:6,
            OilAndGas_Logo: assets.powergrid
        },
        {
            id:7,
            OilAndGas_Logo: assets.ntpc
        },
        {
            id:8,
            OilAndGas_Logo: assets.nhpc
        }
    ]
    const InfoTech =[
        {
            id:1,
            InfoTech_Logo: assets.tataconsultancy
        },
        {
            id:2,
            InfoTech_Logo: assets.coforge
        },
        {
            id:3,
            InfoTech_Logo: assets.hcltech
        },
        {
            id:4,
            InfoTech_Logo: assets.ltimindtree
        }
    ]
    const Telecom =[
        {
            id:1,
            Telecom_Logo: assets.aircel
        },
        {
            id:2,
            Telecom_Logo: assets.prasar
        },
        {
            id:3,
            Telecom_Logo: assets.cdot
        },
        {
            id:4,
            Telecom_Logo: assets.bsnl
        }
    ]
    const Hospitality=[
        {
            id:1,
            Hospitality_Logo: assets.imperial
        },
        {
            id:2,
            Hospitality_Logo: assets.country
        },
        {
            id:3,
            Hospitality_Logo: assets.tivoli
        }
    ]
    const Defence=[
        {
            id:1,
            Defence_Logo: assets.defence1
        },
        {
            id:2,
            Defence_Logo: assets.defence2
        },
        {
            id:3,
            Defence_Logo: assets.defence3
        },
        {
            id:4,
            Defence_Logo: assets.defence4
        }
    ]
    const Education=[
        {
            id:1,
            Education_Logo: assets.education1
        },
        {
            id:2,
            Education_Logo: assets.education2
        },
        {
            id:3,
            Education_Logo: assets.education3
        },
        {
            id:4,
            Education_Logo: assets.education4
        },
        {
            id:5,
            Education_Logo: assets.education5
        }
    ]
    const RD =[
        {
            id:1,
            RD_Logo: assets.IMD
        },
        {
            id:2,
            RD_Logo: assets.CSIR
        },
        {
            id:3,
            RD_Logo: assets.CDAC
        },
        {
            id:4,
            RD_Logo: assets.ERNET
        }
    ]
    const HealtchCare=[
        {
            id:1,
            HealtchCare_Logo: assets.igb
        },
        {
            id:2,
            HealtchCare_Logo: assets.apollo
        },
        {
            id:3,
            HealtchCare_Logo: assets.max
        },
        {
            id:4,
            HealtchCare_Logo: assets.medanta
        }
    ]
    const Consulting = [
        {
            id: 1,
            Consulting_Logo: assets.Ernst
        },
        {
            id: 2,
            Consulting_Logo: assets.Pwc
        },
        {
            id: 3,
            Consulting_Logo: assets.Kpmg
        }
    ]
    const Manufacturing = [
        {
            id: 1,
            Manufacturing_Logo: assets.Rcf
        },
        {
            id: 2,
            Manufacturing_Logo: assets.Nfl
        }
    ]
    const BFSI = [
        {
            id: 1,
            BFSI_Logo: assets.Metlife
        },
        {
            id: 2,
            BFSI_Logo: assets.Aviva
        },
        {
            id: 3,
            BFSI_Logo: assets.Lic
        },
        {
            id: 4,
            BFSI_Logo: assets.Boi
        },
        {
            id: 5,
            BFSI_Logo: assets.Icici
        },
        {
            id: 6,
            BFSI_Logo: assets.Pnb
        }
    ]
    const NGOs = [
        {
            id: 1,
            NGOs_Logo: assets.Oxfam
        },
        {
            id: 2,
            NGOs_Logo: assets.Michael
        },
        {
            id: 3,
            NGOs_Logo: assets.Helpageindia
        }
    ]
  return (
    <>
        <BreadcrumbDesign pagelink={'Partners'} pagename={'Partners'}/>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Infrastructure Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Infrastructure.map((infraval, id) => {
                            return (
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={infraval.Infrastructure_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out xl:hover:scale-125'/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Transport Client's</h6>
                    <div className='grid grid-cols-12  '>
                        {Transport.map((Transportval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Transportval.Transport_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Utilities Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Utilities.map((Utilitiesval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Utilitiesval.Utilities_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Power, Oil & GAS</h6>
                    <div className='grid grid-cols-12'>
                        {OilAndGas.map((OilAndGasval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={OilAndGasval.OilAndGas_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Infrastructure Client's</h6>
                    <div className='grid grid-cols-12'>
                        {InfoTech.map((InfoTechval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={InfoTechval.InfoTech_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Telecom Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Telecom.map((Telecomval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Telecomval.Telecom_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Hospitality Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Hospitality.map((Hospitalityval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Hospitalityval.Hospitality_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Defence Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Defence.map((Defenceval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Defenceval.Defence_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Education Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Education.map((Educationval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Educationval.Education_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>R  & D Client's</h6>
                    <div className='grid grid-cols-12'>
                        {RD.map((RDval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={RDval.RD_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Healthcare Client's</h6>
                    <div className='grid grid-cols-12'>
                        {HealtchCare.map((HealtchCareval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={HealtchCareval.HealtchCare_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Consulting Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Consulting.map((Consultingval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Consultingval.Consulting_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>Manufacturing Client's</h6>
                    <div className='grid grid-cols-12'>
                        {Manufacturing.map((Manufacturingval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={Manufacturingval.Manufacturing_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>BFSI Client's</h6>
                    <div className='grid grid-cols-12'>
                        {BFSI.map((BFSIval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={BFSIval.BFSI_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='pt-10 pb-10 flex justify-center items-center h-full'>
            <div className='container'>
                <div className='border border-dashed border-darkred rounded-lg p-5 relative'>
                    <h6 className='absolute -top-3 left-5 bg-darkred text-center text-white px-3 rounded-md'>NGOs Client's</h6>
                    <div className='grid grid-cols-12'>
                        {NGOs.map((NGOsval,id)=>{
                            return(
                                <div className='col-span-6 xl:col-span-2 lg:col-span-6 md:col-span-3 mb-3' key={id}>
                                    <img src={NGOsval.NGOs_Logo} className='w-full xl:w-36 lg:w-36 transition-all duration-300 ease-in-out hover:scale-125'/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PartnersDesign