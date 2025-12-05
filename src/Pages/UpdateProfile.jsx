import React, { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const [error, setError] = useState("");
  const {  updateUser ,setUser} = use(AuthContext);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const link = e.target.url.value;
navigate("/");
    e.target.reset();

    // updateUser({ displayName: name, photoURL: link })
    //   .then((res) => {
    //     setUser({...user,displayName: name ,photoURL:link);
    //     toast.success("Registration succesfully");
    //     navigate("/");
    //   })
    //   .catch((e) => {
    //     setError(e);
    //   });
  };
  return (
    <div className="max-w-sm mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Image Link Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image Link
          </label>
          <input
            type="text"
            name="url"
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div> {error} </div>
        {/* Update Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
