import Loader from "../../ui/Loader";
import Logout from "../authentication/Logout";
import { useUser } from "../authentication/useUser";
import UpdatePassword from "./UpdatePassword";

function Account() {
  const {
    user: {
      email,
      user_metadata: { fullName },
    },
    isLoading: isLoadingUser,
  } = useUser();

  if (isLoadingUser) return <Loader />;

  return (
    <>
      <div className="flex justify-between items-center h-11">
        {/* HEADING */}
        <h2 className="text-stone-50 text-2xl font-bold">Account Settings</h2>
      </div>
      {/* USERS CONTAINER */}
      <div className="grid place-items-center h-full">
        <div className=" max-w-xl w-full h-full border-[0.5px] border-stone-600 rounded-lg px-12 py-8 flex flex-col justify-between items-center">
          <div className="w-full flex flex-col gap-6">
            {/* USER NAME */}
            <div className="flex flex-col gap-1">
              <p className="text-stone-200 text-base font-medium">Name</p>
              <div className="w-full py-1 border-b border-main-500">
                <p className="text-stone-400 text-base font-medium">
                  {fullName}
                </p>
              </div>
            </div>
            {/* USER EMAIL*/}
            <div className="flex flex-col gap-1">
              <p className="text-stone-200 text-base font-medium">Email</p>
              <div className="w-full py-1 border-b border-main-500">
                <p className="text-stone-400 text-base font-medium">{email}</p>
              </div>
            </div>

            {/* UPDATE PASSWORD */}
            <UpdatePassword />
          </div>
          <div className="self-end md:hidden">
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
