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
      <h2 className="text-3xl font-bold text-slate-100 mb-10">Dashboard</h2>

      {data &&
        data.map((u) => (
          <div
            key={u.id}
            className="bg-gradient-to-br from-indigo-800 to-indigo-700 hover:from-indigo-700 hover:to-indigo-600 border border-indigo-600 text-slate-100 shadow-md hover:shadow-lime-500/30 rounded-xl p-5 mb-5 last:mb-0 transition duration-300"
          >
            <Link to={`/task/${u.id}`}>
              <h2 className="text-xl font-semibold mb-2">{u.title}</h2>
              <p className="text-slate-300">{u.description}</p>
              <h3 className="text-sm text-slate-400 mt-4">📅 {u.dueTo}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
