import { Produto } from "./produtos";

const URL_PRODUCTS = "https://api.origamid.online/produtos";
const DAY = 86000;
export const getProducts = async () => {
  const response = await fetch(URL_PRODUCTS, {
    next: {
      revalidate: DAY,
    },
  });
  const dataProducts = await response.json();
  return dataProducts as Produto[];
};
