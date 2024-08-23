import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa";

const TimelineDesign = () => (
  <div className="section bg-[url('img/top-right.png'), url('img/bottom-left.png')]  bg-['50%'] bg-no-repeat bg-right-top">
    <div className="container">
      <div className='flex items-center justify-center flex-col'>
        <p className='smallspan'>Recognition</p>
        <h2 className='centerheading'>Recognitions Over Last Few Years</h2>
      </div>
     <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid  var(--darkred)' }}
          date="2023"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <p>
          Rated as SME 01 in  Performance Rating  by ” Brickworks  Analytics”  
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <p>Runner'  s up in ASSOCHAM Excellence Award for Best  MSME </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2021</h4>
          <p>  Most Promising Datacenter Solution Providers by “ Silicon “ Magazine </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2021</h4>
          <p> NASSCOM Listed Nikom as one of the “ Major Players in Datacenter Ecosystem” in India </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2019</h4>
          <p>Most Promising  Datacenter Solution Providers by “ Silicon India Magazine “ </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2017</h4>
          <p>Nominated as Best MSME for Excellence </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          iconStyle={{ background: 'var(--darkred)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h4 className="vertical-timeline-element-subtitle">2016</h4>
          <p>“ Best in Class ” Award for  APJ Region for Green DC and Energy Management. </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </div>
);

export default TimelineDesign