const Footer = () => {
  return (
    <div className="bg-gray-100 p-5 grid grid-cols-1 md:grid-cols-12 asui relative z-20">
      <div className="md:col-span-3 pb-2 md:mb-0">
        <a href="#" className="flex items-center mb-5 no-underline">
          <img src="/logoASE.png" alt="" className="ml-3 h-24 sm:h-24" />
        </a>
      </div>
      <div className="md:col-span-3 pb-2 mb-2 md:mb-0">
        <p className="text-gray-500">ASE DIVISION</p>
        <ul className="pt-5 text-gray-500">
          <li>Frontend Engineer</li>
          <li>Backend Engineer</li>
          <li>UI/UX Designer</li>
          <li>Game Developer</li>
        </ul>
      </div>
      <div className="md:col-span-3 pb-2 mb-2 md:mb-0">
        <p className="text-gray-500">Visit Us</p>
        <ul className="pt-5 text-gray-500">
          <li>Jl. Telekomunikasi No.1, Sukapura,</li>
          <li>Kec. DayeuhKolot, Kabupaten</li>
          <li>Bandung, Jawa Barat 40267</li>
          <li>Gedung TULT, Lt 6</li>
        </ul>
      </div>

      <div className="md:col-span-3 pb-2 md:mb-0">
        <p className="text-gray-500">Social Media</p>
        <ul className="pt-3 text-gray-500">
          <li className="">
            <img src="/image/logoIG.png" alt="" style={{ display: 'inline', width: '40px', marginRight: '10px' }} />
            Instagram
          </li>
          <li className="pt-2" style={{ marginLeft: '7px' }}>
            <img src="/image/logoLinkedIn.png" alt="" style={{ display: 'inline', width: '30px', marginRight: '13px' }} />
            LinkedIn
          </li>
          <li className="pt-2">
            <img src="/image/logoGithub.png" alt="" style={{ display: 'inline', width: '43px', marginRight: '7px' }} />
            Github
          </li>
        </ul>
      </div>
      <div className="mt-5 md:col-span-12 text-center text-gray-500 pt-2">
        Copyright <span>&copy;</span> Advanced Software Engineering Telkom University 2022
      </div>
    </div>
  );
};

export default Footer;
