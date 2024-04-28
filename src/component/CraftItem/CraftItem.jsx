
import axios from "axios";
import { useEffect, useState } from "react";
import Item from '../Item/Item'
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const CraftItem = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/craftItems')
            .then(data => {
                setItems(data.data);
            })
    }, [])

    return (
        <div id="#item_id" className="my-14 md:my-20 max-w-7xl md:mx-auto mx:6">
            <div className="text-center">
                <h2 className="text-4xl text-mainColor font-bold font-poppins">Popular Craft Items</h2>
                <p className="w-3/4 mx-auto my-4 ">Elevate your dining experience with our exquisite handcrafted jute and wood coasters. Each coaster is meticulously crafted by skilled artisans, combining traditional techniques with modern design to create a timeless piece for your home.</p>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <Link to={'/all-craft-items'}>
                <button
                 className="text-center flex gap-4 items-center font-workSans font-medium text-xl"> 
                 view all items <FaRegArrowAltCircleRight />
                 </button>
            </Link>
            </div>


        </div>
    );
};

export default CraftItem;