import hotelImage from "../assets/hotel.jpg";
export function HomePage(){
    return (
        <div className="lg:flex p-2 " >
            {/* Hero div wrapper */}
            <div className="flex flex-1 justify-center items-start ">
                <div className="flex-1">
                <h1 className="text-2xl font-extrabold text-center">
                    We don't just create experience
                  </h1>
                </div>
                
            </div>
            {/* Image div wrapper */}
            <div className="flex-1">
                    {/* Hotel Image*/}
                    <img src= {hotelImage} alt="Hotel image"
                         className="object-contain"/>
            </div>
        </div>  

    );
}