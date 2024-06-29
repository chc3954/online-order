import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GoogleSignInButton } from "./googleSignInButton";
import { headers } from "next/headers";

export default function Login({ searchParams }: { searchParams: { message: string } }) {
  const origin = process.env.VERCEL_URL ?? "http://localhost:3000";

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    if (data) {
      return redirect("/");
    }
  };

  const signInWithGoogle = async () => {
    "use server";
    console.log(origin);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        }
      }
    });

    if (error) {
      return console.error("Error signing in with Google:", error.message);
    }

    if (data?.url) {
      return redirect(data.url); // use the redirect API for your server framework
    }
  };

  return (
    <div className="flex justify-center bg-white">
      <div className="p-10 m-10 text-left border border-gray-300 rounded-lg bg-white shadow-xl">
        <h3 className="text-2xl font-bold text-center">Welcome Back!</h3>
        <form className="mt-8">
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              name="password"
              required
            />
          </div>
          <div className="mt-4  justify-between">
            <button
              type="submit"
              className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              formAction={signIn}>
              Sign In
            </button>
            <GoogleSignInButton signInWithGoogle={signInWithGoogle} />
            <div className="w-full px-6 py-2 mt-4">
              New customer?{" "}
              <Link href="/signup" className="underline hover:font-semibold">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
        {searchParams?.message && (
          <p className="mt-4 text-sm text-center text-red-600">{searchParams.message}</p>
        )}
      </div>
    </div>
  );
}
