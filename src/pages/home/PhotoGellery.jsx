import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PhotoGellery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://toy-market-place-server-nine.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        console.log(data);
      });
  }, []);

  const [visibleImages, setVisibleImages] = useState(8); // Number of initially visible images

  const showMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 10); // Increase the number of visible images by 10
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 border p-4 rounded-lg bg-slate-100">
        {images.slice(0, visibleImages).map((image, index) => (
          <div key={index} className="border rounded" data-aos="flip-up">
            <img
              src={image.toyImg}
              alt={`Image ${index + 1}`}
              className="w-full lg:h-72 h-40"
            />
            <h1 className="text-lg font-semibold px-2 pb-2 m-0 bg-white">
              {image?.toyName}
            </h1>
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={showMoreImages}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGellery;
