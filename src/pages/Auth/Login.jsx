import hotelImage from "../../assets/hotel.jpg";
import {Link} from "react-router-dom"

export function LoginPage() {
    return (
        <div className="flex flex-1 justify-center items-center p-4 w-full h-full">
            <div className="flex max-w-2xl w-full rounded-lg shadow-sm gap-6">

                <div className="hidden sm:flex flex-1 justify-center items-center bg-white p-0">
                    <img
                        src={hotelImage}
                        alt="Hotel"
                        className="max-h-96 object-contain rounded-sm"
                    />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-lg font-bold text-center text-teal-700 mb-6">
                        Welcome - HMS
                    </h1>
                    <div className="flex items-center border border-gray-100 rounded-md px-3 py-1 mt-4">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#00796b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                            </svg>                       
                        </div>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="w-full outline-none"
                        />
                    </div>
                    
                    <div className="flex items-center border border-gray-100 rounded-md px-3 py-1 mt-4">
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#00796b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>                        
                        </div>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full outline-none"
                        />
                    </div>

                    <div className="flex justify-end mt-1">

                        <Link to ="/forgotpassword"
                            className="text-sm text-teal-700 italic underline"
                            >
                                forgot password?
                        </Link>
                    </div>
                    <div className="w-full mt-2">
                        <button type="submit"
                                className="bg-teal-800 hover:bg-teal-700 transition-colors py-2 rounded-lg text-white w-full cursor-pointer">
                                Sign In
                        </button>
                    </div>
                    <div className="flex justify-center mt-1">

                        <Link to= "/register"
                            className="text-sm  text-gray-500 italic underline"
                            >
                                Dont have an account? <span>
                                    Register here
                                </span>
                        </Link>
                    </div>
                </div>

                

            </div>
        </div>
    );
}