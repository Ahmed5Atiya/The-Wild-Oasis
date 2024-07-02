import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import SortedBy from "../../ui/SortedBy";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // 2) SORT BY
  const sortByRow = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy], //this mean when the filter change the reactQuery will re fetch the data again
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, bookings, error };
}

export default useBookings;
