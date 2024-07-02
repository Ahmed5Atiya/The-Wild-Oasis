import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import Booking from "../../pages/Booking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`the booking ${data.id} is Checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (data) => {
      toast.error(`the booking ${data.id} is have error`);
    },
  });
  return { checkin, isCheckingIn };
}

export default useCheckin;
