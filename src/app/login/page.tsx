import { ProfileForm } from "@/components/login/components/form-login";
import React from "react";

const PageLogin = () => {
  return (
    <main className="w-full h-svh flex flex-col items-center justify-center gap-5">
      <h1 className="font-serif font-bold text-7xl">Login</h1>
      <ProfileForm />
    </main>
  );
};

export default PageLogin;
