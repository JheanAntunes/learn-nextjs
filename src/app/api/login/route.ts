import { cookies as NextCookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
type Body = {
  username: string;
  password: string;
};
export const POST = async (request: NextRequest) => {
  //cookies
  const cookies = NextCookies();

  // get data register user
  const body = (await request.json()) as Body;

  //cadastrar usuário:
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) return NextResponse.json({ ok: false, status: 401 });

  const dataLogin = await response.json();

  const token = dataLogin.token as string;

  console.log("token generate: ", token);
  //set token in cookie:
  cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  });
  return NextResponse.json({ ok: true, status: 201 });
};
