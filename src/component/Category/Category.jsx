import PropTypes from 'prop-types';


import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { image, category_name } = category || {}
    return (
        <div className=" mx-auto rounded-full p-10 w-[200px] h-[200px] text-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${image})` }}>

            <h1 className="text-xl text-white  pt-8"> {category_name}</h1>
            <Link to={'/categoryItems'}>
                <button className="text-white mt-3 flex items-center gap-2">Shop Now <FaArrowRight /></button>
            </Link>

        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired

};

export default Category;