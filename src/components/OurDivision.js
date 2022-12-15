const DivisionSection = () => {

    return(
        <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col gap text-center gap-6 mb-9" data-dev-hint="section header" >
                <h1 className="font-medium text-4xl leading-10" style={{color : "#353535"}}>Our Division</h1>
                <p className="text-2xl leading-7" style={{color : "#353535"}}>There are five division in Advanced Software Engineering Laboratory</p>
            </div>
            <div className="flex flex-col items-center" data-dev-hint="container">
                <div className="" data-dev-hint="hexagonArea">
                    <div className="-mb-24" data-dev-hint="hexagon">
                        <img src={process.env.PUBLIC_URL + "/image/Polygon1.png"} alt="" />
                    </div>
                </div>
                <div className="mid flex" data-dev-hint="hexagonArea">
                    <div className="mr-28" data-dev-hint="hexagon">
                        <img src={process.env.PUBLIC_URL + "/image/Polygon2.png"} alt="" />
                    </div>
                    <div className="ml-28" data-dev-hint="hexagon">
                        <img src={process.env.PUBLIC_URL + "/image/Polygon3.png"} alt="" />
                    </div>
                </div>
                <div className="bottom" data-dev-hint="hexagonArea">
                    <div className="-mt-24" data-dev-hint="hexagon">
                        <img src={process.env.PUBLIC_URL + "/image/Polygon5.png"} alt="" />
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <button className="Button py-3 px-5 text-xl font-medium drop-shadow-lg leading-7">See detail</button>
            </div>
        </div>
    )
}

export default DivisionSection;