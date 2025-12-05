import React, { use } from "react";
import { Mail, Lock, User, Image } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const LogInPage = () => {
  const { login, googleLogin, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Log In Successful");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("got an error");
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        toast.success("Login with google");
        setUser(res.user);
        navigate(location?.state || "/");
      })
      .catch((e) => {
        toast.error("google log in e somossa kortese");
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Login to your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label> */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label> */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className=" cursor-pointer w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-lg">
              Login
            </button>
          </form>
          <button
            onClick={handleGoogle}
            className="my-4 cursor-pointer w-full bg-gradient-to-l from-blue-500 to-orange-200 text-white font-bold py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-lg"
          >
            Login With Google
          </button>
          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <span className="text-indigo-600 font-semibold hover:text-indigo-700 cursor-pointer">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
