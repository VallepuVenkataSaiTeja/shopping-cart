import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="text-5xl text-center">
                The page you are looking is not there
            </h1>

            <button
                onClick={() => navigate('/')}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-500"
            >
                Browse Products
            </button>
        </div>
    );
};

export default NotFound;