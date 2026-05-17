"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";

export default function Navbar() {
  const router = useRouter();
  const userData = authClient.useSession();
  // console.log(userData?.data?.user);
  const user = userData?.data?.user;

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (!error) {
      router.push("/login");
    } else {
      console.log("LOGOUT ERROR:", error);
    }
  };
  return (
    <div
      className="max-lg:collapse bg-linear-to-r from-blue-400 to-cyan-100 text-white 
                 transition-all duration-300 
     shadow-sm  rounded-md"
    >
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar flex justify-between">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Link href="/">
            <Image src={logo} alt="logo" width={80} height={80}></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-emerald-500 font-bold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/all-campaigns">All campaigns</Link>
            </li>

            {user ? (
              <>
                <Link href="/">
                  <Image
                    src={user?.image}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
                <Link href="/">
                  <button
                    className="btn  text-emerald-500 font-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
