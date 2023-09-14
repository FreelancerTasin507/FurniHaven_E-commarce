import {
  FaHeadset,
  FaQuestionCircle,
  FaSearchLocation,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" bg-slate-400 bg-opacity-40 p-2">
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <FaHeadset className="text-[#C89C74]"></FaHeadset>
          Hotline:
          <span className="text-[#C89C74]"> +018 343 434 34</span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <FaUserCircle className="text-[#C89C74]"></FaUserCircle>{" "}
            <span className="hover:text-[#C89C74] hover:duration-500">Login/Register</span>
          </div>
          <div className="flex items-center gap-1">
            <FaQuestionCircle className="text-[#C89C74]"></FaQuestionCircle>{" "}
            <span className="hover:text-[#C89C74] hover:duration-500">FAQ</span>
          </div>
          <div className="flex items-center gap-1">
            <FaSearchLocation className="text-[#C89C74]"></FaSearchLocation>{" "}
            <span className="hover:text-[#C89C74] hover:duration-500">Order Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
