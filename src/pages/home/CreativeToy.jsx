import creativeToy from '../../assets/playingbaby.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CreativeToy = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className='container mx-auto mt-5 mb-10'>
            <div className='relative px-2 h-[580px]'>
                <div className='w-3/5'>
                <img src={creativeToy} alt="" className='h-[400px] w-full rounded-lg' />
                </div>
                <div className='card shadow-lg px-3 py-4 w-3/6 absolute right-16 top-1/2 transform -translate-y-1/2 bg-white'
                data-aos="fade-left"
                >
                    <h2 className='text-2xl font-bold'>Creative modern wooden toys for kids development</h2>
                    <p>
                    Introducing our collection of creative modern wooden toys, designed to foster holistic development in children. From open-ended play to problem-solving,ensuring a well-rounded and joyful learning experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreativeToy;