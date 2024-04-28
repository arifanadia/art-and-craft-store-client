// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider'
import display from '../../assets/images/signUp.jpg'
import { Link } from "react-router-dom";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        const check = form.get('check')

        console.log(name, email, photo, password, check);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })




        // axios.post('http://localhost:5000/craftItems', )
        //     .then(data => {
        //         form.reset()
        //         if (data.data.insertedId) {

        //             Swal.fire({
        //                 title: 'success!',
        //                 text: 'craft item added successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })
        //         }

        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }



    return (
        <div className="md:flex gap-6 bg-base-200 my-10">
            <div className="flex-1 text-center py-80 "
                style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${display})` }}>
                <h2 className="text-center text-3xl font-bold leading-relaxed text-white">Welcome to our Natures Touch !!! </h2>
                <h4 className="text-lg text-white font-semibold">Nice to meet you! Enter your details to register.</h4>
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
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Your Password" name="password"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="check" id="" />
                        <p> I agree the
                            <Link>
                                <span>Term and Conditions</span>
                            </Link></p>
                    </div>

                    <button className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10">Sign Up</button>
                    <p className="text-center  mt-4">Already have an account? <Link className="text-blue-500" to={`/signIn`}>Sign In </Link> </p>
                </form>

            </div>
        </div>
    );
};

export default SignUp;