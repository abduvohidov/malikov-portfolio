"use server";
import { cookies } from "next/headers";

export async function setLanguageValue(value: string) {
  const cookieStore = await cookies();
  cookieStore.set("language", value);
}
