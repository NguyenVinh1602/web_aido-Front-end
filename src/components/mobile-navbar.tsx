import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const MobileNav = () => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
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
          <Button>
            <Link href={"/login"}>Reach out to us</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
