'use client'
import  Link  from 'next/link';
import { Button } from './ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MobileNav from './mobile-navbar';
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname ==="/Home";
  return (
    <header className="fixed w-full top-0 z-10 flex justify-center px-8 bg-white">
      {`w-full z-10 flex justify-center px-8 bg-white ${isHome ? "fixed top-0" : "relative"}`}

      <div className="container flex justify-between items-center py-2 border-b border-gray-500 backdrop-blur ">
        <Link className="text-lg font-bold md:text-xl" href={"/"}>
          AIdo.
        </Link>
        <ul className="hidden lg:flex w-full justify-end items-center space-x-12">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>About</Link></li>
          <li><Link href={"/blog"}>Blog</Link></li>
          <li><Link href={"/"}>Technology Page</Link></li>
          <li>
            <Button>
              <Link href={"/"}>Reach out to us</Link>
            </Button>
          </li>
        </ul>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className='size-6 lg:hidden' />
          </SheetTrigger>
          <SheetContent>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
