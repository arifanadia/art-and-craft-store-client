import { Link } from 'react-router-dom';
import addImage from '../../images/add.jpg'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const AddCraftitem = () => {


    const handleAddItem = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // fetch('http://localhost:5000/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         form.reset()

        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'success!',
        //                 text: 'user added successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //             })

        //         }
        //     })
    }

    return (
        <div className='bg-no-repeat bg-center bg-cover p-14' style={{ backgroundImage: `linear-gradient(#5d415770 , #6038135c), url(${addImage})` }}>
            <Link to={'/'}><button className='flex  text-white items-center gap-4 text-2xl font-semibold'><FaRegArrowAltCircleLeft />Back to Home</button></Link>
            <div className="bg-[#F4F3F0] max-w-4xl p-24 my-10 mx-auto shadow-xl" >
                <h2 className="text-center text-3xl font-bold leading-relaxed text-black">You can Add <br />
                    Beautiful Craft items here !!! </h2>
                <form onSubmit={handleAddItem}>
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
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-category Name</span>
                            </label>
                            <input type="text" placeholder="sub-category name" name="subCategory"
                                className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex justify-center gap-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category" name="category"
                                className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details" name="details"
                                className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter coffee photoURL" name="photo"
                            className="input input-bordered w-full" required />
                    </div>
                    <input type="submit" value="Add Item" className="btn btn-block font-poppins text-black bg-[#D2B48C] mt-10" />

                </form>

            </div>
        </div>
    );
};


export default AddCraftitem;