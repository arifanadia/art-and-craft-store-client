import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;