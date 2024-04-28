import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import image from '../../../src/assets/images/bg.jpg'
import image2 from '../../../src/assets/images/bg2.webp'
import image3 from '../../../src/assets/images/bg3.jpg'
import image4 from '../../../src/assets/images/bg4 .jpg'
import image5 from '../../../src/assets/images/bg5.webp'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// import bg2 from "../../assets/bg-2.jpg"

const Banner = () => {
    return (

        <Swiper
        navigation={true}
        pagination={true}
        effect={'fade'}
        modules={[Navigation,Pagination,Autoplay,EffectFade]}
        autoplay={{ delay: 2000 }}
        className=' -mt-36 '
        
       
        >
            <SwiperSlide>
                <div className="hero w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image2})` }}>

                    <div className="hero-content text-center ">
                        <div className="md:px-48 bg-black bg-opacity-20 py-16">
                            <h1 className="mb-5 text-4xl leading-normal text-white font-poppins font-bold">Transform Your  Living <br /> Space into a <span className="text-[#bfa4a4]">Natural Haven</span> </h1>
                            <p className="mb-5 text-white"> Explore Sustainable Jute and Wood Crafts Inspired by Natures Beauty</p>
                            <Link to={'/all-craft-items'}>
                                <button className="btn bg-mainColor text-white">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image})` }}>

                    <div className="hero-content text-center ">
                        <div className="md:px-48 bg-black bg-opacity-20 py-16">
                            <h1 className="mb-5 text-4xl leading-normal text-white font-poppins font-bold"> Make a Statement <br /> with Ethically Sourced Jute and <span className="text-[#bfa4a4]">Wood Decor</span> </h1>
                            <p className="mb-5 text-white">Discover Artisan-Made Pieces That Reflect Your Unique Style</p>
                            <Link to={'/all-craft-items'}>
                                <button className="btn bg-mainColor text-white">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image3})` }}>

                    <div className="hero-content text-center ">
                        <div className="md:px-48 bg-black bg-opacity-20 py-16 leading-normal">
                            <h1 className="mb-5 text-4xl text-white font-poppins font-bold"> Embrace Sustainable  <br /> Living with Stylish <br />Jute and Wood <span className="text-[#bfa4a4]">Creations </span> </h1>
                            <p className="mb-5 text-white"> Explore Sustainable Jute and Wood Crafts Inspired by Natures Beauty</p>
                            <Link to={'/all-craft-items'}>
                                <button className="btn bg-mainColor text-white">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image4})` }}>

                    <div className="hero-content text-center ">
                        <div className="md:px-48 bg-black bg-opacity-20 py-16">
                            <h1 className="mb-5 text-4xl leading-normal text-white font-poppins font-bold">Elevate Your Home  <br /> Decor with Artisanal<span className="text-[#bfa4a4]">Craftsmanship</span> </h1>
                            <p className="mb-5 text-white">  Discover Handcrafted Jute and Wood Creations for a Unique Touch</p>
                            <Link to={'/all-craft-items'}>
                                <button className="btn bg-mainColor text-white">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero w-full h-[700px] bg-center bg-cover" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image5})` }}>

                    <div className="hero-content text-center ">
                        <div className="md:px-48 bg-black bg-opacity-20 py-16">
                            <h1 className="mb-5 text-4xl leading-normal text-white font-poppins font-bold">Add Warmth and Character  <br />  to Your Home with Handmade <span className="text-[#bfa4a4]">Treasures</span> </h1>
                            <p className="mb-5 text-white">Shop Our Collection of Eco-Friendly Jute and Wood Decor Pieces</p>
                            <Link to={'/all-craft-items'}>
                                <button className="btn bg-mainColor text-white">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
         

         
        </Swiper>

    );
};

export default Banner;