import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBooking } from "./useRecentBookings";
import Stats from "./Stats";
import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

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
    confirmedStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading3 } = useCabins();
  if (isLoading || isLoadingStays || isLoading3) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart
        confiemStays={confirmedStays}
        isLoadingStays={isLoadingStays}
      />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
