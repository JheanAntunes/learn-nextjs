import FormImc from "@/components/imc/components/form";
import React from "react";

const PageImc = () => {
  return (
    <main className="w-full h-svh flex flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-serif font-bold">Calculo IMC</h1>
      <FormImc />
    </main>
  );
};

export default PageImc;
