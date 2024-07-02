import supabase from "./supabase";

export async function getBookings({ filter, sortBy }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, totalPrice, numGuests, status, cabins(name), guests(fullName , email)"
    );
  // 1) FILTER
  if (filter !== null) query = query.eq(filter.field, filter.value);

  // 2) SORT BY
  if (sortBy)
    query.order(sortBy.field, { ascending: sortBy.direction === "asc" });
  let { data, error } = await query;
  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }
  console.log(data);
  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const today = new Date();
  today.setUTCHours(23, 59, 59, 999); // Set to the last second of the day

  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extrasPrice")
    .gte("created_at", date)
    .lte("created_at", today.toISOString());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0); // Set to the beginning of the day

  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", today.toISOString());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const today = new Date().toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.'${today}'),and(status.eq.checked-in,endDate.eq.'${today}')`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}
