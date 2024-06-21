import React, { Suspense, startTransition, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../styles/global";
import Button from "../components/button/Button";
import { FiChevronRight } from "react-icons/fi";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { CardProduct } from "../components/cardProduct";

const Details = React.lazy(() => import("mfe/DetailsMfe"))
function Home() {

    const [hander, setHander] = useState(false);

    function click() {
        setHander(true)
    }

    const navigate = useNavigate();

    function handle() {
        startTransition( () => {
        navigate("/test") 
        })
    }

    return (
        <div>
            <Header/>
            <CardProduct onClick={handle}/>
            <Suspense fallback={<div>Loading...</div>}>
                {/* {
                    hander && (<Details/>)
                } */}
                </Suspense>
                <GlobalStyle/>
                <Button onClick={handle}>
                    <FiChevronRight size={50} data-testid="right-arrow-icon"/>
                </Button>
            <Footer/>      
        </div>
    )
}

export default Home;