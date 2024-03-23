"use server";

import { setCookie } from "./cookie";

type LoginProps = {
  username: string;
  password: string;
};
export const Login = async (props: LoginProps) => {
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(props),
  });
  if (!response.ok) throw new Error("Failed login");
  const data = await response.json();
  const token = data.token as string;
  setCookie("token", token);
};
