import { useRef } from "react";

function Slider({title,children}) {
    const slider = useRef()
    
    const slideLeft= () => slider.current.scrollLeft = slider.current.scrollLeft - 600;
    
    const slideRight = () => {
    console.log(slider.current.scrollLeft)

        slider.current.scrollLeft = slider.current.scrollLeft + 600;
    } 

    return ( 
        <div className="flex gap-8 flex-col">
            <div className="flex justify-between">
                <h2 className="font-medium text-4xl leading-10" style={{color : "#343434"}}>{title}</h2>
                <div className="flex gap-2">
                    <button onClick={slideLeft} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button onClick={slideRight} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div className="no-scrollbar whitespace-nowrap overflow-x-auto scroll-smooth " ref={slider}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default Slider;