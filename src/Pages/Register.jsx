import { use } from "react";
import { Mail, Lock, User, Image } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = use(AuthContext);

  const navigate= useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.photoURL.value;
    

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Registration succesfully")
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error("Got an error during registration")
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-3 ">
            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div> */}
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-600 mt-2">Sign up to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label> */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

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
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              {/* <label className="block text-sm font-semibold text-gray-700 mb-2">
                Photo URL
              </label> */}
              <div className="relative">
                <Image className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Enter photo URL"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              {/* <label className=" text-sm font-semibold text-gray-700 mb-2">
                Password
              </label> */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button className="cursor-pointer w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all shadow-lg">
              Register
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <span className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
