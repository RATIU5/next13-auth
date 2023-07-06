"use client";

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <button
      onClick={() => signIn()}
      className="text-lg mb-24 px-4 py-2 rounded-xl hover:bg-neutral-200"
    >
      Sign in to continue
    </button>
  );
};

export default SignIn;
