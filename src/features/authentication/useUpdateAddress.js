import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserAddress } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  const { mutate: updateAddress, isLoading } = useMutation({
    mutationFn: ({ addressName, mobileNumber, house, city, pinCode }) =>
      updateUserAddress({ addressName, mobileNumber, house, city, pinCode }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      toast.success("User account successfully updated");
    },
    onError: (err) => {
      console.log("Error:", err);
      toast.error(err.message);
    },
  });
  return { updateAddress, isLoading };
}
