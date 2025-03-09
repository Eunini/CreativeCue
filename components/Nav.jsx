"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { auth } from "@/utils/firebase"; // Import Firebase auth
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAdditionalUserInfo,
} from "firebase/auth";

const Nav = () => {
  const { data: session, status } = useSession(); // Get session & status
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Debugging: Log session data
  useEffect(() => {
    console.log("Session Data:", session);
  }, [session]);

  // Fetch Auth Providers
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        console.log("Auth Providers:", res);
        setProviders(res);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };
    fetchProviders();
  }, []);

  // ✅ Custom Firebase Google Sign-In with Popup Fallback
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      await signIn("google");
    } catch (error) {
      console.error("Google Sign-In Error:", error);

      if (error.code === "auth/popup-blocked") {
        console.warn("Popup blocked! Using redirect sign-in...");
        await signInWithRedirect(auth, provider);
      }
    }
  };

  return (
    <nav className="flex-between justify-around w-full mb-16 pt-3">
      <Link href="/" className="flex flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">CreativeCue</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {status === "loading" ? (
          <Image
            src="/assets/icons/user.gif"
            alt="loading-profile"
            width={37}
            height={37}
          />
        ) : status === "unauthenticated" ? (
          <button type="button" onClick={handleGoogleSignIn} className="red-btn">
            Sign in
          </button>
        ) : session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="red-btn">
              Create Post
            </Link>

            <button
              type="button"
              onClick={signOut}
              className="outline_btn py-2 text-base bg-red-500 outline-0 border-0 rounded-md text-white"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image || "/assets/images/default-avatar.png"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : null}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {status === "loading" ? (
          <Image
            src="/assets/icons/user.svg" // ✅ Replace "Loading..." with User Icon
            alt="loading-profile"
            width={37}
            height={37}
          />
        ) : status === "unauthenticated" ? (
          <button type="button" onClick={handleGoogleSignIn} className="outline_btn">
            Sign in
          </button>
        ) : session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image || "/assets/images/default-avatar.png"}
              width={37}
              height={37}
              className="rounded-full cursor-pointer"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn text-base bg-red-500 outline-0 border-0 rounded-md text-white py-2"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
