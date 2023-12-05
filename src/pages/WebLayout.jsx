import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function WebLayout() {
  return (
    <div className="bg-stone-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default WebLayout;
