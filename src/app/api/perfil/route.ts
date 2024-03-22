import { cookies as nextCookies } from "next/headers";
import { NextResponse } from "next/server";

// export const GET = async () => {
//   const cookies = nextCookies();
//   const token = cookies.get("token")?.value;
//   if (!token)
//     return NextResponse.json({
//       ok: false,
//       status: 401,
//       error: {
//         message: "Failed: Not token",
//       },
//     });
//   const response = await fetch("'https://api.origamid.online/conta/perfil", {
//     method: "GET",
//     headers: {
//       Authorization: "Bearer  " + token,
//     },
//   });
//   if (!response.ok)
//     NextResponse.json({
//       ok: false,
//       status: 401,
//       error: { message: "Failed request authorization" },
//     });
//   const dataUser = await response.json();

//   return NextResponse.json({ ok: true, status: 200, data: dataUser });
// };

// app/api/perfil/route.ts
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("token")?.value;
  console.log("token: ", token);
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = response.ok ? await response.json() : null;
  return Response.json(data);
}
