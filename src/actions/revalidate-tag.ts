"use server";

import { revalidateTag } from "next/cache";

export const revadaliteTagsAction = async (tag: string) => {
  revalidateTag(tag);
};
