import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";


const SocialSignIn = () => {
    const { googleLogIn, githubLogin, facebookLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleSocialSignIn = socialProvider => {
        socialProvider()
         .then((result) =>{
            console.log(result);
            navigate(location?.state ? location.state : "/")
         })
    }
    
    return (
        <div className="text-center">
            <button onClick={() => handleSocialSignIn(googleLogIn)}
             className="rounded-full bg-pink-50 text-3xl p-4"><FcGoogle /></button>
            <button onClick={() => handleSocialSignIn(githubLogin)}
             className="rounded-full mx-5 bg-pink-50 text-3xl p-4"><FaGithub /></button>
            <button  onClick={() => handleSocialSignIn(facebookLogin)}
            className="rounded-full text-blue-900 bg-pink-50 text-3xl p-4"><FaFacebookF /></button>
            
        </div>
    );
};

export default SocialSignIn;