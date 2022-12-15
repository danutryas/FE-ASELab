import '../style.css';

const HeroBanner = (e) => {
  return (
    <div>
      <div className="sliderAx h-auto">
        <div id="slider-1" className="container mx-auto">
          <div className="bg-cover bg-center flex flex-row h-auto text-gray-700 py-8 px-10 object-fill">
            <div style={{ width: '44%' }}>
              <p className="text-3xl font-medium">Advance Software</p>
              <p className="text-3xl font-medium">Engineering Telkom</p>
              <p className="text-3xl font-medium mb-4">University</p>
              <p className="text-base mb-9">
                Advanced Software Engineering Telkom <br /> University is a research laboratory that <br /> focuses on software design and <br /> development
              </p>
              <a href="#" className="Button bg-purple-800 p-2.5 text-white font-medium no-underline text-sm rounded drop-shadow-md">
                More about us
              </a>
            </div>
            <div className="md:w-1/2 rounded-lg">
              <img className="rounded-xl" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

            </div>
            <div className="flex absolute right-0 flex-col justify-between w-20 my-auto pb-2" style={{ top: '17rem' }}>
              <button id="sButton1" className="bg-orange-900 rounded-full mb-2 w-2 pb-5"></button>
              <button id="sButton2" className="bg-orange-900 rounded-full w-2 mb-2 pb-2"></button>
              <button id="sButton2" className="bg-orange-900 rounded-full w-2 pb-2 mb-2"></button>
              <button id="sButton2" className="bg-orange-900 rounded-full w-2 pb-2 mb-2"></button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
