import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "../style.css";
import product from "../product.json";
import { ProductCard } from "../components/Cards";
import { useState } from "react";

const ProductPage = () => {
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const setFilteringProduct = (category) => {
    setFilterBy((prev) => [...prev, category]);
    setFilteredProduct(
      product.filter((product) => product.category === category)
    );
  };

  return (
    <div
      className="min-h-screen md:flex md:flex-col "
      data-dev-hint="container"
      id="bg"
    >
      <Header type="link" />
      <div className="flex flex-col " data-dev-hint="wrapper">
        <div className=" flex-1 p-6 lg:px-8" data-dev-hint="content">
          <div className="max-w-7xl mx-auto flex flex-col gap-14">
            <div className="pt-6" data-dev-hint="navigator">
              <button
                className="group w-max px-5 py-3 Button !border-4 !border-white flex gap-2 no-underline"
                onClick={() => navigate(-1)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-orangeAccent-500"
                    d="M19 12H5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="group-hover:stroke-orangeAccent-500"
                    d="M12 19L5 12L12 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-xl">Back</span>
              </button>
            </div>
            <div className="h-auto">
              <div className="sliderAx h-auto">
                <div id="slider-1" className="container mx-auto">
                  <div className="bg-cover bg-center flex flex-row h-auto text-gray-700 py-8 px-10 object-fill">
                    <div style={{ width: "44%", marginTop: "8%" }}>
                      <p className="text-3xl font-medium mb-4">Product</p>
                      <p className="text-lg mb-9">
                        This is Advanced Software Engineering
                        <br />
                        Laboratory product that have been made.
                        <br />
                        Check it out!
                      </p>
                    </div>
                    <div className="md:full rounded-lg">
                      <img
                        className="rounded-xl"
                        src="/image/event.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <div className="h-28">
              <form className="flex items-center w-11/12 mb-auto mx-auto">
                <label htmlFor="search" className="sr-only">
                  Search More
                </label>
                <div className="w-full">
                  <div className="relative">
                    <div
                      className="icon absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      style={{ top: "21px" }}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 dark:text-gray-400"
                        style={{ color: "rgb(125, 87, 61)", opacity: "0.7" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-transparent border text-gray-900 text-sm rounded-lg border-2 block w-full pl-10 p-2.5"
                    style={{ borderColor: "#a3714f" }}
                    placeholder="Search more"
                  />
                </div>
                <button className="Button p-2.5 w-52 ml-4 text-sm font-medium drop-shadow-lg">
                  Search
                </button>
              </form>
            </div>
            <div className="h-28">
              <div className="h-auto flex items-center ml-12 mr-14">
                <div className="container mx-auto ">
                  <p className="text-3xl ml-4">Our Product</p>
                  <ul className="flex items-center ml-4 mt-4 mb-4">
                    <li className="mr-4">
                      <button
                        className="rounded-md py-1 px-2 w-fit text-center font-medium text-gray-600"
                        style={{
                          backgroundColor: "#E7E5E5",
                          minWidth: "100px",
                        }}
                        onClick={() => setFilteringProduct("Game")}
                      >
                        Game
                      </button>
                    </li>
                    <li className="mr-4">
                      <button
                        className="rounded-md py-1 px-2 w-fit text-center font-medium text-gray-600"
                        style={{
                          backgroundColor: "#E7E5E5",
                          minWidth: "100px",
                        }}
                        onClick={() => setFilteringProduct("Web")}
                      >
                        Web
                      </button>
                    </li>
                    <li className="mr-4">
                      <button
                        className="rounded-md py-1 px-2 w-fit text-center font-medium text-gray-600"
                        style={{
                          backgroundColor: "#E7E5E5",
                          minWidth: "100px",
                        }}
                        onClick={() => setFilteringProduct("Android")}
                      >
                        Android
                      </button>
                    </li>
                    <li>
                      <button
                        className="rounded-md py-1 px-2 w-fit text-center font-medium text-gray-600"
                        style={{
                          backgroundColor: "#E7E5E5",
                          minWidth: "100px",
                        }}
                        onClick={() => setFilteringProduct("UI/UX")}
                      >
                        UI/UX
                      </button>
                    </li>
                  </ul>
                </div>
                <select class="bg-transparent mr-4 border border-gray-900 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                  <option selected>Sort by Date</option>
                </select>
                <select class="bg-transparent border border-gray-900 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                  <option selected>Sort by A-Z</option>
                </select>
              </div>
            </div>
            <div className="h-auto">
              <div class="grid grid-cols-3 items-start gap-6 mt-4">
                {filterBy.length === 0
                  ? product.map((event) => {
                      return (
                        <ProductCard
                          eventCategory={event.category}
                          eventTitle={event.title}
                          eventBy={event.by}
                          eventDesc={event.desc}
                        />
                      );
                    })
                  : filteredProduct.map((product) => {
                      return (
                        <ProductCard
                          eventCategory={product.category}
                          eventTitle={product.title}
                          eventBy={product.by}
                          eventDesc={product.desc}
                        />
                      );
                    })}
              </div>
            </div>
            <div className="h-72">
              <div
                className={`grid grid-rows-4 grid-cols-4  gap-8 justify-items-center`}
              ></div>
              <div className="flex justify-center gap-5">
                <button
                  className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center"
                  style={{ backgroundColor: "#F15A24" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul className="flex items-center gap-2">
                  <li
                    className={`h-12 w-12 rounded-xl border-4 border-white text-white  flex items-center justify-center bg-orangeAccent-500 hover:bg-orangeAccent-400`}
                  >
                    <button className="h-full w-full">1</button>
                  </li>
                  <li
                    className={`h-12 w-12 rounded-xl border-4 border-white text-white  flex items-center justify-center bg-orangeAccent-300 hover:bg-orangeAccent-400`}
                  >
                    <button className="h-full w-full">2</button>
                  </li>
                  <li
                    className={`h-12 w-12 rounded-xl border-4 border-white text-white  flex items-center justify-center bg-orangeAccent-300 hover:bg-orangeAccent-400`}
                  >
                    <button className="h-full w-full">3</button>
                  </li>
                </ul>
                <button
                  className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center"
                  style={{ backgroundColor: "#F15A24" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-64">
              <div className="px-4 py-12 sm:px-0">
                <div className="h-auto">
                  <div className="flex flex-col items-center gap-6">
                    <h1
                      className="text-4xl font-medium text-center"
                      style={{ color: "#353535" }}
                    >
                      Join with us for more technology update
                    </h1>
                    <h2
                      className="text-2xl font-medium text-center"
                      style={{ color: "#353535" }}
                    >
                      Join now and make yourself the best digital talent in
                      Southeast Asia
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
