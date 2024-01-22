import { Outlet } from "react-router-dom";
import AppMenu from "./AppMenu";

function AppLayout() {
  return (
    <div className="bg-stone-900 h-dvh grid grid-rows-[1fr_64px] md:grid-cols-app font-body ">
      <AppMenu />
      <div className="bg-stone-900 p-4 sm:p-12 overflow-auto">
        <div className="max-w-7xl h-full w-full mx-auto flex flex-col gap-6 sm:gap-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
