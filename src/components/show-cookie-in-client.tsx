"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { getCookie } from "@/actions/cookie";

const ShowCookieInClient = () => {
  const [cookie, setCookie] = useState("");
  const handleClick = async () => {
    const token = await getCookie("token");
    setCookie(token);
  };
  return (
    <div>
      <span>Cookie: {cookie} </span>
      <Button onClick={handleClick}>GET Cookie</Button>
    </div>
  );
};

export default ShowCookieInClient;
