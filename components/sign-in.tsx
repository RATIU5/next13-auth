"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default SignIn;
