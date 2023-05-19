import { useLoaderData, useParams } from "react-router-dom";
import React from "react";
import ReactStars from "react-rating-stars-component";

const SingleToys = () => {
  const { id } = useParams();
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div className="mt-16 mb-36">
      <div className="hero container mx-auto">
        <div className="hero-content flex-col lg:flex-row border rounded-lg">
          <img
            src={singleData?.toyImg}
            className="max-w-lg h-full rounded-lg border"
          />
          <div>
            <h1 className="text-3xl font-bold pb-3">{singleData?.toyName}</h1>
            <p className="pb-3">
              {singleData?.details}
            </p>
            <div className="">
                <p className="p-0 m-0">Price: ${singleData?.price}</p>
                <p className="mt-2">Quantity:{singleData?.quantity}</p>
                <div className="flex items-center">
                <p className="mt-2">Rating: </p><ReactStars value={singleData?.rating} edit={false}
                isHalf={true} size={24}
                ></ReactStars>
                </div>
            </div>
            <div>
            </div>
            <button className="btn btn-outline btn-info my-4">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;
