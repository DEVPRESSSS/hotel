import { useRegister } from "../../hooks/useRegister";

export function RegisterPage(){
  
  const {handleSubmit} = useRegister();
  return (
    <section className="flex items-center justify-center p-6">
     <div className="flex w-full max-w-2xl overflow-hidden rounded-2xl bg-white">
       <div className="flex flex-1 flex-col justify-center p-8"> 
           {/* Header */}
           <div className="mb-8">
             <h1 className="text-3xl text-center font-bold text-gray-800">
               Create you account
             </h1>
             <p className="mt-2 text-sm text-center text-gray-500">
               Fill up all the fields
             </p>
           </div>
 
           {/* Form */}
           <form onSubmit={handleSubmit} className="space-y-4">
            {/* FirstName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="firstName"
                 placeholder="First name"
                 className="w-full outline-none"
               />
             </div>

            {/* MiddleName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="middleName"
                 placeholder="Middle name"
                 className="w-full outline-none"
               />
             </div>

             {/* LastName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="lastName"
                 placeholder="Last name"
                 className="w-full outline-none"
               />
             </div>

             {/* Email */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="email"
                 name="email"
                 placeholder="Email address"
                 className="w-full outline-none"
               />
             </div>
 
             {/* Password */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
        
               <input
                 type="password"
                 name="password"
                 placeholder="Password"
                 className="w-full outline-none"
               />
             </div>

 
             {/* Submit */}
             <button
               type="submit"
               className="w-full rounded-lg bg-teal-700 
                  py-3 font-medium 
                  cursor-pointer
                  text-white transition hover:bg-teal-800 disabled:opacity-60"
             >
                Register
             </button>
           </form>

         </div>
       </div>
     </section>
   );
}