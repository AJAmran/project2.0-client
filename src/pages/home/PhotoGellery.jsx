import { useEffect, useState } from "react";

const PhotoGellery = () => {
    const [images, setImages] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/alltoys`)
        .then(res => res.json())
        .then(data => {
            setImages(data)
            console.log(data)
        })
    }, [])


    const [visibleImages, setVisibleImages] = useState(6); // Number of initially visible images

    const showMoreImages = () => {
      setVisibleImages(prevVisibleImages => prevVisibleImages + 10); // Increase the number of visible images by 10
    };

  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border p-4 rounded-lg bg-slate-100">
      {images.slice(0, visibleImages).map((image, index) => (
        <div key={index} className="border rounded">
          <img src={image.toyImg} alt={`Image ${index + 1}`} className="w-full h-72" />
          <h1 className="text-lg font-semibold px-2 pb-2 m-0 bg-white">{image?.toyName}</h1>
        </div>
      ))}
    </div>
    {visibleImages < images.length && (
      <div className="mt-4 flex justify-center">
        <button
          onClick={showMoreImages}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Show More
        </button>
      </div>
    )}
  </div>
  );
};

export default PhotoGellery;
