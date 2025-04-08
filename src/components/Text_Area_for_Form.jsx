function Text_Area_for_Form({ label, name }) {
  return (
    <div className="mb-6">
      <label className="block text-slate-100 font-semibold mb-2">{label}</label>
      <textarea
        className="w-full h-28 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-800 to-indigo-700 border border-indigo-600 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-500 hover:shadow-lg transition duration-300"
        placeholder="Type here"
        name={name}
      ></textarea>
    </div>
  );
}

export default Text_Area_for_Form;
