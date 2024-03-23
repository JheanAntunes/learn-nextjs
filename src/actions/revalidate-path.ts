"use server";

import { revalidatePath } from "next/cache";

export const revalidatePathAction = async (path: string) => {
  // revalidar o cache da página
  revalidatePath(path);
};
