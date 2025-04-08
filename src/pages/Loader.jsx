import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div className="bg-gray p-6 rounded-lg flex flex-col items-center">
    <ThreeDots height="70" width="50" color="black" ariaLabel="loading" />
    <span className="mt-2 text-gray-700 font-semibold">Loading...</span>
  </div>
</div>

  );
}

export default Loader;
