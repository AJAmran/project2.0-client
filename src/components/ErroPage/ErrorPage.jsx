import { Link, useRouteError } from "react-router-dom";
import fourOfFour from '../../assets/fouroffour.jpg'

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className="my-10">
            <div>
                <img src={fourOfFour} alt="" className="w-3/6 h-full mx-auto"/>
            </div>
            <div className='text-center'>
          <h2 className='mb-2 text-xl font-bold'>
            <span className=''>Error Code: </span> {status || 404}
          </h2>
          <div>
          <p className='font-bold p-4 text-3xl mb-3'>
            {error?.message}
          </p>
          </div>
          <Link
            to='/'
            className='px-3 py-3 text-white fw-semibold rounded-lg text-xl font-bold bg-orange-500'
          >
            Back to homepage
          </Link>
        </div>
        </div>
    );
};

export default ErrorPage;