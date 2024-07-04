import {
  HiAcademicCap,
  HiBanknotes,
  HiCalendarDays,
  HiChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

function Stats({ bookings, confirmStays, numDays, cabinCount }) {
  const numBooking = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmStays.length;
  console.log(cabinCount);
  const occupation =
    confirmStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        color="blue"
        icon={<HiAcademicCap />}
        title="ststic"
        value={numBooking}
      />
      <Stat color="green" icon={<HiBanknotes />} title="Sales" value={sales} />
      <Stat
        color="red"
        icon={<HiCalendarDays />}
        title="Check ins"
        value={checkins}
      />
      <Stat
        color="yellow"
        icon={<HiChartBar />}
        title="Occurany rate"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
