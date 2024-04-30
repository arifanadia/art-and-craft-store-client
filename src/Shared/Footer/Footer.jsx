import logo from "../../assets/images/NATURE_s_TOUCH_logo.png"

const Footer = () => {


    return (
        <footer className="footer p-10 bg-[#D2B48C] mt-14 text-base-content">
            <aside>
             <img className="w-[210px] mx-auto -mt-12" src={logo} alt="" />
                <p className="text-center -mt-5 ">Natures Touch<br />Providing reliable tech since 2000</p>
            </aside>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Links</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>



    );
};

export default Footer;