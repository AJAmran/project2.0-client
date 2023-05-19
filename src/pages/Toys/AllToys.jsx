import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://toy-market-place-server-nine.vercel.app/twentyToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleSearchText = () => {
    fetch(
      `https://toy-market-place-server-nine.vercel.app/search/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  console.log(toys);
  return (
    <div className="container mx-auto mt-10 mb-10">
      <div className="flex items-center justify-center gap-3 mb-5">
        <input
          type="text"
          onChange={(event) => setSearchText(event.target.value)}
          name="inputText"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button onClick={handleSearchText} className="btn btn-info text-white">
          Search
        </button>
      </div>
      {/* table */}

      <div className="overflow-x-auto">
        <table className="table w-full border table-zebra rounded-lg">
          <thead>
            <tr>
              <th>Id</th>
              <th>Seller</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{user?.displayName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>
                  <button className="btn btn-outline btn-info">
                    <Link to={`/singleToy/${toy?._id}`}>View Details</Link>
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

export default AllToys;
