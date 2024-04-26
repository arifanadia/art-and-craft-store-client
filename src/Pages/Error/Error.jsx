import { useRouteError } from "react-router-dom";
import errorImg from '../../assets/error.png'


const Error = () => {
    const error = useRouteError()
    return (
        <div className="max-w-7xl mx-auto my-28">
            {
                error.status === 404 &&
                <div className="text-center">
                    <img className=" mx-auto" src={errorImg} alt="" />
                    <h1 className="text-6xl font-bold font-workSans text-mainColor my-6">Oops!</h1>
                    <p>The page you requested could not be found.</p>
                    <p>we are working on it :)</p>
                </div>
            }
            
        </div>
    );
};

export default Error;