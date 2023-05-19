import { Link, useLoaderData } from "react-router-dom";
import e1 from "../../assets/e1.jpeg";
import PhotoGellery from "./PhotoGellery";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReactStars from "react-rating-stars-component";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const alltoys = useLoaderData();
  console.log(alltoys);

  const mathToy = alltoys
    .filter((obj) => obj.subCategory === "math")
    .slice(0, 6);
  const scienceToy = alltoys
    .filter((obj) => obj.subCategory === "science")
    .slice(0, 6);
  const engineeringToy = alltoys
    .filter((obj) => obj.subCategory === "engineering kits")
    .slice(0, 6);
  console.log(mathToy, scienceToy, engineeringToy);

  const handleViewDetails = (id) => {
    if (!user?.email) {
      Swal.fire({
        title: "Error!",
        text: "You have to log in first to view details",
        icon: "error",
        confirmButtonText: "close",
      });
    }
  };

  return (
    <div>
      {/* bannaer section */}

      <div className="hero bg-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img src={e1} className="rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* gallery section */}
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center mb-3">Toys Gallery</h1>
        <PhotoGellery></PhotoGellery>
      </div>

      {/* react tab */}

      <div className="container mx-auto mt-5">
        <Tabs
          forceRenderTabPanel
          defaultIndex={1}
          className="border bg-slate-100 rounded-lg p-3"
        >
          <TabList className="text-center bg-ing text-xl font-bold">
            <Tab>The toys</Tab>
          </TabList>
          <TabPanel>
            <Tabs forceRenderTabPanel>
              <TabList className="font-semibold text-lg">
                <Tab>Math Toys</Tab>
                <Tab>engineering toys</Tab>
                <Tab>Science Toys</Tab>
              </TabList>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
                  {mathToy.map((mtoy) => (
                    <div key={mtoy?._id} className="m-4">
                      <div className="card w-full bg-base-100 shadow-xl border h-full">
                        <figure>
                          <img
                            src={mtoy?.toyImg}
                            alt="Shoes"
                            className="h-40 p-2 rounded"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {mtoy?.toyName}
                            {/* <div className="badge badge-secondary">View Details</div> */}
                            <ReactStars
                              value={mtoy?.rating}
                              edit={false}
                              isHalf={true}
                              size={20}
                            ></ReactStars>
                          </h2>
                          <p className="p-0 m-0">{mtoy?.details}</p>
                          <div className="card-actions justify-end">
                            <p className="p-0 m-0">Price: {mtoy?.price}</p>
                            <button
                              onClick={() => handleViewDetails(mtoy._id)}
                              className="btn btn-outline btn-info"
                            >
                              <Link to={`/singleToy/${mtoy?._id}`}>
                                View Details
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
                  {engineeringToy.map((mtoy) => (
                    <div key={mtoy?._id} className="m-4">
                      <div className="card w-full bg-base-100 shadow-xl border h-full">
                        <figure>
                          <img
                            src={mtoy?.toyImg}
                            alt="Shoes"
                            className="h-40 p-2 rounded"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {mtoy?.toyName}
                            {/* <div className="badge badge-secondary">View Details</div> */}
                            <ReactStars
                              value={mtoy?.rating}
                              edit={false}
                              isHalf={true}
                              size={20}
                            ></ReactStars>
                          </h2>
                          <p className="p-0 m-0">{mtoy?.details}</p>
                          <div className="card-actions justify-end">
                            <p className="p-0 m-0">Price: {mtoy?.price}</p>
                            <button
                              onClick={() => handleViewDetails(mtoy._id)}
                              className="btn btn-outline btn-info"
                            >
                              <Link to={`/singleToy/${mtoy?._id}`}>
                                View Details
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
                  {scienceToy.map((mtoy) => (
                    <div key={mtoy?._id} className="m-4">
                      <div className="card w-full bg-base-100 shadow-xl border h-full">
                        <figure>
                          <img
                            src={mtoy?.toyImg}
                            alt="Shoes"
                            className="h-40 p-2 rounded"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {mtoy?.toyName}
                            {/* <div className="badge badge-secondary">View Details</div> */}
                            <ReactStars
                              value={mtoy?.rating}
                              edit={false}
                              isHalf={true}
                              size={20}
                            ></ReactStars>
                          </h2>
                          <p className="p-0 m-0">{mtoy?.details}</p>
                          <div className="card-actions justify-end">
                            <p className="p-0 m-0">Price: {mtoy?.price}</p>
                            <button
                              onClick={() => handleViewDetails(mtoy._id)}
                              className="btn btn-outline btn-info"
                            >
                              <Link to={`/singleToy/${mtoy?._id}`}>
                                View Details
                              </Link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
