import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="max-w-sm mx-auto p-4">
      <div
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center gap-3 
                      hover:shadow-xl transition-shadow"
      >
   
        <img
          src={user?.photoURL}
          alt="User"
          className="w-24 h-24 rounded-full object-cover border"
        />


        <h2 className="text-xl font-semibold text-gray-800">
          {user?.displayName || "No Name"}
        </h2>

  
        <p className="text-gray-600 text-sm">{user?.email || "No Email"}</p>
       <Link to="/updateProfile"> <button className="btn btn-accent text-white">Update profile</button></Link>
      </div>
    </div>
  );
};

export default Profile;
