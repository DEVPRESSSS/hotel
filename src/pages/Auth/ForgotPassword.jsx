export function ForgotPasswordPage(){

  return (
    <section className="flex items-center justify-center p-6">
     <div className="flex w-full max-w-2xl overflow-hidden rounded-2xl bg-white">
       <div className="flex flex-1 flex-col justify-center p-8"> 
           {/* Header */}
           <div className="mb-8">
             <h1 className="text-3xl text-center font-bold text-gray-800">
                Forgot Password
             </h1>
             <p className="mt-2 text-sm text-center text-gray-500">
               Input your email
             </p>
           </div>
 
           {/* Form */}
           <form  className="space-y-4">
            {/* FirstName */}
             <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
             
               <input
                 type="text"
                 name="email"
                 placeholder="example@gmail.com"
                 className="w-full outline-none"
                 required
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
                Reset
             </button>
           </form>

         </div>
       </div>
     </section>
   );
}