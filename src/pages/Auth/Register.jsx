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
               Welcome Back
             </h1>
             <p className="mt-2 text-sm text-center text-gray-500">
               Sign in to continue to your account.
             </p>
           </div>
 
           {/* Form */}
           <form onSubmit={handleSubmit} className="space-y-4">
            {/* FirstName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="firstName"
                 placeholder="FirstName"
                 className="w-full outline-none"
               />
             </div>

            {/* MiddleName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="middleName"
                 placeholder="middleName"
                 className="w-full outline-none"
               />
             </div>

             {/* LastName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="lastName"
                 placeholder="lastName"
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
               className="w-full rounded-lg bg-teal-700 py-3 font-medium text-white transition hover:bg-teal-800 disabled:opacity-60"
             >
                Register
             </button>
           </form>
 
           {/* Register */}
           {/* <div className="mt-6 text-center text-sm text-gray-500">
             Don't have an account?{" "}
             <Link to="/register" className="font-medium text-teal-700 hover:underline">
               Register here
             </Link>
           </div> */}
 
         </div>
       </div>
     </section>
   );
}