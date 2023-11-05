import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-jost">
      <div className="px-10 pt-10 bg-lightGreen">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
