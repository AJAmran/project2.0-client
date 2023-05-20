import { useRouteError } from "react-router-dom";
import fourOfFour from '../../assets/'

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div>
            
        </div>
    );
};

export default ErrorPage;