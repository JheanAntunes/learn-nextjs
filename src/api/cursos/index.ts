const API_CURSOS = "https://api.origamid.online/cursos";

export type Cursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export type CursoAula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: CursoAula[];
};

export const requestApiCursos = async () => {
  try {
    const response = await fetch(API_CURSOS);
    if (!response.ok) throw new Error("Failed request: requestApiCurso");
    const json = await response.json();
    return json as Cursos[];
  } catch (error) {
    return error as Error;
  }
};

export const requestApiCursosDynamic = async (curso: string) => {
  try {
    const response = await fetch(`${API_CURSOS}/${curso}`);
    if (!response.ok) throw new Error("failed request: requestApiCursoDynamic");
    const json = await response.json();
    return json as Curso;
  } catch (error) {
    return error as Error;
  }
};

export const requestCursoAula = async (aula: string) => {
  // const response = await fetch(`${API_CURSOS/{}}`)
};
