import { Link } from 'react-router-dom';
import addImage from '../../images/add.jpg'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddCraftitem = () => {



    const handleAddItem = event => {
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
        const email = form.email.value;
        const name = form.name.value;
        const rating = form.rating.value;
        const newCraftItem = { image, itemName, subCategory, description, priceType, price, customize, stock, processTime, email, name, rating }
        console.log(newCraftItem);

        axios.post('http://localhost:5000/craftItems', newCraftItem)
            .then(data => {
                form.reset()
                if (data.data.insertedId) {

                    Swal.fire({
                        title: 'success!',
                        text: 'craft item added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='bg-no-repeat bg-center bg-cover p-14' style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${addImage})` }}>
            <Link to={'/'}><button className='flex  text-white items-center gap-4 text-2xl font-semibold'><FaRegArrowAltCircleLeft />Back to Home</button></Link>
            <div className="bg-[#F4F3F0] max-w-4xl p-24 my-10 mx-auto shadow-xl" >
                <h2 className="text-center text-3xl font-bold leading-relaxed text-black">You can Add <br />
                    Beautiful Craft items here !!! </h2>
                <form onSubmit={handleAddItem} className='space-y-4'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="image"
                            className="input input-bordered w-full" required />
                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" placeholder="item_name" name="itemName" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-category Name</span>
                            </label>
                            <input type="text" placeholder="sub-category name" name="subCategory"
                                className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea"
                            placeholder="Write something" name="description"></textarea>

                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <select name='priceType' className="select select-bordered w-full max-w-xs">
                                <option>Choose</option>
                                <option>Fixed price</option>
                                <option>Variable price</option>
                            </select>

                        </div>
                        <div className="form-control md:w-1/2 mt-9">

                            <div className="join">
                                <button className="btn join-item bg-[#D2B48C] rounded-l-lg">$</button>
                                <input type="number" className='pl-6' name="price" id="" />

                            </div>
                        </div>
                    </div>

                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <select name='customize' className="select select-bordered w-full max-w-xs">
                                <option>choose</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>

                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select name='stock' className="select select-bordered w-full max-w-xs">
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
                        <input type="text" placeholder="hours/days" name="processTime"
                            className="input input-bordered w-full" required />

                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name"
                                className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control border border-[#D2B48C] py-8">
                        <label className="label">
                            <span className="label-text mx-auto">Rating</span>
                        </label>
                        <div className="rating mx-auto">
                            <input type="radio" value={'1'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={'2'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={'3'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={'4'} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={'5'} name="rating" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                    <input type="submit" value="Add Item" className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10" />

                </form>

            </div>
        </div>
    );
};


export default AddCraftitem;