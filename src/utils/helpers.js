export const subtractDates = (dateStr1, dateStr2) => {
  // Parse dates to JavaScript Date objects
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  // Get the difference in milliseconds
  const differenceInMs = date1.getTime() - date2.getTime();

  // Convert milliseconds to days (divide by 1000 * 60 * 60 * 24)
  const differenceInDays = differenceInMs / (1000 * 60 * 60 * 24);

  return Math.floor(differenceInDays); // Round down to whole days
};

export const formatDistanceFromNow = (dateStr) => {
  const then = new Date(dateStr);
  const now = new Date();

  const seconds = Math.floor((now - then) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let distanceString;
  if (days > 0) {
    distanceString = `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    distanceString = `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    distanceString = `${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    distanceString = `just now`;
  }

  return distanceString;
};

// export const getToday = function (options = {}) {
//   const today = new Date();

//   if (options?.end) {
//     today.setHours(23, 59, 59, 999); // Set to the last second of the day
//   } else {
//     today.setHours(0, 0, 0, 0); // Set to midnight
//   }

//   return today.toISOString();
// };
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
