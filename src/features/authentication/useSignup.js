import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      navigate("/login", { replace: true });
      toast.success("Signup successful ,Please login to your account", {
        duration: 5000,
      });
    },
    onError: (err) => {
      console.log("Error:", err);
      toast.error(err.message);
    },
  });
  return { signup, isLoading };
}
