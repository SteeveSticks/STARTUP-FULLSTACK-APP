import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgePlus, Github, GithubIcon, LogOut } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-5 sm:hidden" />
              </Link>

              <button
                className="cursor-pointer"
                onClick={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <span>
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-5 sm:hidden text-red-500" />
                </span>
              </button>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user.image || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <button
              className="cursor-pointer"
              onClick={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
