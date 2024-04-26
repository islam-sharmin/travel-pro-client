import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="text-center my-auto">
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <Link to="/"><button className="btn">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;