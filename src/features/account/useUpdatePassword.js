import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: (password) => updatePasswordApi(password),
    onSuccess: () => {
      toast.success(`Password successfully updated`);
    },

    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { updatePassword, isLoading };
}
