import { useEffect } from "react";
import { useCollection } from "../hook/useCollection";

function OnLineUser() {
  const { data } = useCollection("users");
  const OnlineUsers = data ? data.filter((u) => u.isOnline) : [];
  const OflineUsers = data ? data.filter((u) => !u.isOnline) : [];

  return (
    <div className="col-start-11 col-end-13 flex flex-col pt-10 px-4 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 rounded-xl shadow-xl">
      <div className="flex flex-col gap-2 mb-6 text-slate-100">
        <h2 className="text-lg font-semibold">
          online: <span className="text-lime-400">({OnlineUsers.length})</span>
        </h2>
        <h2 className="text-lg font-semibold">
          offline: <span className="text-rose-400">({OflineUsers.length})</span>
        </h2>
      </div>

      {OnlineUsers.map((u) => (
        <figure key={u.id}>
          <div className="flex items-center gap-3 text-slate-100 bg-indigo-800 hover:bg-indigo-700 transition duration-300 border border-indigo-600 rounded-xl p-3 mb-3 shadow-md hover:shadow-lime-300/30">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={u.photoURL}
                alt={u.displayName}
              />
            </div>
            <h3 className="text-sm font-medium">{u.displayName}</h3>
            <span className="bg-lime-400 w-3 h-3 rounded-full ml-auto shadow-inner"></span>
          </div>
        </figure>
      ))}

      {OflineUsers.map((u) => (
        <figure key={u.id}>
          <div className="flex items-center gap-3 text-slate-100 bg-indigo-800 hover:bg-indigo-700 transition duration-300 border border-indigo-600 rounded-xl p-3 mb-3 shadow-md hover:shadow-rose-300/30">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={u.photoURL}
                alt={u.displayName}
              />
            </div>
            <h3 className="text-sm font-medium">{u.displayName}</h3>
            <span className="bg-rose-400 w-3 h-3 rounded-full ml-auto shadow-inner"></span>
          </div>
        </figure>
      ))}
    </div>
  );
}

export default OnLineUser;
