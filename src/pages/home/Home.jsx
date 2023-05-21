import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import PhotoGellery from "./PhotoGellery";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReactStars from "react-rating-stars-component";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Work from "./Work";
import CreativeToy from "./CreativeToy";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  const { user } = useContext(AuthContext);
  const alltoys = useLoaderData();
  useTitle("Home");

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

      <div className="h-[620px]">
        <div
          className="hero h-full w-auto container mx-auto bg-opacity-60"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome!!!</h1>
              <p className="mb-5">
                Here adventure meets learning! Explore interactive games,
                captivating stories, educational videos, and more. Join us for
                an exhilarating journey in a safe online environment. Let the
                fun begin!
              </p>
              <button className="bg-orange-500 px-3 py-3 text-xl rounded-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* gallery section */}
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-center mb-3">Toys Gallery</h1>
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

      {/* How it work */}
      <Work></Work>
      {/* CreativeWork */}
      <CreativeToy></CreativeToy>
    </div>
  );
};

export default Home;
