"use client";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MobileNav = dynamic(() => import("./mobile-navbar"), { ssr: false });

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/Home";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, [pathname]);

  return (
    <motion.header
      className={`w-full z-50 flex justify-center px-8 bg-white bg-opacity-85 ${isHome ? "fixed top-0 mg" : "relative"}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <LoadingBar color="#6028ff" progress={progress} onLoaderFinished={() => setProgress(0)} aria-live="polite" />

      <div className="container flex justify-between items-center py-2 border-b border-gray-500 backdrop-blur">
        <Link className="text-lg font-bold md:text-xl" href="/" prefetch={true}>
          AIdo.
        </Link>

        <ul className="hidden lg:flex w-full justify-end items-center space-x-12">
          <li className="cursor-pointer">
            {isHome ? (
              <ScrollLink to="service" smooth={true} duration={600} offset={-50}>
                Service
              </ScrollLink>
            ) : (
              <Link href="/home?section=service" prefetch={true}>
                Service
              </Link>
            )}
          </li>
          <li>
            <Link href="/contact" prefetch={true}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" prefetch={true}>
              Blog
            </Link>
          </li>
          <li>
            <Button asChild>
              <Link href="/login">Reach out to us</Link>
            </Button>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-6 lg:hidden" aria-label="Open navigation menu" />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle></SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
