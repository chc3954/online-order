import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginBtn() {
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
    <div className="justify-self-end">
      <span className="text-sm">Hey, {user.email}!</span>
      <div className="inline-block ml-4">
        <form action={signOut}>
          <button className={btnStyle}>Logout</button>
        </form>
      </div>
    </div>
  ) : (
    <div className="justify-self-end">
      <button className={btnStyle}>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
}
