import { signOut } from "firebase/auth";
import { auth } from "../utils/utils";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Profile() {

  const { user } = useContext(AuthContext);
  // console.log(user);


  function Logout() {
    signOut(auth);
  }

  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto py-16 px-4">
          {/* Profile Card */}
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              {/* User Image */}
              <div className="flex justify-center">
                <img
                  className="h-32 w-32 rounded-full object-cover"
                  src={user?.userInfo.photoURL || "https://via.placeholder.com/150"} // Fallback image if no profile pic
                  alt="Profile"
                />
              </div>

              {/* User Info */}
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">{user?.userInfo.name || "User Name"}</h2>
                <p className="text-gray-600">{user?.userInfo.email || "user@example.com"}</p>
              </div>

              {/* Contact Info */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">Phone: {user?.userInfo.number || "N/A"}</p>
              </div>

              {/* Logout Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={Logout}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;