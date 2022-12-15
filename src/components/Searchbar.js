import '../style.css';

const Searchbar = () => {
  return (
    <form className="flex items-center w-11/12 mb-auto mx-auto">
      <label htmlFor="search" className="sr-only">
        Search More
      </label>
      <div className="w-full">
        <div className="relative">
          <div className="icon absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" style={{ top: '21px' }}>
            <svg aria-hidden="true" className="w-5 h-5 dark:text-gray-400" style={{ color: 'rgb(125, 87, 61)', opacity: '0.7' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        <input type="text" id="simple-search" className="bg-transparent text-gray-900 text-sm rounded-lg border-2 block w-full pl-10 p-2.5" style={{ borderColor: '#a3714f' }} placeholder="Search more" />
      </div>
      <button className="Button p-2.5 w-52 ml-4 text-sm font-medium drop-shadow-lg">Recruitment</button>
    </form>
  );
};

export default Searchbar;
