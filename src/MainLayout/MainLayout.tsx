import { Outlet } from "react-router";
import Header from "../Section/Header/Header";

const MainLayout = () => {
  return (
    <div className="font-poppins w-full min-h-screen bg-gray-200 overflow-x-hidden">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
