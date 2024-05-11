import { useState } from "react";
import { useUser } from "../features/authentication/useUser";
import Button from "../ui/Button";
import AddressForm from "../features/authentication/AddressForm";
import Spinner from "../ui/Spinner";
import { useLogout } from "../features/authentication/useLogout";
import UserNotLoggedin from "../features/authentication/UserNotLoggedin";

function Account() {
  const { user, isLoading } = useUser();
  const [showProfileAddress, setShowProfileAddress] = useState("profile");
  const [showAdderssForm, setShowAddressForm] = useState(false);
  const { logout, isLoading: logoutLoading } = useLogout();

  if (isLoading) return <Spinner />;

  if (user === null) return <UserNotLoggedin />;

  return (
    <div className="mx-auto max-w-md sm:max-w-lg mt-20 bg-white flex flex-col min-h-[60vh] p-7">
      <div className="flex justify-center mb-10">
        <button
          className={`${showProfileAddress === "profile" ? "bg-black text-white" : "bg-[#F3F4F6]"} px-10 sm:px-20 py-2`}
          onClick={() => setShowProfileAddress("profile")}
        >
          Profile
        </button>
        <button
          className={`${showProfileAddress === "address" ? "bg-black text-white" : "bg-[#F3F4F6]"} px-10 sm:px-20 py-2`}
          onClick={() => setShowProfileAddress("address")}
        >
          Address
        </button>
      </div>
      {showProfileAddress === "profile" && (
        <div>
          <p>
            <span className="text-[#888]">Username:</span>{" "}
            {user?.user_metadata?.fullName || user?.user_metadata?.full_name}
          </p>
          <p className="mb-7">
            <span className="text-[#888]">Email:</span>{" "}
            {user?.user_metadata?.email}
          </p>
          <hr />
          <button
            className="mt-7 bg-[#E11D48] text-white px-20 py-2 rounded-lg"
            disabled={logoutLoading}
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}

      {showProfileAddress === "address" && (
        <div>
          <div className="bg-[#F3F4F6] p-3">
            <p className="text-center text-lg font-semibold">Current Address</p>
            <p>
              <span className="text-[#888]">Address: </span>
              {user?.user_metadata?.addressName || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Flat, House no., Building: </span>
              {user?.user_metadata?.house || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Town/City: </span>
              {user?.user_metadata?.city || "No Data"}
            </p>
            <p>
              <span className="text-[#888]">Mobile Phone: </span>
              {user?.user_metadata?.mobileNumber || "No Data"}
            </p>
          </div>
          {!showAdderssForm && (
            <Button
              style={`mt-10 bg-black text-white px-5 py-2 rounded-full`}
              callback={() => setShowAddressForm(true)}
            >
              {user?.user_metadata?.addressName
                ? "Edit Address"
                : "+ Add New Address"}
            </Button>
          )}
          {showAdderssForm && (
            <AddressForm setShowAddressForm={setShowAddressForm} />
          )}
        </div>
      )}
    </div>
  );
}

export default Account;
