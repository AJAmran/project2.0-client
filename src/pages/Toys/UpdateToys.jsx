import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const toy = useLoaderData();
  const {_id}= toy;
  console.log(_id)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, toy._id);
    fetch(`https://toy-market-place-server-nine.vercel.app/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.modifiedCount > 0){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your toy has been Updated',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <h1 className="text-2xl font-semibold text-left py-5">
          Update Your Toys info
        </h1>
        <input
          {...register("toyImg")}
          className="input input-bordered w-1/2 me-5"
          defaultValue={toy?.toyImg}
        />
        <input
          {...register("toyName")}
          className="input input-bordered w-2/6"
          defaultValue={toy.toyName}
        />
        <input
          {...register("sellerName")}
          className="input input-bordered w-1/2 me-5 mt-3"
          defaultValue={toy?.sellerName}
        />
        <input
          {...register("sellerEmail")}
          className="input input-bordered w-2/6"
          defaultValue={toy?.sellerEmail}
        />
        <select
          {...register("subCategory")}
          className="input input-bordered w-1/2 me-5 mt-3"
        >
          <option defaultValue={toy.subCategory}>SubCategory</option>
          <option value="math">Math</option>
          <option value="engineering kits">engineering kits </option>
          <option value="science">Science </option>
          <option value="iq">IQ</option>
        </select>
        <input
          {...register("price")}
          className="input input-bordered w-2/6"
          defaultValue={toy?.price}
        />
        <input
          {...register("rating")}
          className="input input-bordered w-1/2 me-5 mt-3"
          defaultValue={toy?.rating}
        />
        <input
          {...register("quantity")}
          className="input input-bordered w-2/6"
          defaultValue={`$${toy?.quantity}`}
        />
        <input
          {...register("details")}
          className="input input-bordered w-1/2 me-5 mt-3"
          defaultValue={toy?.details}
        />
        <input
          {...register("date")}
          className="input input-bordered w-2/6"
          defaultValue={toy?.date}
          type="date"
        />
        <input
          type="submit"
          value="Add a toy"
          className="w-5/6 ms-2 btn btn-info text-white mt-3"
        />
      </form>
    </div>
  );
};

export default UpdateToys;
