"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./mobile-navbar";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);

    setTimeout(() => {
      setProgress(70);
    }, 100);

    setTimeout(() => {
      setProgress(100);
    }, 500);
  }, [pathname]);

  // This runs whenever page loads
  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 700);
  }, []);
  return (
    <header
      className={`w-full z-50 flex justify-center px-8 bg-white bg-opacity-85 ${
        isHome ? "fixed top-0 mg" : "relative"
      }`}
    >
      <LoadingBar
        color="#6028ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        aria-live="polite"
      />
      <div className="container flex justify-between items-center py-2 border-b border-gray-500 backdrop-blur ">
        <Link className="text-lg font-bold md:text-xl" href={"/"}>
          AIdo.
        </Link>
        <ul className="hidden lg:flex w-full justify-end items-center space-x-12">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Service</Link>
          </li>
          <li>
          <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Button asChild>
              <Link href={"/login"}>Reach out to us</Link>
            </Button>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-6 lg:hidden" aria-label="Open navigation menu"/>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle></SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
