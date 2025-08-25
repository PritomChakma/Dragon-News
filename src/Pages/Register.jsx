import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex items-center justify-center px-4">
      <div className="card w-full max-w-md shadow-2xl ">
        <div className="card-body">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-6">
            Register Your Account
          </h1>

          {/* Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>

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
            <button className="btn btn-neutral w-full mt-2">Register</button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Login Redirect */}
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
