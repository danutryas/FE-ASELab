function Slider({title,children}) {
    return ( 
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between">
                <h2 className="font-medium text-4xl leading-10" style={{color : "#343434"}}>{title}</h2>
                <div className="flex gap-2">
                    <button className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex gap-10">
                {children}
            </div>
        </div>
     );
}

export default Slider;