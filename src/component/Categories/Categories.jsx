import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category"


const Categories = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        axios.get('https://art-and-craft-store.vercel.app/categories')
            .then(data => {
                setCategories(data.data);
            })
    }, [])

    console.log(categories);

    return (
        <div className="mt-14">
            <div className="text-center font-workSans">
                <h4 className="text-2xl text-mainColor">Shop By Category</h4>
                <h1 className="text-4xl my-4">Designed by artists, made <br /> by us, just for you.</h1>
            </div>
            <div className="md:grid lg:grid-cols-5 grid-cols-3 space-y-6 md:space-y-0 gap-6 max-w-7xl mx-auto mt-10">
                {
                    categories.map(category => <Category key={category} category={category}></Category>)
                }
            </div>


        </div>
    );
};

export default Categories;