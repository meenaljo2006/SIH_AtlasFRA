
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

const MainPage = ()=>{

    const navigate = useNavigate(); 

    const handleLogin = () => {
        navigate('/login'); 
    };

    return(
        <>
            <h2>This is the main Page</h2>
            <button onClick={handleLogin}>Officer Login</button>
        </>
    )


}

export default MainPage;