import axios from "axios";
import { useEffect, useState } from "react";
import AllItem from "../../component/AllItem/AllItem";
import bg from '../../assets/images/allcraftitem.png'


const AllCraftItems = () => {

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        axios.get('https://art-and-craft-store.vercel.app/craftItems')
            .then(data => {
                setAllItems(data.data);
            })
    }, [])
    return (
        <div className="-mt-36">
            <div
             className="h-[370px] bg-no-repeat bg-cover bg-center text-center text-white pt-40 font-workSans" 
             style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${bg})` }}>
                <h3 className="text-4xl font-semibold">All item are Handmade by authentic wood and jute</h3>
                <p className="text-2xl my-3">collected everything from Nature <span className="text-3xl">Natures Touch</span></p>
              
             
            </div>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
                {
                    allItems.map(allItem => <AllItem key={allItem._id} allItem = {allItem}></AllItem>)
                }

            </div>

        </div>
    );
};

export default AllCraftItems;