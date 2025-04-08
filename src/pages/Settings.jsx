import { useEffect } from "react";
import toast from "react-hot-toast";

function Settings() {
  useEffect(() => {
    toast.success("Welcome Settings");
  });
  return (
    <div className="px-5 pt-5">
    <h2 className="text-3xl font-medium text-white">Settings</h2>
    <div className="p-5 text-center bg-[#1e1e1e] rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white">Settings PAges</h2>
      <p className="mt-2 text-gray-400">
        You can follow about your qualification in this page!
      </p>
      <h3 className="text-gray-500 mt-5">Empty State</h3>
    </div>
  </div>
  
  );
}

export default Settings;
