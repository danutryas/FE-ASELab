import '../style.css';
import { EventCard, MemberCard } from '../components/Cards';
import Searchbar from '../components/Searchbar';
import Slider from '../components/Slider';
import events from '../events.json';
import members from '../members.json';
import DivisionSection from '../components/OurDivision';
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Homepage = () => {
  const renderEvent = events.slice(0,3)
  const renderMember = members.slice(0,3)


  return (
    <div className="relative min-h-screen" data-dev-hint="container" id="bg">
      <input type="checkbox" id="menu-open" className="hidden" />
      <label htmlFor="menu-open" id="mobile-menu-button" className="fixed right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
        <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>

      <aside className="fixed" id="sidebar">
        <div
          className="bg-white h-screen md:w-64 space-y-6 pt-5 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
          data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div className="flex flex-col px-3 pb-2" data-dev-hint="optional div for having an extra footer navigation">
            <Link to="/" className="flex items-center  mb-5 no-underline">
              <img src="/logoASE.png" alt="" className="ml-3 h-24 sm:h-24" />
            </Link>

            <nav data-dev-hint="main navigation">
              <a href="#" className="flex items-center px-1 pt-1 pb-3  text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-100 pointer-events-none">
                <span className="flex-1 ml-3 whitespace-nowrap">Highlight</span>
              </a>
              <Link to="/member" className="flex items-center py-2 pl-7 p-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">

                <button className="bg-transparent border border-gray-500 rounded-lg border-2 p-1.5">

                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {' '}
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap">ASE Member</span>
              </Link>
              <Link to="/research" className="flex items-center py-2 pl-7 p-2 my-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">

                <button className="bg-transparent border border-gray-500 rounded-lg border-2 p-1.5">

                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" />{' '}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap ">ASE Research</span>
              </Link>
              <Link to="/product" className="flex items-center py-2 pl-7 p-2 my-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">

                <button className="bg-transparent border border-gray-500 rounded-lg border-2 p-1.5">

                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" />{' '}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap">ASE Product</span>
              </Link>
              <Link to="/division" className="flex items-center py-2 pl-7 my-2 p-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">

                <button className="bg-transparent border border-gray-500 rounded-lg border-2 p-1.5">

                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" />{' '}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap">ASE Division</span>
              </Link>
              <Link to="/event" className="flex items-center py-2 my-2 pl-7 p-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">

                <button className="bg-transparent border border-gray-500 rounded-lg border-2 p-1.5">

                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" />{' '}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap">ASE Event</span>
              </Link>
              <Link to="/about" className="flex items-center py-2 my-2 pl-7 p-2 text-base font-medium text-gray-500 no-underline rounded-lg hover:bg-gray-200">
                <button className="bg-transparent  border-gray-500 rounded-lg border-2 p-1.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" /> <line x1="12" y1="6" x2="12" y2="19" />{' '}
                    <line x1="21" y1="6" x2="21" y2="19" />
                  </svg>
                </button>
                <span className="flex-1 ml-3 whitespace-nowrap">About Us</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>

      <main className='flex justify-end'  id="content" >
        <div className="w-full md:w-10/12 flex-3 p-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="px-4 py-6 sm:px-0">
              <div className="h-auto">
                <Searchbar />
              </div>
            </div>
            <div className="px-4 py-6 sm:px-0">
              <div className="h-auto ">
                <HeroBanner />
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="Our Events">
                  {renderEvent.map((event, index) => {
                    return <EventCard key={index} eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
                  })}
                </Slider>
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <Slider title="Our Laboratory Members">
                  {renderMember.map((member, index) => {
                    return <MemberCard key={index} tag={member.division} name={member.name} gen={member.gen} />;
                  })}
                </Slider>
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0">
              <div className="h-auto">
                <DivisionSection />
              </div>
            </div>
            <div className="px-4 py-12 sm:px-0 relative z-20">
              <div className="h-auto">
                <div className="flex flex-col items-center gap-6">
                  <h1 className="text-4xl font-medium text-center" style={{ color: '#353535' }}>
                    Join with us for more technology update
                  </h1>
                  <h2 className="text-2xl font-medium text-center" style={{ color: '#353535' }}>
                    Join now and make yourself the best digital talent in Southeast Asia
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
