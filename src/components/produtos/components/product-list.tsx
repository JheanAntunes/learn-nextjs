import React from "react";
import { getProducts } from "../fetch";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="p-8 space-y-2">
      <h1 className="text-4xl font-bold font-sans">Produtos</h1>
      <ul className="list-disc space-y-2">
        {products.map((product) => (
          <li key={product.id} className="pl-2">
            <h2 className="text-2xl font-bold font-sans">{product.nome}</h2>
            <p>{product.descricao}</p>
            <ul className="list-disc">
              <li>{product.preco}</li>
              <li>{product.estoque}</li>
              <li>{product.importado}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
