import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from ".";
import { GlobalStyle } from "../styles/global";
import Button from "../components/button/Button";
import { FiChevronRight } from "react-icons/fi";
import { Footer } from "../components/footer";

function Home() {

    const navigate = useNavigate();

    function handle() {
        startTransition( () => {
        navigate("/test") 
        })
    }
    const buttonStyle = {
        backgroundColor: 'transparent',
        border: '0px',
        marginLeft: '20px' 
    }

    return (
        <div>
            <Dashboard/>
                <GlobalStyle/>

                <Button onClick={handle}>
                    <FiChevronRight size={50}/>
                </Button>
                {/* <button onClick={handle} style={buttonStyle}>
                    <FiChevronRight size={50}/>
                </button> */}
            <Footer/>      
        </div>
    )
}

export default Home;