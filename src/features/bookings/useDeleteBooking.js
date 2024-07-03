import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();
  const {
    mutate: Deleted,
    isLoading: isDeleteing,
    error,
  } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success("the Booking is Delete Scussafluy");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: () => toast.error(error.message),
  });
  return { Deleted, isDeleteing, error };
}

export default useDeleteBooking;
