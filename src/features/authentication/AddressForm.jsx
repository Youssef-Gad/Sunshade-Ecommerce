import { useState } from "react";
import { useUser } from "./useUser";
import { useUpdateAddress } from "./useUpdateAddress";

function AddressForm({ setShowAddressForm }) {
  const { updateAddress, isLoading } = useUpdateAddress();
  const { user } = useUser();
  const [addressName, setAddressName] = useState(
    user?.user_metadata.addressName
  );
  const [mobileNumber, setMobileNumber] = useState(
    user?.user_metadata.mobileNumber
  );
  const [house, setHouse] = useState(user?.user_metadata.house);
  const [city, setCity] = useState(user?.user_metadata.city);
  const [pinCode, setPinCode] = useState(user?.user_metadata.pinCode);
  function handleSubmit(e) {
    e.preventDefault();
    updateAddress({ addressName, mobileNumber, house, city, pinCode });
  }

  return (
    <form
      className="mt-5 bg-[#F9FAFB] p-4 flex flex-col gap-5"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-3">
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder=""
            className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile No.</label>
          <input
            type="number"
            placeholder=""
            className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label>Flat, House no., Building</label>
        <input
          type="text"
          placeholder=""
          className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          required
        />
      </div>
      <div className="flex gap-3">
        <div>
          <label>Town/City</label>
          <input
            type="text"
            placeholder=""
            className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pin Code</label>
          <input
            type="number"
            placeholder=""
            className="border border-[#E5E7EB] w-full rounded-md px-2 h-8"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-around">
        <button
          type="reset"
          className="bg-black text-white px-10 py-2 rounded-full font-semibold hover:bg-[#000000b6] transition-colors duration-300"
          onClick={() => setShowAddressForm(false)}
        >
          Cancel
        </button>
        <button
          className="bg-black text-white px-10 py-2 rounded-full font-semibold hover:bg-[#000000b6] transition-colors duration-300"
          disabled={isLoading}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
