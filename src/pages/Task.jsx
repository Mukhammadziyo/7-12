import { useParams } from "react-router-dom";
import { useDocument } from "../hook/useDocument";
import Loader from "./Loader";
import Avatar from "../components/Logo";
import { useSelector } from "react-redux";
import { FaUser, FaEnvelope, FaBirthdayCake, FaIdCard } from "react-icons/fa";
import { useEffect } from "react";
import toast from "react-hot-toast";
import "aos/dist/aos.css";

function Task() {
  const { user } = useSelector((store) => store.user);
  const { id } = useParams();
  const { isPending, data } = useDocument("tasks", id);

  useEffect(() => {
    if (!isPending && data) {
      toast.success("Welcome, my home. 🎉");
    }
  });

  if (isPending) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="p-5">
    <h2 className="text-3xl font-medium text-white mb-10">My house</h2>
    <div className="bg-gradient-to-r from-[#1a202c] to-[#2d3748] text-white p-6 rounded-xl shadow-lg max-w-[50%] mx-auto hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <Avatar user={user} />
        <h2 className="text-2xl font-semibold flex items-center gap-2 mt-3">
          <FaUser className="text-yellow-300" /> {data.title || "No Name"}
        </h2>
      </div>
      <div className="mt-4 space-y-3">
        <h2 className="flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors duration-300">
          <FaEnvelope className="text-yellow-300" />{" "}
          {data.creator?.email || "No Email"}
        </h2>
        <h3 className="flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors duration-300">
          <FaBirthdayCake className="text-yellow-300" />{" "}
          {data.dueTo || "No Birthday"} 📅
        </h3>
        <p className="flex items-center gap-2 text-lg hover:text-yellow-400 transition-colors duration-300">
          <FaIdCard className="text-yellow-300" /> {data.uid}
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default Task;
