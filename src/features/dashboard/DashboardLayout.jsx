import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBooking } from "./useRecentBookings";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBooking();
  const { isLoading: isLoadingStays, stays, confirmedStays } = useRecentStays();
  return <StyledDashboardLayout></StyledDashboardLayout>;
}

export default DashboardLayout;
