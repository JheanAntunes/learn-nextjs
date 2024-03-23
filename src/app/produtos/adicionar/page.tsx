import { FormAddProduct } from "@/components/produtos/adicionar/components/form-add-product";
import React from "react";

const PageAddProduct = () => {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <FormAddProduct />
      </div>
    </div>
  );
};

export default PageAddProduct;
