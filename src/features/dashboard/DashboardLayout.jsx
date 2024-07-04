import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBooking } from "./useRecentBookings";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBooking();
  const {
    isLoading: isLoadingStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading3 } = useCabins();
  if (isLoading || isLoadingStays || isLoading3) return <Spinner />;
  console.log(bookings);
  console.log(cabins);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
