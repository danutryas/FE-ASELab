const HeroBanner = (e) => {

    return(
        <div className="pt-3">
            <div className="flex flex-row h-auto gap-4 ">
                <div className="flex flex-col flex-1 gap-7 ">
                    <h1 className="font-medium text-4xl w-11/12 leading-tight" style={{color: "#343434"}}>Advanced Software Engineering Telkom University</h1>
                    <p className="text-2xl w-11/12" style={{color: "#343434"}} >Advanced Software Engineering Telkom University is a research laboratory that focuses on software design and development</p>
                    <div className="w-fit ">
                        <button className="Button py-3 px-5 text-xl font-medium drop-shadow-lg leading-7" >More about us</button>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-auto rounded-xl " height="380px" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
                <div className="w-9"></div>
            </div>
        </div>
    )

};

export default HeroBanner;
