import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const CategoryItems = () => {


const [categoryCard, setCategoryCard] = useState({})

    const { id } = useParams()

    useEffect(() => {

        axios.get('https://art-and-craft-store.vercel.app/categories')
            .then(data => {
        
                const item = data.data.find(i => i._id == id);
                if (item) {

                    setCategoryCard(item)
                }
                // if (categoryItem) {
                //     for (const items of categoryItem) {
                //         console.log(items);
                     
                //     }
                // }
            }, [ id])
    })



    const { item_name } = categoryCard || {}
    return (




        <div>


            <div className="max-w-7xl lg:mx-auto mx-6">
                <h1 className="mt-10 text-4xl font-semibold ">{item_name}</h1>

            </div>


        </div>
    );
};

export default CategoryItems;