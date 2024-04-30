import { Link, useParams } from 'react-router-dom';
import addImage from '../../assets/images/add.jpg'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const UpdateItem = () => {

    const {id} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/craftItems/${id}`)
        .then(data => {
            setItems(data.data)
        })
    },[id])

    const handleUpdateItem = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const itemName = form.itemName.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const priceType = form.priceType.value;
        const price = form.price.value;
        const customize = form.customize.value;
        const stock = form.stock.value;
        const processTime = form.processTime.value;
        const rating = form.rating.value;
        const updateItem = { image, itemName, subCategory, description, priceType, price, customize, stock, processTime, rating }
        // console.log(updateItem);
        fetch(`http://localhost:5000/updateItem/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()

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

    //     axios.put(`http://localhost:5000/updateItem/${id}`, updateItem)
    //         .then(data => {
    //             form.reset()
    //             if (data.data.insertedId) {

    //                 Swal.fire({
    //                     title: 'success!',
    //                     text: 'craft item added successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //             }

    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
    // }
 

    return (
        <div className='bg-no-repeat bg-center bg-cover p-14' style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${addImage})` }}>
            <Link to={'/'}><button className='flex  text-white items-center gap-4 text-2xl font-semibold'><FaRegArrowAltCircleLeft />Back to Home</button></Link>
            <div className="bg-[#F4F3F0] max-w-4xl p-24 my-10 mx-auto shadow-xl" >
                <h2 className="text-center text-3xl font-bold leading-relaxed text-black"> Update Your Item </h2>
                <form onSubmit={handleUpdateItem} className='space-y-4'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input defaultValue={items.image} type="url" placeholder="Image URL" name="image"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" defaultValue={items.itemName} placeholder="item_name" name="itemName" 
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-category Name</span>
                            </label>
                            <input type="text" defaultValue={items.subCategory} placeholder="sub-category name" name="subCategory"
                                className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea" defaultValue={items.description}
                            placeholder="Write something..." name="description"></textarea>

                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <select defaultValue={items.priceType} name='priceType' className="select select-bordered w-full max-w-xs">
                                <option>Choose</option>
                                <option>Fixed price</option>
                                <option>Variable price</option>
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 mt-9">

                            <div className="join">
                                <button className="btn join-item bg-[#D2B48C] rounded-l-lg">$</button>
                                <input type="number" defaultValue={items.price} className='pl-6' name="price" id="" />

                            </div>
                        </div>
                    </div>

                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select defaultValue={items.customize} name='customize' className="select select-bordered w-full max-w-xs">
                                <option>choose</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>

                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select defaultValue={items.stock} name='stock' className="select select-bordered w-full max-w-xs">
                                <option>choose</option>
                                <option>In Stock</option>
                                <option>Made To Order</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Processing_Time </span>
                        </label>
                        <input type="text" defaultValue={items.processTime} placeholder="hours/days" name="processTime"
                            className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control border border-[#D2B48C] py-8">
                        <label className="label">
                            <span className="label-text mx-auto">Rating</span>
                        </label>
                        <div className="rating mx-auto">
                            <input type="radio" defaultValue={items.rating} value={'1'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" defaultValue={items.rating} value={'2'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" defaultValue={items.rating} value={'3'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" defaultValue={items.rating} value={'4'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" defaultValue={items.rating} value={'5'} name="rating" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <input type="submit" value="Update Item" className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10" />

                </form>

            </div>
        </div>

    );
};
export default UpdateItem;