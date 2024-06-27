import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // create the uniqe name for the image
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // https://ilcbgtlcqveqmxguteye.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  // create the image path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // create cabins
  let query = await supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) EDIT
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cabins could not be Added");
  }

  // upload the File
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete the cabin if no image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error);
    throw new Error("Cabin Image Can not be uploaded and cant be created");
  }

  return data;
}

export async function deleteCabins(id) {
  const { error, data } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("cabins could not be deleted");
  }
  return data;
}
