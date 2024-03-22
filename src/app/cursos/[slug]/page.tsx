import { requestApiCursosDynamic } from "@/api/cursos";
import Link from "next/link";
import React from "react";

type Params = {
  slug: string;
};

type PageDynamicCurso = {
  params: Params;
};

const PageDynamicCurso = async (props: PageDynamicCurso) => {
  const { slug } = props.params;
  const dataCurso = await requestApiCursosDynamic(slug);
  if (dataCurso instanceof Error) return null;
  return (
    <main className="p-8">
      <h1 className="text-6xl font-serif font-bold">Curso {dataCurso.nome}</h1>
      <div className="flex flex-col gap-1">
        <span>Total de aulas: {dataCurso.total_aulas}</span>
        <span>Total de horas: {dataCurso.total_horas}</span>
      </div>
      <ul className="list-disc">
        {dataCurso.aulas.map((aula) => (
          <Link
            key={aula.curso_id}
            href={{
              pathname: `/cursos/${slug}/${aula.slug}`,
              query: {
                curso: slug,
              },
            }}
          >
            <li>
              <h2 className="text-3xl font-bold font-serif">
                Aula de {aula.nome}
              </h2>
              <ul className="list-disc list-inside">
                <li>{aula.descricao}</li>
                <li>Ordem: {aula.ordem}</li>
                <li>Tempo: {aula.tempo}</li>
              </ul>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default PageDynamicCurso;
