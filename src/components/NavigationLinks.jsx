import { Link } from "react-router-dom";

const NavigationLinks = ()=>{
    return(
        <div className="d-flex justify-content-center">
                    <Link to="/" className="btn btn-primary mx-2">Home</Link>
                    <Link to="/dashboard" className="btn btn-primary mx-2">Dashboard</Link>
                    <Link to="/navbar" className="btn btn-primary mx-2">Navbar</Link>
                    <Link to="/registration" className="btn btn-primary mx-2">Registration</Link>
                    <Link to="/transaction-history" className="btn btn-primary mx-2">Transaction History</Link>
                    <Link to="/fund-transfer" className="btn btn-primary mx-2">Fund Transfer</Link>
                    <Link to="/bill-payments" className="btn btn-primary mx-2">Bill Payments</Link>
                    <Link to="/account-details" className="btn btn-primary mx-2">Account Details</Link>
                    <Link to="/customer-support" className="btn btn-primary mx-2">Customer Support</Link>
                    <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                </div>
    )
}

export default NavigationLinks;