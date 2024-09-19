"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <h1>from Client: Hello, {JSON.stringify(session.data.user)}</h1>;
  }
  return <h1>From Client user is NOT signed in</h1>;
}
