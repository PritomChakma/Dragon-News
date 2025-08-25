import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="card w-full max-w-lg shadow-2xl">
        <div className="card-body">
          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-6">
            Login to Your Account
          </h1>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover text-sm">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button className="btn btn-neutral w-full mt-2">Login</button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Register Redirect */}
          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primary font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
