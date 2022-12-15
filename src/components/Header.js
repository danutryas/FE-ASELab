import { Link, useLocation } from "react-router-dom";


const Header = ({type,title}) => {
    if (type == 'link') {
        return <HeaderLink />
    }else if (type="title"){
        return <HeaderTitle title={title}/>
    }
}


const HeaderTitle = ({title}) => {
    return (
        <header className="flex flex-row justify-center px-14 bg-orangeAccent-500 h-20 items-center">
            <h1 className="font-medium text-4xl text-white">{title}</h1>
        </header>
    )
}

const HeaderLink = () => {
    const location = useLocation()

    const navLink = [
        {
            location : "/",
            text : "Home",
        },
        {
            location : "/member",
            text : "Member",
        },
        {
            location : "/research",
            text : "Research",
        },
        {
            location : "/product",
            text : "Product",
        },
        {
            location : "/division",
            text : "Division",
        },
        {
            location : "/event",
            text : "Event",
        },
        {
            location : "/about",
            text : "About Us",
        },
    ]


    return(
        <header className="flex flex-row justify-between px-14 bg-orangeAccent-500 h-20 items-center">
            <Link to="/" className="font-medium text-3xl no-underline text-white">ASE LAB</Link>
            <nav className="h-full flex gap-12" id="nav-header">
                {
                    navLink.map((link,index) => {
                        return(
                            <Link key={index} to={link.location} className={`flex h-full items-center no-underline`} >
                                <p className={`h-1/3 flex items-center font-medium text-xl ${location.pathname == link.location ? 'border-b-2 !text-white':''}`} style={{color: "#5F5F5F"}}>
                                    {link.text}
                                </p>
                            </Link>
                        )
                    })
                }
            </nav>
            <div className="flex gap-12">
                <button className="h-10 w-10 flex justify-center items-center">
                    <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 31C16.2075 31 17.9981 29.2653 17.9981 27.125H10.0019C10.0019 29.2653 11.7925 31 14 31V31ZM27.4618 21.9355C26.2543 20.6786 23.995 18.7877 23.995 12.5938C23.995 7.88926 20.59 4.12324 15.9987 3.1993V1.9375C15.9987 0.867637 15.1037 0 14 0C12.8963 0 12.0013 0.867637 12.0013 1.9375V3.1993C7.41002 4.12324 4.00503 7.88926 4.00503 12.5938C4.00503 18.7877 1.74566 20.6786 0.538167 21.9355C0.163168 22.3261 -0.00308178 22.7929 4.32116e-05 23.25C0.00691819 24.243 0.811291 25.1875 2.00629 25.1875H25.9937C27.1887 25.1875 27.9937 24.243 28 23.25C28.0031 22.7929 27.8368 22.3254 27.4618 21.9355Z" fill="#5F5F5F"/>
                    </svg>
                </button>
                <button className="h-10 w-10 flex justify-center items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C11.7565 0 7.68687 1.65444 4.68629 4.59935C1.68571 7.54427 0 11.5384 0 15.7032C0.000566147 16.2394 0.0302378 16.7752 0.0888889 17.3084C0.504873 21.1654 2.36052 24.7348 5.2983 27.329C8.23608 29.9232 12.0481 31.3586 16 31.3586C19.9519 31.3586 23.7639 29.9232 26.7017 27.329C29.6395 24.7348 31.4951 21.1654 31.9111 17.3084C31.9698 16.7752 31.9994 16.2394 32 15.7032C32 11.5384 30.3143 7.54427 27.3137 4.59935C24.3131 1.65444 20.2435 0 16 0V0ZM25.6356 23.4152C25.6178 23.4152 25.5289 23.5548 25.5111 23.5548C24.3473 24.9202 22.8924 26.0185 21.249 26.7721C19.6057 27.5257 17.8139 27.9163 16 27.9163C14.1861 27.9163 12.3943 27.5257 10.751 26.7721C9.1076 26.0185 7.65271 24.9202 6.48889 23.5548C6.47111 23.5548 6.38222 23.4152 6.36444 23.4152C6.26682 23.2761 6.21134 23.1128 6.20444 22.9441C6.20776 22.761 6.2672 22.5832 6.37503 22.4338C6.48285 22.2844 6.63404 22.1704 6.80889 22.1066C8.12444 21.6704 9.38667 21.2516 9.74222 21.1644C9.73396 21.125 9.73445 21.0844 9.74365 21.0453C9.75286 21.0061 9.77056 20.9694 9.79556 20.9376C9.84217 20.7687 9.94046 20.6179 10.0772 20.5056C10.2139 20.3932 10.3824 20.3248 10.56 20.3094L12.8178 20.135C12.7987 19.6581 12.684 19.1897 12.48 18.7566V18.7391C12.2895 18.2463 12.0194 17.7867 11.68 17.3782C10.7503 16.1879 10.2556 14.7252 10.2756 13.2256C10.1772 11.6834 10.6996 10.1649 11.7302 8.99678C12.7608 7.82865 14.2174 7.10418 15.7867 6.97919H16.2133C17.7826 7.10418 19.2392 7.82865 20.2698 8.99678C21.3004 10.1649 21.8228 11.6834 21.7244 13.2256C21.7444 14.7252 21.2497 16.1879 20.32 17.3782C19.9806 17.7867 19.7105 18.2463 19.52 18.7391V18.7566C19.316 19.1897 19.2013 19.6581 19.1822 20.135L21.44 20.3094C21.6176 20.3248 21.7861 20.3932 21.9228 20.5056C22.0595 20.6179 22.1578 20.7687 22.2044 20.9376C22.2294 20.9694 22.2471 21.0061 22.2563 21.0453C22.2656 21.0844 22.266 21.125 22.2578 21.1644C22.6133 21.2516 23.8756 21.6704 25.1911 22.1066C25.3215 22.1476 25.4401 22.2182 25.5375 22.3127C25.6348 22.4072 25.7081 22.5228 25.7514 22.6503C25.7947 22.7777 25.8067 22.9134 25.7866 23.0463C25.7665 23.1792 25.7147 23.3056 25.6356 23.4152V23.4152Z" fill="#5F5F5F"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}
export default Header;