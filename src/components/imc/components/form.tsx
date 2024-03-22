"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useRef, useState } from "react";

const FormImc = () => {
  const [imc, setImc] = useState("");
  const refPeso = useRef<HTMLInputElement>(null);
  const refAltura = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!refPeso || !refAltura) return;
    //checked values input
    const peso = Number(refPeso.current?.value);
    const altura = Number(refAltura.current?.value.replace(",", "."));
    const calcImc = peso / (altura * altura);
    setImc(`${calcImc.toFixed(2)}kg`);
  };

  return (
    <>
      <div>
        <p className="text-lg">Imc: {imc}</p>
      </div>
      <form className="space-y-8 w-full max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="peso">Peso</Label>
          <Input id="peso" placeholder="Peso aqui" required ref={refPeso} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="altura">Altura</Label>
          <Input
            id="altura"
            placeholder="Altura aqui"
            required
            ref={refAltura}
          />
        </div>
        <Button type="submit">Calcular</Button>
      </form>
    </>
  );
};

export default FormImc;
