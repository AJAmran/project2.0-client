import creativeToy from "../../assets/playingbaby.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CreativeToy = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <div className="container mx-auto mt-5 mb-10">
      <div className="relative px-2">
        <div className="md:w-3/5 full">
          <img
            src={creativeToy}
            alt=""
            className="h-[400px] w-full rounded-lg"
          />
        </div>
        <div
          className="card shadow-lg px-3 py-4 w-full md:w-3/6 static md:absolute top-20 right-0 md:right-16 transform -translate-y-1/2 bg-white"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-5">
            Creative modern wooden toys for kids development
          </h2>
          <p>
            Discover our captivating collection of creative modern wooden toys,
            thoughtfully crafted to ignite kids imagination and promote holistic
            development. From open-ended play sets to educational puzzles, our
            eco-friendly toys inspire problem-solving, fine motor skills, and
            eco-consciousness for sustainable playtime adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeToy;
