import { useSelector } from "react-redux";
import Avatar from "./Logo";
import { RxDashboard } from "react-icons/rx";
import { MdCreateNewFolder } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const { user, displayName } = useSelector((store) => store.user);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="col-start-1 col-end-3 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen px-4 pt-10 pb-6 rounded-r-2xl shadow-2xl">
    <div className="flex flex-col items-center mb-10">
      <figure className="flex flex-col items-center gap-2">
        <Avatar user={user} />
        <h3 className="text-xl font-semibold text-white text-center">Hello, {user.displayName}</h3>
      </figure>
    </div>
  
    <div className="flex flex-col items-end gap-4">
      <Link
        to="/"
        className={`flex items-center gap-3 py-2 px-4 w-40 rounded-l-2xl font-medium transition duration-300 ${
          location.pathname === "/"
            ? "bg-purple-700 text-white shadow-md"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow"
        }`}
      >
        <RxDashboard size={20} />
        <span className="whitespace-nowrap">Dashboard</span>
      </Link>
  
      <Link
        to="/create"
        className={`flex items-center gap-3 py-2 px-4 w-40 rounded-l-2xl font-medium transition duration-300 ${
          location.pathname === "/create"
            ? "bg-purple-700 text-white shadow-md"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow"
        }`}
      >
        <MdCreateNewFolder size={20} />
        <span className="whitespace-nowrap">Create</span>
      </Link>
  
      <Link
        to="/settings"
        className={`flex items-center gap-3 py-2 px-4 w-40 rounded-l-2xl font-medium transition duration-300 ${
          location.pathname === "/settings"
            ? "bg-purple-700 text-white shadow-md"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow"
        }`}
      >
        <IoIosSettings size={20} />
        <span className="whitespace-nowrap">Settings</span>
      </Link>
    </div>
  </div>
  
  );
}

export default Sidebar;
