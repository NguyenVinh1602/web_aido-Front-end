'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname ==="/Home";
  console.log(pathname)

  return (
    <div className= {`flex justify-center ${ isHome ? "fixed top-0 left-0 w-full" : "relative"}`}>
      <div className="w-[1152px] bg-white bg-opacity-70 h-auto flex justify-between items-center py-2 border-b border-gray-500">
        <Link href={"/"} className="text-m">Logo</Link>
        <ul className="w-[700px] flex justify-between items-center">
          <li>
            <Button variant={"link"}>First Page</Button>
          </li>
          <li>
            <Button variant={"link"}>Second Page</Button>
          </li>
          <li>
            <Button variant={"link"}>Blog</Button>
          </li>
          <li>
            <Button variant={"link"}>Technology Page</Button>
          </li>
          <li>
            <Button className="h-[40px]">
             <Link href={"/contact"}> React out to us</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
