import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  const btnStyle =
    "py-2 px-3 rounded-xl no-underline bg-btn-background hover:bg-btn-background-hover font-semibold uppercase";

  return user ? (
    <div className="flex items-center justify-self-end gap-4">
      <span className="text-sm">Hey, {user.email}!</span>
      <form action={signOut}>
        <button className={btnStyle}>Logout</button>
      </form>
    </div>
  ) : (
    <Link href="/login" className={btnStyle}>
      Login
    </Link>
  );
}
