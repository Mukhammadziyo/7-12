import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import OnLineUser from "../components/OnLineUser";
import Navbar from "../components/Navbar";

function MainLayouts() {
  return (
    <div className="grid grid-cols-12 h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
  <Sidebar />

  <main className="col-start-3 col-end-11 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900 overflow-x-auto rounded-xl m-4 shadow-xl transition duration-300">
    <Navbar />
    <div className="p-6">
      <Outlet />
    </div>
  </main>

  <OnLineUser />
</div>

  );
}

export default MainLayouts;
