import creativeToy from '../../assets/playingbaby.jpg'

const CreativeToy = () => {
    return (
        <div className='container mx-auto mt-5 mb-10'>
            <div className='relative px-2'>
                <div className='w-3/5'>
                <img src={creativeToy} alt="" className='h-[400px] w-full rounded-lg' />
                </div>
                <div className='card shadow-lg px-3 py-4 w-3/6 absolute right-16 top-1/2 transform -translate-y-1/2 bg-white'>
                    <h2 className='text-2xl font-bold mb-3'>Creative modern wooden toys for kids development</h2>
                    <p>
                    Introducing our collection of creative modern wooden toys, designed to foster holistic development in children. From open-ended play to problem-solving,ensuring a well-rounded and joyful learning experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreativeToy;