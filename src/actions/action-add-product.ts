"use server";

import { Produto } from "@/components/produtos/produtos";
import { revalidatePathAction } from "./revalidate-path";
import { redirect } from "next/navigation";
const URL_PRODUCTS = "https://api.origamid.online/produtos";
type ActionAddProductProps = Produto;
export const ActionAddProduct = async (props: ActionAddProductProps) => {
  //add product
  const body = JSON.stringify({ ...props, importado: props.importado ? 1 : 0 });
  const response = await fetch(URL_PRODUCTS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const dataProduct = await response.json();
  console.log("product add succes: ", dataProduct);
  //revalite cache
  revalidatePathAction("/produtos");
  // redirecionar usuário para página de produtos com o cache atualizado
  redirect("/produtos");
};
