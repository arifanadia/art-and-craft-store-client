import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from '../../Provider/AuthProvider'
import display from '../../assets/images/signUp.jpg'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');


    const handleSignUp = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const check = form.get('check')

        console.log(name, email, photo, password, check);

        setError('')

        if (password.length < 6) {
            setError("your password length are less than 6 character")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError("you must have to use a lowercase letter in password")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("you must have to use uppercase letter in password")
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);

                const user = { name, email, photo, password, check }
                axios.post('https://art-and-craft-store-5vy1glsyo-arifanadias-projects.vercel.app/users', user)
                    .then(data => {
                        if (data.data.insertedId) {

                            Swal.fire({
                                title: 'success!',
                                text: 'user added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }

                    })
                    .catch(error => {
                        console.error(error)
                    });


                updateUserProfile(name, photo)
                    .then(() => console.log("profile updated"))
                    .catch()
            })
            .catch(error => {
                console.error(error);
                toast.error('user register failed')
            })



    }
    return (
        <div className="md:flex gap-6 bg-base-200 my-10">
            <div className="flex-1 text-center py-8"
                style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${display})` }}>
                <Link to={'/'}><button className='flex  text-white items-center gap-4 text-xl font-semibold'><FaRegArrowAltCircleLeft />Back to Home</button></Link>
                <div className="my-72">
                <h2 className="text-center text-3xl font-bold leading-relaxed text-white">Welcome to our Natures Touch !!! </h2>
                <h4 className="text-lg text-white font-semibold">Nice to meet you! Enter your details to register.</h4>

                </div>
            </div>
            <div className="flex-1 bg-[#F4F3F0] max-w-4xl p-24 my-10 mx-auto shadow-xl" >
                <h2 className="text-center text-3xl font-bold leading-relaxed ">Sign Up Now !!! </h2>
                <form onSubmit={handleSignUp} className='space-y-4'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control relative ">
                        <label className="label">
                            <span className="label-text">Password</span>
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
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="check" id="" />
                        <p> I agree the
                            <Link>
                                <span>Term and Conditions</span>
                            </Link></p>
                    </div>

                    <button className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10">Sign Up</button>
                    <p className="text-center  mt-4">Already have an account? <Link className="text-blue-500" to={'/signIn'}>Sign In </Link> </p>
                </form>
                {
                    error && <p className="text-xl text-center my-5 text-red-800">{error}</p>
                }

            </div>
        </div>
    );
};

export default SignUp;