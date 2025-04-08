function Text_Area_for_Form({ label, name }) {
  return (
    <div className="mb-6">
    <label className="block text-gray-200 font-semibold mb-2">{label}</label>
    <textarea
      className="w-full h-28 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:shadow-lg transition duration-300"
      placeholder="Type here"
      name={name}
    ></textarea>
  </div>
  
  );
}

export default Text_Area_for_Form;
