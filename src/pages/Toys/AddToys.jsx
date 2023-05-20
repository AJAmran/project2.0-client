import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2'
import toyimg from '../../assets/toyform.jpg'

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://toy-market-place-server-nine.vercel.app/add-toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((infs) => {
        Swal.fire({
          title: 'success!',
          text: 'You toy have been successfully added',
          icon: 'success',
          confirmButtonText: 'Done'
        })
        console.log(infs);
      });

    console.log(data);
  };
  return (
    <div className="container mx-auto flex mt-24 mb-24 items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full">
        <h1 className="text-2xl font-semibold text-left py-5">Submit Your Toys info</h1>
        <input {...register("toyImg")} className="input input-bordered w-1/2 me-5" placeholder="Picture URL of the toy"/>
        <input {...register("toyName")} className="input input-bordered w-2/6" placeholder="Name of the toy"/>
        <input {...register("sellerName")} className="input input-bordered w-1/2 me-5 mt-3" defaultValue={user?.displayName}/>
        <input {...register("sellerEmail")} className="input input-bordered w-2/6" defaultValue={user?.email}/>
        <select {...register("subCategory")} className="input input-bordered w-1/2 me-5 mt-3">
          <option value="" defaultChecked>SubCategory</option>
          <option value="math">Math</option>
          <option value="engineering kits">engineering kits </option>
          <option value="science">Science </option>
          <option value="iq">IQ</option>
        </select>
        <input {...register("price")} className="input input-bordered w-2/6" placeholder="Price of the toy"/>
        <input {...register("rating")} className="input input-bordered w-1/2 me-5 mt-3" placeholder="Rating of the toy"/>
        <input {...register("quantity")} className="input input-bordered w-2/6" placeholder="Available quantity"/>
        <input {...register("details")} className="input input-bordered w-1/2 me-5 mt-3" placeholder="Details of the toy"/>
        <input {...register("date")} className="input input-bordered w-2/6" placeholder="" type="date"/>
        <input type="submit" value="Add a toy" className="w-5/6 ms-2 btn btn-info text-white mt-3"/>
      </form>
      <div>
        <img src={toyimg} alt="" />
      </div>
    </div>
  );
};

export default AddToys;
