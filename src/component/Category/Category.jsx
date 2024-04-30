import { FaArrowRight } from "react-icons/fa6";

const Category = ({category}) => {
    const {image,category_name} = category || {}
    return (
        <div className=" mx-auto rounded-full p-10 w-[200px] h-[200px] text-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image})` }}>
         
            <h1 className="text-xl text-white  pt-8"> {category_name}</h1>
            <button className="text-white mt-3 flex items-center gap-2">Shop Now <FaArrowRight /></button>
            
        </div>
    );
};

export default Category;