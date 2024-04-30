import { Link, useLocation, useNavigate } from "react-router-dom";
import imageLog from '../../assets/images/light.webp'
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import SocialSignIn from "./SocialSignIn";

// import { toast } from "react-toastify";


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()


    const handleSignIn = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log( email,password)

       

        logIn(email, password)
            .then(result => {
                console.log(result.user);
                
                navigate(location?.state ? location.state : '/')
              
            })
            .catch(error => {
                console.error(error.message);
                toast.error('invalid email or password')
            })

    }
    return (
        <div className=" gap-6 bg-base-200 mb-10">

            <div className="flex-1 text-center py-6 "
                style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${imageLog})` }}>
                <Link to={'/'}><button className='flex  text-white items-center gap-4 text-xl font-semibold'><FaRegArrowAltCircleLeft />Back to Home</button></Link>
                <div className="my-24">
                    <h2 className="text-center m text-3xl font-bold leading-relaxed text-white">Dear User Welcome Back to our Natures Touch !!! </h2>

                    <h4 className="text-lg text-white font-semibold">we are happy to see you again! Please Sign In With Valid email address.</h4>
                </div>
            </div>
            <div className="flex-1 bg-[#F4F3F0] max-w-4xl p-24 my-16 mx-auto shadow-xl" >
                <h2 className="text-center text-3xl font-bold leading-relaxed ">Sign In Now !!! </h2>
                <form onSubmit={handleSignIn} className='space-y-4'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control relative ">
                        <label className="label">
                            <span className="label-text">password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="Your Password" name="password"
                            className="input input-bordered w-full" required />
                        <span className="absolute right-3 top-14"
                            onClick={() => setShowPassword(!showPassword)}>

                            {
                                showPassword ? <FiEyeOff /> : <FiEye />
                            }
                        </span>
                    </div>


                    <button className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10">Sign In</button>
                    <p className="text-center  mt-4">Dont have an Account? <Link className="text-blue-500" to={'/signUp'}>Sign Up </Link> </p>
                    <p className="my-5 text-center">------------ or Connect with ------------</p>
                    <SocialSignIn></SocialSignIn>
                </form>
            </div>
        </div>

    );
};

export default SignIn;