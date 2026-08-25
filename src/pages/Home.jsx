import HotelImage1 from "../assets/HotelIntro.png";
import { FeedbackPage } from "./Feedback";
import { ProductPage } from "./Product";
import { ServicePage } from "./Services";

export function HomePage() {
  return (
    <>
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:flex lg:items-center lg:gap-12">
                
                {/* Text content */}
                <div className="flex-1 text-center lg:text-left">
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Best Hotel & Restaurant
                    <span className="block text-teal-800">Service, Made Simple</span>
                </h1>

                <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto lg:mx-0">
                    Find and book your perfect room in just a few clicks —
                    no hidden fees, instant confirmation.
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button className="group flex items-center 
                    justify-center gap-2 px-6 py-3 bg-teal-800
                    hover:bg-teal-700 transition-colors
                    text-white font-semibold rounded-xl
                    cursor-pointer">
                    <span>Book Now</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                    </button>

                <button className="group flex  items-center justify-center gap-1 px-6 py-3
                            border border-gray-300
                            hover:border-teal-800
                            hover:text-teal-800
                            transition-colors font-semibold
                            rounded-xl
                            cursor-pointer">
                    <span>Explore Rooms</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 transition-transform group-hover:translate-y-1"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                    </button>
                </div>

                {/* Trust row */}
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm  text-gray-500">
                    <span>✓ Free cancellation</span>
                    <span>✓ Best price guarantee</span>
                </div>
                </div>

                {/* Image */}
                <div className="flex-1 mt-2 lg:mt-0">
                <img
                    src={HotelImage1}
                    alt="Modern hotel lobby with elegant interior design"
                    loading="eager"
                    className="hidden w-full h-auto lg:block"
                />
                </div>
            </div>
        </section>

           
        <ServicePage/>
        <ProductPage/>
        <FeedbackPage/>
    </>
  );
}