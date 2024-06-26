import supabase from "./supabase";

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function signup({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        fullName: fullName,
        addressName: "",
        mobileNumber: "",
        house: "",
        city: "",
        pinCode: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updateUserAddress({
  addressName,
  mobileNumber,
  house,
  city,
  pinCode,
}) {
  const { data, error } = await supabase.auth.updateUser({
    data: { addressName, mobileNumber, house, city, pinCode },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
