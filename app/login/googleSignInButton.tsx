"use client";
import googleLogo from "../../asset/images/google_logo.png";
import Image from "next/image";

export function GoogleSignInButton({ signInWithGoogle }: { signInWithGoogle: Function }) {
  return (
    <div
      className="w-full px-6 py-2 mt-4 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 flex items-center justify-center cursor-pointer"
      onClick={() => signInWithGoogle()}>
      <Image src={googleLogo} alt="Google Logo" className="mx-2 w-5 antialiased" />
      Sign in with Google
    </div>
  );
}
