import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../../assets/assets';

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            },
          },
        ],
    };
    const TestimonialsMaping = [
        {
          id:1,
          testi_greating: "Greating Consulting!",
          testi_para: "Nikom Infrasolutions Pvt Ltd has provided outstanding support in maintaining our UPS system. Their leadership and expertise have been critical to the success of our Central Square Plaza II project. We look forward to their continued excellent service and partnership.",
          testi_name: "Hindustan Petroleum Corporation Ltd.",
          testi_image: assets.hp,
        },
        {
          id:2,
          testi_greating: "Greating Consulting!",
          testi_para: "We are grateful for the exceptional services provided by Nikom Infrasolutions Pvt Ltd. Their professionalism, adept handling of challenging situations, and commitment to quality have surpassed our expectations. In today's business landscape, it's rare to find such reliability and genuine care. We look forward to working with them again.",
          testi_name: "Pureearth Infrastructure Ltd",
          testi_image: assets.pureearth,
        },
        {
          id:3,
          testi_greating: "Greating Consulting!",
          testi_para: "Nikom Infrasolutions has consistently demonstrated professionalism, reliability, and technical expertise in maintaining our facility. Their proactive approach and attention to detail have ensured smooth operations. We value our partnership with Nikom and look forward to its continuation.",
          testi_name: "Indian Institute of Technology Gandhinagar",
          testi_image: assets.education3,
        }
    ]
  return (
    <>
      <section className="testimonial-section pb">
        <div className="container">
          <div className="w-full flex items-center xl:flex-nowrap flex-wrap justify-between gap-x-10">
            <div className="xl:w-2/5 w-full" data-aos="fade-down" data-aos-duration="1000">
              <div className="left-testimonial-content">
                <h2 className='text-black xl:text-4xl text-2xl'>Happy Client Stories</h2>
                <p className='my-5'>These voices echo the confidence and satisfaction of clients who have witnessed firsthand the impact of our solutions. At Nikom, our clients are not just partners.</p>
                <div className="review-content">
                  <div className="flex items-center gap-4">
                    <div className="review">
                      <h6>Review On</h6>
                    </div>
                    <div className="star-icon text-[#FFC107]">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="google-icon">
                      <img src="img/google.svg" alt=""/>
                    </div>
                    <div>
                      <p>(50 Review)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-3/5 w-full xl:mt-0 mt-4" data-aos="fade-up" data-aos-duration="2000">
              <Slider {...settings} className='bg-black py-10 px-5'>
                {TestimonialsMaping.map((val,ind)=>{
                  return(
                    <div key={ind}>
                      <div className="right-testimonial-card">
                        <div className="right-testimonial-head">
                          <h5 className='text-darkred'>{val.testi_greating}</h5>
                          <p className='text-white-para-color text-parasize my-5'>{val.testi_para}</p>
                        </div>
                        <div className="flex items-center justify-between flex-wrap">
                          <div className="flex items-center gap-x-5">
                            <div className="bottom-image">
                              <img src={val.testi_image} alt="" className='w-16 h-16 rounded-full'/>
                            </div>
                            <div className="bottom-testimonial-head">
                              <h5 className='text-white mb-1'>{val.testi_name}</h5>
                            </div>
                          </div>
                          <div className="bottom-right">
                            <img src={val.testi_company_logo} className='w-52' alt=""/>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials