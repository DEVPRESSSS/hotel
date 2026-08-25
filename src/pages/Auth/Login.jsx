import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { RequiredFormPage } from "../../components/Errors/FormRequired";

export function LoginPage() {
  const { handleSubmit, handleChange, formData, errors, loading } = useLogin();

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

            {/* Email */}
            <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-5 w-5 text-teal-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                type="email"
                name="email"
                value = {formData.email}
                onChange= {handleChange}
                placeholder="Email address"
                className="w-full outline-none"
                autoComplete="email"
                required
              />
            </div>
            <RequiredFormPage nameOfError={errors.email}/>

            {/* Password */}
            <div className="flex items-center rounded-lg border border-gray-300 px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-5 w-5 text-teal-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                required
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange= {handleChange}
                placeholder="Password"
                autoComplete="password"
                className="w-full outline-none"
              />
            </div>
            <RequiredFormPage nameOfError={errors.password}/>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/forgotpassword" className="text-sm text-teal-700 hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-teal-700 py-3 font-medium text-white transition hover:bg-teal-800 disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Register */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-teal-700 hover:underline">
              Register here
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}