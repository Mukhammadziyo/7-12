import { useSignOut } from "../hook/useLogout";

function Navbar() {
  const { isPending, signout } = useSignOut();
  return (
    <div className="w-full flex justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-700 px-6 py-3 rounded-xl shadow-2xl">
      <div>
        <img
          className="rounded-xl cursor-pointer hover:scale-105 transition duration-300 shadow-lg"
          src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-ui-icon-dark-mode-glyph-for-protected-contact-vector-png-image_12749640.png"
          width={50}
          height={50}
          alt="App Logo"
        />
      </div>
      <div
        className="p-3 bg-indigo-600 hover:bg-pink-500 rounded-xl cursor-pointer transition duration-300 shadow-lg hover:shadow-pink-400/40"
        onClick={signout}
      >
        <img
          src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-ui-icon-dark-mode-glyph-for-protected-contact-vector-png-image_12749640.png"
          alt="Sign Out"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}

export default Navbar;
