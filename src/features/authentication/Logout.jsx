import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      className="md:px-4 md:py-2 md:self-start md:pl-8 flex items-center gap-3 text-sm font-semibold text-stone-300 transition-all duration-200 hover:text-main-500"
      onClick={logout}
      disabled={isLoading}
    >
      <HiOutlineArrowRightOnRectangle className="text-2xl" />
      Logout
    </button>
  );
}

export default Logout;
