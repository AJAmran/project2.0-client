import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://toy-market-place-server-nine.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-market-place-server-nine.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = toys.filter(toy => toy._id !== id);
              setToys(remaining);
              Swal.fire("Deleted!", "Your toys has been deleted.", "success");
            }
          });
      }
    });

    console.log(id);
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h2 className="text-center text-2xl font-bold border py-3 px-3 bg-info text-white">
        Your Toys
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full border table-zebra rounded-lg">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy?._id}>
                <td>{index + 1}</td>
                <td>{toy?.toyName}</td>
                <td>{toy?.subCategory}</td>
                <td>{toy?.price}</td>
                <td>
                  <Link to={`/toysUpdate/${toy._id}`}>
                    <button
                      className="btn btn-outline btn-info"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-info text-white"
                    onClick={() => handleDelete(toy?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
