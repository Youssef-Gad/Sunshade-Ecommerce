import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="px-[4%] md:px-[10%] bg-[#fbfaf7] pb-20">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
