import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { MdOutlineStar } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {

    const { user } = useContext(AuthContext);
    const [item, setItem] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/myList/${user?.email}`)
            .then(data => {
                console.log(data.data);
                setItem(data.data)
            })
    }, [user])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);


                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'success!',
                        text: 'craft item updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })
    }

    console.log(item);

    return (
        <div className="lg:grid lg:grid-cols-3 gap-6 my-12 max-w-7xl mx-auto">
            <div className="col-span-2 space-y-6">
                {
                    item?.map(card => (
                        <div key={card._id}>
                            <div className="p-6 rounded-xl  lg:flex gap-8 bg-base-100 shadow-xl">
                                <figure className="flex-1"><img className="mx-auto  rounded-xl md:rounded-l-xl" src={card.image} alt="Movie" /></figure>
                                <div className="flex-1">
                                    <div className="bg-gray-50 p-6  rounded-lg shadow-xl">
                                        <h2 className=" text-xl mt-2 font-bold ">Product Name : {card.itemName}</h2>
                                        <div className="flex items-center gap-8">
                                            <h4 className="md:text-lg my-3 font-medium">Category: {card.subCategory}</h4>
                                            <p className="flex gap-2 my-2 items-center">
                                                <MdOutlineStar className="md:text-2xl text-xl text-orange-500"></MdOutlineStar>
                                                <span className="text-xl">{card.rating}</span>
                                            </p>
                                        </div>
                                        <p className="font-medium text-lg mt-4 ">
                                            <span className="font-bold">
                                                Description</span> : {card.description}</p>
                                        <div className="flex gap-6 my-2 items-center">
                                            <p className=""> <span className="font-bold">Stock </span>: {card.stock}</p>
                                            <p className=" ">
                                                <span className="font-bold">Price</span> :  ${card.price} ( {card.priceType} )</p>
                                        </div>
                                        <div className="lg:flex items-center space-y-3 lg:space-y-0 w-3/4 md:w-full  gap-6">
                                            <p className="">  <span className="font-bold">Customizable</span> : {card.customize} </p>
                                            <p className="">  <span className="font-bold">Process</span> : {card.processTime} </p>
                                        </div>

                                        <div className="flex gap-6">
                                            <Link to={`/updateItem/${card._id}`}>
                                                <button
                                                    className=" text-white btn mt-6  text-lg bg-mainColor ">Update <MdOutlineSystemUpdateAlt />
                                                </button>
                                            </Link>
                                            <button onClick={() => handleDelete(card._id)}
                                                className=" text-white btn mt-6  text-lg bg-mainColor ">Delete<MdDelete /></button>
                                        </div>

                                    </div>
                                </div>
                            </div>



                        </div>
                    ))
                }
            </div>
            <div className="h-[700px] bg-gray-50 shadow-xl rounded-xl p-6">
                <h2 className="text-2xl">Relate Products</h2>


            </div>

        </div>


    );
};

export default MyList;