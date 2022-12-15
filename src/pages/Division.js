import { Link } from "react-router-dom";
import Header from "../components/Header"

const DivisionPage = () => {
    return(
        <div className="">
            <Header type="title" title="ASE Division"/>
            <div className=" flex-1 p-26 lg:px-28 !bg-white" data-dev-hint="content">
                <div className="max-w-7xl mx-auto flex flex-col ">
                    <div className="pt-6" data-dev-hint="navigator">
                        <Link to="/" className="group w-max px-5 py-3 Button !border-4 !border-white flex gap-2 no-underline">
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:stroke-orangeAccent-500" d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="group-hover:stroke-orangeAccent-500" d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium text-xl ">Back</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-16 py-44 mb-8">
                        <div className="flex flex-row  gap-4">
                            <img src={process.env.PUBLIC_URL + "/image/Polygon1.png"} alt="webdev" />
                            <h1 className="font-bold text-6xl" >WEB DEV</h1>
                        </div>
                        <div className="flex flex-row-reverse  gap-4">
                            <img src={process.env.PUBLIC_URL + "/image/Polygon2.png"} alt="webdev" />
                            <h1 className="font-bold text-6xl" >GAME DEV</h1>
                        </div>
                        <div className="flex flex-row  gap-4">
                            <img src={process.env.PUBLIC_URL + "/image/Polygon3.png"} alt="webdev" />
                            <h1 className="font-bold text-6xl" >MOBILE DEV</h1>
                        </div>
                        <div className="flex flex-row-reverse  gap-4">
                            <img src={process.env.PUBLIC_URL + "/image/Polygon5.png"} alt="webdev" />
                            <h1 className="font-bold text-6xl text-right" >UI/UX <br /> DESIGN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DivisionPage;