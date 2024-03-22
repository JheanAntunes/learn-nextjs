export const GET = async () => {
  const response = await fetch("https://api.origamid.online/vendas", {
    headers: {
      apikey: "ORIGAMID123456",
    },
  });

  const data = await response.json();
  return Response.json({ ok: true, status: 200, data });
};
