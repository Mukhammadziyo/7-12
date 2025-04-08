function Logo({ user }) {
  if (!user) return null;
  const { photoURL } = user;
  return (
    <div className="avatar flex flex-col items-center text-white mb-6">
    <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 shadow-lg border-2 border-gray-600 hover:shadow-purple-600/50 transition duration-300 ease-in-out">
      <img src={photoURL} alt="User Avatar" className="w-full h-full object-cover" />
    </div>
  </div>  
  );
}

export default Logo;
