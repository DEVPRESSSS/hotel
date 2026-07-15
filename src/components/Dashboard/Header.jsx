export function HeaderPage(){

    return(
        <div className=" flex flex-row
                 bg-white h-10 
                  p-1
                  border-b-2
                  border-gray-100
                  ">
            {/*Search Icon and Input */}
            <div className="flex flex-row flex-1 
                        rounded-xl
                        border-2
                        border-gray-100
                        gap-2 p-0 bg-white">
                 {/*Search Icon */}
                 <div className="flex-none p-1">
                    <span className="flex align-center
                        justify-center">
                       <svg
                            className="size-6 text-teal-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
       

                    </span>
                 </div>

                {/*Input Icon */}
                <div className="flex flex-1 p-1 align-center
                            justify-center">
                  <input
                    type="text"
                    className="w-full border-0 outline-none focus:outline-none focus:ring-0"
                    />
                </div>
            </div>

            {/* Message Icon and Notification Icon*/}
            <div className="flex flex-row flex-1 gap-2
                        justify-end items-center p-0">

                <div className="flex justify-end items-center">
                    <span className="flex items-center justify-center  bg-white w-8 h-8 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </span>
                </div>

                <div className="flex justify-end items-center">
                    <span className="flex items-center 
                             justify-center bg-white w-8 h-8 rounded-full">
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" 
                        className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                     </svg>

                    </span>
                </div>

                   <div className="flex justify-end items-center">
                    <span className="flex items-center 
                             justify-center bg-white w-8 h-8 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>


                    </span>
                </div>
            </div>
          
        </div>
    )
}