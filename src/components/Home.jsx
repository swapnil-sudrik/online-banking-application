import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import NavigationLinks from "./NavigationLinks";

const Home = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="text-center p-5">
                    <h4>Welcome to Our</h4>
                    <h2>Online Banking Application</h2>
                    <img src={logo} alt="Welcome" className="img-fluid mt-3" />
                </div>
            </div>
            <NavigationLinks />
        </>
    )
}
export default Home;