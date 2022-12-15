import { useState,useEffect,useRef,useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { MemberCard } from "../components/Cards";
import members from '../members.json';

const MemberPage = () => {
    const aslabSection = useRef()
    const memberSection = useRef()
    const [aslabRender,setAslabRender] = useState([])
    const [memberRender,setMemberRender] = useState([])
    
    return(
        <div className="min-h-screen md:flex md:flex-col " data-dev-hint="container" id="bg">
            <Header type="link"/>
            <div className=" flex-1 p-6 lg:px-8" data-dev-hint="content">
                <div className="max-w-7xl mx-auto flex flex-col gap-14">
                    <div className="pt-6" data-dev-hint="navigator">
                        <Link to="/" className="group w-max px-5 py-3 Button !border-4 !border-white flex gap-2 no-underline">
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <path className="group-hover:stroke-orangeAccent-500" d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path className="group-hover:stroke-orangeAccent-500" d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-medium text-xl ">Back</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-16 w-full">
                        <h1 className="text-black text-6xl font-bold text-center max-w-5xl mx-auto" style={{color: "#353535"}}>Member of Advanced Software Engineering Laboratory</h1>
                        <div className="flex flex-col gap-12 justify-center items-center">
                            <h2 className="font-medium text-4xl text-textColor" >Advisory Lecturer</h2>
                            <MemberCard tag="Advisory Lecturer" name="Jati H. Husen" gen="6" />
                        </div>
                        <div className="flex flex-col gap-12 justify-center items-center">
                            <h2 className="font-medium text-4xl text-textColor">Laboratory Coordinator</h2>
                            <MemberCard tag="Laboratory Coordinator" name="Daffa Hilmy Fadhlurrohman" gen="6" />
                        </div>
                        <div className={`flex flex-col gap-16 w-full ${aslabRender.length === 1 ? "items-center": ""}`} ref={aslabSection}>
                            <h2 className="font-medium text-4xl text-textColor">Laboratory Assistant</h2>
                            <AslabPagination aslabRender={aslabRender} aslabSection={aslabSection} setAslabRender={setAslabRender} />
                        </div>
                        <div className={`flex flex-col gap-16 w-full ${aslabRender.length === 1 ? "items-center": ""}`} ref={memberSection}>
                            <h2 className="font-medium text-4xl text-textColor">Member</h2>
                            <MemberPagination memberRender={memberRender} memberSection={memberSection} setMemberRender={setMemberRender} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 mt-28">
                        <h1 className='text-4xl font-medium text-center' style={{color:"#353535"}}>Join with us for more technology update</h1>
                        <h2 className='text-2xl font-medium text-center' style={{color:"#353535"}}>Join now and make yourself the best digital talent in Southeast Asia</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MemberPage;

const DOTS = '...';

const MemberPagination = ({memberRender,memberSection,setMemberRender}) => {
    const member = members.filter((member) => member.role === "Member")
    const [currPage, setCurrPage] = useState(0)
    const [totalCardRenderPerRow,setTotalCardRenderPerRow] = useState(0)

    const setMemberToRender = () => {
        // get render list member 
        const widthWrapper = memberSection.current.offsetWidth
        const totalCardRender = Math.floor(widthWrapper / 328)
        const idxBottom = totalCardRender * 3 * currPage
        const idxTop = idxBottom + totalCardRender * 3
        setTotalCardRenderPerRow(totalCardRender)
        setMemberRender(
            member.slice(idxBottom,idxTop)
        )
    }
    const onPrev =() => {
        setCurrPage((prev) => prev - 1)
    } 
    const onNext =() => {
        setCurrPage((prev) => prev + 1)
    } 
    const onPageChange = (pageNumber) => {
        // check if page number is integer
        if (Number.isInteger(pageNumber)){
            setCurrPage(pageNumber - 1)
        }
    }

    const paginationRange = usePagination({
        // get pagination items
        currentPage : currPage + 1,
        totalCount: member.length,
        siblingCount : 1,
        pageSize : totalCardRenderPerRow * 3
    });

    useEffect(() => {
        // get render list member 
        const widthWrapper = memberSection.current.offsetWidth
        const totalCardRender = Math.floor(widthWrapper / 328)
        const idxBottom = totalCardRender * 3 * currPage
        const idxTop = idxBottom + totalCardRender * 3
        setMemberRender(member.slice(idxBottom,idxTop))
        // set total card per row
        setTotalCardRenderPerRow(totalCardRender)
        
    },[currPage])
    
    useEffect(() => {
        // re-check render component when window is resized
        window.addEventListener("resize",() => {
            setMemberToRender();
        })
    },[])
    return(
        <>
            <div className={`grid grid-rows-${memberRender.length < 9 ? Math.ceil(memberRender.length / totalCardRenderPerRow ) : 3} grid-cols-${totalCardRenderPerRow}  gap-14 justify-items-center`}>
                {
                    memberRender.map((member) => {
                        return(
                            <MemberCard tag={member.role} name={member.name} gen={member.gen} />
                        )
                    })
                }
            </div>
            <div className="flex justify-center gap-5">
                <button onClick={onPrev} disabled={currPage <= 0} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <ul className="flex items-center gap-2">
                    {
                        paginationRange.map((pageNumber,index) => {
                            return(
                                <li key={index} className={`h-12 w-12 rounded-xl border-4 border-white text-white  flex items-center justify-center ${pageNumber ===  currPage + 1? "!bg-orangeAccent-500" : "bg-orangeAccent-300"} hover:bg-orangeAccent-400`} >
                                    <button className="h-full w-full" onClick={() => onPageChange(pageNumber)}>
                                        {pageNumber}
                                    </button>
                                </li>
                            )                            
                        })
                    }
                </ul>
                <button onClick={onNext} disabled={currPage >= Math.ceil(Math.ceil(member.length / (totalCardRenderPerRow * 3)) - 1)} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

const AslabPagination = ({aslabRender,aslabSection,setAslabRender}) => {
    const aslab = members.filter((member) => member.role === "Laboratory Assistant")
    const [currPage, setCurrPage] = useState(0)
    const [totalCardRenderPerRow,setTotalCardRenderPerRow] = useState(0)

    const setAslabToRender = () => {
        // get render list aslab 
        const widthWrapper = aslabSection.current.offsetWidth
        const totalCardRender = Math.floor(widthWrapper / 328)
        const idxBottom = totalCardRender * currPage
        const idxTop = idxBottom + totalCardRender
        setTotalCardRenderPerRow(totalCardRender)
        setAslabRender(
            aslab.slice(idxBottom,idxTop)
        )
    }
    const onPrev =() => {
        setCurrPage((prev) => prev - 1)
    } 
    const onNext =() => {
        setCurrPage((prev) => prev + 1)
    } 
    const onPageChange = (pageNumber) => {
        // check if page number is integer
        if (Number.isInteger(pageNumber)){
            setCurrPage(pageNumber - 1)
        }
    }

    const paginationRange = usePagination({
        // get pagination items
        currentPage : currPage + 1,
        totalCount: aslab.length,
        siblingCount : 1,
        pageSize : totalCardRenderPerRow
    });

    useEffect(() => {
        // get render list aslab 
        const widthWrapper = aslabSection.current.offsetWidth
        const totalCardRender = Math.floor(widthWrapper / 328)
        const idxBottom = totalCardRender * currPage
        const idxTop = idxBottom + totalCardRender
        setAslabRender(aslab.slice(idxBottom,idxTop))
        // set total card per row
        setTotalCardRenderPerRow(totalCardRender)
    },[currPage])
    
    useEffect(() => {
        // re-check render component when window is resized
        window.addEventListener("resize",() => {
            setAslabToRender();
        })
    },[])
    
    return(
        <>
            <div className={`grid  grid-cols-${aslabRender.length} justify-items-center`}>
                {
                    aslabRender.map((aslab) => {
                        return(
                            <MemberCard tag={aslab.role} name={aslab.name} gen={aslab.gen} />
                        )
                    })
                }
            </div>
            <div className="flex justify-center gap-5">
                <button onClick={onPrev} disabled={currPage <= 0} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <ul className="flex items-center gap-2">
                    {
                        paginationRange.map((pageNumber,index) => {
                            return(
                                <li key={index} className={`h-12 w-12 rounded-xl border-4 border-white text-white  flex items-center justify-center ${pageNumber ===  currPage + 1? "!bg-orangeAccent-500" : "bg-orangeAccent-300"} hover:bg-orangeAccent-400`} >
                                    <button className="h-full w-full" onClick={() => onPageChange(pageNumber)}>
                                        {pageNumber}
                                    </button>
                                </li>
                            )                            
                        })
                    }
                </ul>
                <button onClick={onNext} disabled={currPage >= aslab.length / totalCardRenderPerRow - 1} className="h-12 w-12 rounded-xl border-4 border-white flex items-center justify-center" style={{backgroundColor:"#F15A24"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </>
    )
}


const usePagination = ({totalCount,pageSize,siblingCount = 1,currentPage}) => {

    return useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    const range = (start, end) => {
        // function to create array based on pagination status
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };
    
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount , 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount ,totalPageCount);

    // get the pagination status (ShowDots)
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    // define first and last page index
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // conditional return based on pagination status
    if (!shouldShowLeftDots && shouldShowRightDots) {
        // show right dots
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        // show left dots
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1,totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
        // show left and right dots
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
};