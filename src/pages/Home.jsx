import { Link } from "react-router-dom";
import { useCollection } from "../hook/useCollection";
import { useSelector } from "react-redux";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

function Home() {
  const { user } = useSelector((store) => store.user);
  const { data } = useCollection("tasks", ["uid", "==", user.uid]);

  if (!data) {
    toast.success("Welcome Dashboard");
  }
  return (
    <div className="px-6 pt-6">
    <h2 className="text-3xl font-bold text-white mb-10">Dashboard</h2>
  
    {data &&
      data.map((u) => (
        <div
          key={u.id}
          className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-600 text-white shadow-md hover:shadow-purple-500/30 rounded-xl p-5 mb-5 last:mb-0 transition duration-300"
        >
          <Link to={`/task/${u.id}`}>
            <h2 className="text-xl font-semibold mb-2">{u.title}</h2>
            <p className="text-gray-300">{u.description}</p>
            <h3 className="text-sm text-gray-400 mt-4">📅 {u.dueTo}</h3>
          </Link>
        </div>
      ))}
  </div>
  
  );
}

export default Home;