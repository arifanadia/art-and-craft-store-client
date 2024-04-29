
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { FaHeart } from "react-icons/fa";


const ViewDetails = () => {
    const { id } = useParams()
    console.log(id);
    const [item, setItem] = useState({});

    useEffect(() => {
        axios(`http://localhost:5000/craftItems/${id}`)
            .then(data => {
                console.log(data.data);
                setItem(data.data)
            })
    }, [id]);

    const {

        image, itemName,
        subCategory, description,
        priceType, price,
        customize, stock,
        processTime, email,
        name, rating
    } = item || {}

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-center my-6">See of {itemName} Details</h1>
            <div className="p-6 rounded-xl  lg:flex gap-8 bg-base-100 shadow-xl">
                <figure className="flex-1"><img className="mx-auto rounded-xl md:rounded-l-xl" src={image} alt="Movie" /></figure>
                <div className="flex-1">
                    <div className="bg-gray-50 p-6  rounded-lg shadow-xl">
                        <h2 className="md:text-2xl text-xl mt-2 font-bold ">Product Name : {itemName}</h2>
                        <h4 className="md:text-xl my-3 font-medium">Category: {subCategory}</h4>
                        <p className="flex gap-2 my-3 items-center">
                            <MdOutlineStar className="md:text-2xl text-xl text-orange-500"></MdOutlineStar>
                            <span className="text-xl">{rating}</span>
                        </p>
                        <p className="font-medium text-lg mt-10 ">
                            <span className="font-bold">
                                Description</span> : {description}</p>
                        <p className="mt-4"> <span className="font-bold">Stock </span>: {stock}</p>
                        <p className="my-4 ">
                            <span className="font-bold">PRICE</span> :  ${price} ( {priceType} )</p>
                        <div className="lg:flex items-center space-y-3 lg:space-y-0 w-3/4 md:w-full  gap-6">
                            <p className="border-2 border-mainColor rounded-lg px-3 py-2 md:px-6 md:py-4">Customizable : {customize} </p>
                            <p className="border-2 border-mainColor rounded-lg px-3 py-2 md:px-6 md:py-4">Process Time : {processTime} </p>
                        </div>
                        <div className="">
                            <h2 className="text-2xl mt-6 font-bold">Store Owner Details</h2>
                            <div className="border-2 border-mainColor rounded-lg p-4 mt-6">
                                <p className="font-medium text-lg my-2 ">
                                    <span className="font-bold">
                                        Name</span> : {name}</p>
                                <p className="font-medium text-lg ">
                                    <span className="font-bold">
                                        Email</span> : {email}</p>
                            </div>
                        </div>
                        <button 
                         className=" text-white btn mt-6 w-full text-lg bg-mainColor ">Add My List <FaHeart></FaHeart></button>
                     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;