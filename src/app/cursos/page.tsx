import { requestApiCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";

const PageCursos = async () => {
  const dataCurso = await requestApiCursos();
  if (dataCurso instanceof Error) return;
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-7xl font-serif font-bold">Cursos na plataforma</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {dataCurso.map((curso) => (
          <Link key={curso.id} href={`/cursos/${curso.slug}`}>
            <ul className="list-disc">
              <li className="text-2xl font-serif font-medium">{curso.nome}</li>
              <li className="text-base text-neutral-600">{curso.descricao}</li>
              <li className="text-base text-neutral-600">
                Aulas: {curso.total_aulas}
              </li>
              <li className="text-base text-neutral-600">
                Total de horas: {curso.total_horas}hrs
              </li>
              <li className="text-base text-neutral-600">slug: {curso.slug}</li>
            </ul>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PageCursos;
