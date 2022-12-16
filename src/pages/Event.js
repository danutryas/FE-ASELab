import Header from "../components/Header"
import events from '../events.json';
import Slider from "../components/Slider";
import { EventCard } from "../components/Cards";
import { Link, useNavigate } from 'react-router-dom';

const EventPage = () => {
  const renderEvent = events.slice(0,5)
  const navigate = useNavigate();
    return(
        <div className="">
            <Header type="title" title="ASE Event"/>

        <div className='flex justify-center' >
        <div className="flex-3 p-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <div className="pt-6" data-dev-hint="navigator">
            <button  className="group w-max px-5 py-3 Button !border-4 !border-white flex gap-2 no-underline" onClick={()=>navigate(-1)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="group-hover:stroke-orangeAccent-500" d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className="group-hover:stroke-orangeAccent-500" d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-medium text-xl ">Back</span>
            </button>
          </div>
          <div className="px-4 py-12 sm:px-0 relative z-20">
              <div className="h-auto">
                <div className="flex flex-col items-center gap-6">
                  <h1 className="text-4xl font-medium text-center" style={{ color: '#353535' }}>
                  Explore Our Division More
                  </h1>
                  <h2 className="text-2xl font-medium text-center" style={{ color: '#353535' }}>
                  Five different topic for you to explore about technology
                  </h2>
                </div>
              </div>
            </div>
  
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="Frontend Engineer">
                  {renderEvent.map((event, index) => {
                    return <EventCard key={index} eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
                  })}
                </Slider>
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="Backend Engineer">
                  {renderEvent.map((event, index) => {
                    return <EventCard key={index} eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
                  })}
                </Slider>
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="UI/UX Design">
                  {renderEvent.map((event, index) => {
                    return <EventCard key={index} eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
                  })}
                </Slider>
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="Quality Assurance">
                  {renderEvent.map((event, index) => {
                    return <EventCard key={index} eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default EventPage;