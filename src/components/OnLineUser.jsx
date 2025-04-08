import { useEffect } from "react";
import { useCollection } from "../hook/useCollection";

function OnLineUser() {
  const { data } = useCollection("users");
  const OnlineUsers = data ? data.filter((u) => u.isOnline) : [];
  const OflineUsers = data ? data.filter((u) => !u.isOnline) : [];


  return (
    <div className="col-start-11 col-end-13 flex flex-col pt-10 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl">
    <div className="flex flex-col gap-2 mb-6 text-white">
      <h2 className="text-lg font-semibold">
        online: <span className="text-green-400">({OnlineUsers.length})</span>
      </h2>
      <h2 className="text-lg font-semibold">
         offline: <span className="text-red-400">({OflineUsers.length})</span>
      </h2>
    </div>
  
    {OnlineUsers.map((u) => (
      <figure key={u.id}>
        <div className="flex items-center gap-3 text-white bg-gray-800 hover:bg-gray-700 transition duration-300 border border-gray-600 rounded-xl p-3 mb-3 shadow-md hover:shadow-green-400/30">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={u.photoURL} alt={u.displayName} />
          </div>
          <h3 className="text-sm font-medium">{u.displayName}</h3>
          <span className="bg-green-500 w-3 h-3 rounded-full ml-auto shadow-inner"></span>
        </div>
      </figure>
    ))}
  
    {OflineUsers.map((u) => (
      <figure key={u.id}>
        <div className="flex items-center gap-3 text-white bg-gray-800 hover:bg-gray-700 transition duration-300 border border-gray-600 rounded-xl p-3 mb-3 shadow-md hover:shadow-red-400/30">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={u.photoURL} alt={u.displayName} />
          </div>
          <h3 className="text-sm font-medium">{u.displayName}</h3>
          <span className="bg-red-500 w-3 h-3 rounded-full ml-auto shadow-inner"></span>
        </div>
      </figure>
    ))}
  </div>
  
  );
}

export default OnLineUser;
