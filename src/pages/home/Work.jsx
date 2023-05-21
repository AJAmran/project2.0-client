import { useEffect } from "react";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";
import i3 from "../../assets/i3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h2 className="text-center text-2xl font-bold mb-10">
        Here How it Works
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        <div
          className="flex flex-col items-center border-r p-4"
          data-aos="zoom-in-down"
        >
          <img src={i1} alt="" className="h-40" />
          <h3 className="text-xl font-bold text-center">Inspires</h3>
          <p className="text-center">
            Discover endless possibilities through play. Our educational toys
            inspire young minds, fostering creativity, critical thinking, and a
            lifelong love for learning
          </p>
        </div>
        <div
          className="flex flex-col items-center border-r p-4"
          data-aos="zoom-in-down"
        >
          <img src={i2} alt="" className="h-40" />
          <h3 className="text-xl font-bold text-center">Encouraging</h3>
          <p className="text-center">
            Embrace challenges, push boundaries, and never give up. Our
            encouraging toys nurture resilience, instill confidence, and
            motivate young learners to reach for the stars and achieve their
            greatest potential.
          </p>
        </div>
        <div className="flex flex-col items-center p-4" data-aos="zoom-in-down">
          <img src={i3} alt="" className="h-40" />
          <h3 className="text-xl font-bold text-center">Creative</h3>
          <p className="text-center">
            Unleash your inner artist, inventor, and visionary. Our creative
            toys are catalysts for imagination, innovation, and self-expression,
            empowering you to turn dreams into reality and embrace your unique
            genius.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
