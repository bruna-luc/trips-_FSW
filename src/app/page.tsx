"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const { data } = useSession();

  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      {/* <h1>Olá {data?.user?.name}</h1> */}
      {/* <img src={data?.user?.image ?? ""} alt="" /> */}
      {/* <button onClick={() => signOut()}>signOut</button> */}
    </div>
  );
}
