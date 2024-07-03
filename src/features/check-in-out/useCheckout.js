import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`the booking ${data.id} is Checked in`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: (data) => {
      toast.error(`the booking ${data.id} is have error`);
    },
  });
  return { checkout, isCheckingout };
}

export default useCheckout;
