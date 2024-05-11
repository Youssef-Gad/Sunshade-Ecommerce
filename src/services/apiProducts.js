import { products } from "./products";
import supabase from "./supabase";

export async function uploadProducts() {
  const { error } = await supabase
    .from("products")
    .insert(products)
    .select("*");

  if (error) console.log(error.message);
}

export async function getTrendingProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, category, image")
    .eq("trending", true);

  if (error) console.log(error.message);
  return data;
}

export async function getProducts(filter) {
  let query = supabase.from("products").select("*");
  if (filter !== "All") query = query.eq("gender", filter);
  const { data, error } = await query;

  if (error) console.log(error.message);
  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id);

  if (error) console.log(error.message);
  return data;
}

export async function filterProducts(gender) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("gender", gender);

  if (error) console.log(error.message);
  return data;
}
