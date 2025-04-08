function Input({ name, label, type }) {
  return (
    <div className="mb-6">
    <label htmlFor={name} className="block text-gray-200 font-semibold mb-2">
      {label}
    </label>
    <input
      required
      name={name}
      type={type}
      className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 hover:shadow-lg transition duration-200"
    />
  </div>
  
  );
}

export default Input;
