import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AboutUsPage = () => {
    const navigate = useNavigate()

    return(
        <div className="relative min-h-screen md:flex md:flex-col " data-dev-hint="container" id="bg">
            <Header type="link" />
            <div className=" flex-1 p-6 lg:px-8" data-dev-hint="content">
                <div className="max-w-7xl mx-auto flex flex-col gap-14">
                    <div className="pt-6" data-dev-hint="navigator">
                        <button className="group w-max px-5 py-3 Button !border-4 !border-white flex gap-2 no-underline" onClick={()=>navigate(-1)}>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:stroke-orangeAccent-500" d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="group-hover:stroke-orangeAccent-500" d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium text-xl ">Back</span>
                        </button>
                    </div>
                    <div className="flex flex-col gap-12" >
                        <h1 className="text-black text-6xl font-bold text-center">About Us</h1>
                        <div className={`flex flex-row rounded-r-lg justify-between`}>
                            <div className="flex bg-white w-auto px-12 items-center rounded-l-lg">
                                <img src={process.env.PUBLIC_URL + "/logoASE.png"} />
                            </div>
                            <div className={`flex flex-col gap-4 h-auto w-auto px-8 py-2 justify-center text-center rounded-r-lg max-w-2xl`} style={{maxWidth : "85ch",background : "linear-gradient(90deg, rgba(250, 174, 122, 0) 0%, #F68C58 100%)",boxShadow:"0px 0px 100px 10px rgba(0, 0, 0, 0.15)"}} > 
                                <p className="text-2xl">Lorem ipsum dolor sit amet consectetur. Risus elit viverra libero facilisis erat. Amet ornare pulvinar cursus enim. Ultricies donec in etiam consequat proin. Pulvinar ac metus bibendum bibendum dictum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 " >
                        <h1 className="text-black text-6xl font-bold text-center">Our Vision</h1>
                        <div className="flex flex-row-reverse justify-between rounded-l-lg">
                            <div className="flex bg-white px-12 items-center rounded-r-lg">
                                <img src={process.env.PUBLIC_URL + "/image/vision.png"} />
                            </div>
                            <div className={`flex flex-col gap-4 h-auto w-auto px-8 py-2 justify-center text-center rounded-l-lg`} style={{maxWidth : "78ch", background : "linear-gradient(90deg, #F68C58 0%, rgba(250, 174, 122, 0) 105.13%)",boxShadow:"0px 0px 100px 10px rgba(0, 0, 0, 0.15)"}}> 
                                <p className="text-2xl">Creating an atmosphere and an environment that are comfortable in RPLGDC Laboratorium, creating a more quality assured working conditions & events, working together aswell as expanding the sphere of influence to other IF Faculty laboratoriums and other majors in other faculties, giving a qualified & capable human resources output that are needed in IT World.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 ">
                        <h1 className="text-black text-6xl font-bold text-center">Our Misson</h1>
                        <div className={`flex flex-row rounded-r-lg justify-between`}>
                            <div className="flex bg-white w-auto px-12 items-center rounded-l-lg">
                                <img src={process.env.PUBLIC_URL + "/image/mission.png"} />
                            </div>
                            <div className="flex flex-col gap-4 h-auto w-auto py-6 px-8 justify-center text-center rounded-r-lg max-w-2xl" style={{maxWidth : "85ch",background : "linear-gradient(90deg, rgba(250, 174, 122, 0) 0%, #F68C58 100%)",boxShadow:"0px 0px 100px 10px rgba(0, 0, 0, 0.15)"}}> 
                                <p className="text-2xl">
                                    Creating a clean, fresh and also a comfortable laboratorium environment.
                                </p>
                                <p className="text-2xl">
                                    Giving a more polished and 'quality oriented' laboratorium events & workshops.
                                </p>
                                <p className="text-2xl">
                                    Making collaborations and working together with other laboratoriums, inside or outside of the IF Faculty with an interest in software development.
                                </p>
                                <p className="text-2xl">
                                    Giving an opportunity to learn, propose any possible projects aswell as implementing brainspark or workshop sessions that could stimulate a positive feedback in the IT World.
                                </p>
                                <p className="text-2xl">
                                    Persuade other laboratorium members to work together with others in any events to achieve a maximized laboratorium performances.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 " >
                        <h1 className="text-black text-6xl font-bold text-center">Our Vision</h1>
                        <div className="flex flex-row-reverse justify-between rounded-l-lg">
                            <div className="flex bg-white px-12 items-center rounded-r-lg">
                                <img src={process.env.PUBLIC_URL + "/image/benefit.png"} />
                            </div>
                            <div className={`flex flex-col gap-4 h-auto w-auto px-8 py-6 justify-center text-center rounded-l-lg`} style={{maxWidth : "78ch", background : "linear-gradient(90deg, #F68C58 0%, rgba(250, 174, 122, 0) 105.13%)",boxShadow:"0px 0px 100px 10px rgba(0, 0, 0, 0.15)"}}> 
                                <p className="text-2xl">Creating a clean, fresh and also a comfortable laboratorium environment.</p>
                                <p className="text-2xl">Giving a more polished and 'quality oriented' laboratorium events & workshops.</p>
                                <p className="text-2xl">Making collaborations and working together with other laboratoriums, inside or outside of the IF Faculty with an interest in software development.</p>
                                <p className="text-2xl">Giving an opportunity to learn, propose any possible projects aswell as implementing brainspark or workshop sessions that could stimulate a positive feedback in the IT World.</p>
                                <p className="text-2xl">Persuade other laboratorium members to work together with others in any events to achieve a maximized laboratorium performances.</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-12 sm:px-0">
                        <div className="h-auto">
                        <div className="flex flex-col items-center gap-6">
                            <h1 className='text-4xl font-medium text-center' style={{color:"#353535"}}>Join with us for more technology update</h1>
                            <h2 className='text-2xl font-medium text-center' style={{color:"#353535"}}>Join now and make yourself the best digital talent in Southeast Asia</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUsPage;
