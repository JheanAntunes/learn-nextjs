"use server";
import { cookies as NextCookies } from "next/headers";
export const setCookie = async (key: string, value: string) => {
  const cookies = NextCookies();
  cookies.set(key, value, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
};

export const getCookie = async (key: string) => {
  const cookies = NextCookies();
  const value = cookies.get(key)?.value;
  if (!value) return "cookie not found";
  return value;
};
