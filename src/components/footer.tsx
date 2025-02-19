import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="w-full h-[350px] absolute  flex justify-center bg-black text-white">
      <div className="w-[1152px] h-auto justify-between my-10">
        <div className="text-m w-full flex justify-between">
          Logo
          <div className="flex w-[12%] justify-between">
            <div>facebook</div>
            <div>github</div>
          </div>
        </div>
        <div className=" w-full flex justify-between my-6">
          <div>
            <Button className="h-[40px]">
              <Link href={"/contact"}> React out to us</Link>
            </Button>
            <div className="my-3 text-center">
              175 Tay Son, <br></br> 203 C5
            </div>
          </div>
          <div className="flex w-[20%] justify-between">
            <ul>
              <li className="text-center leading-loose">Links</li>
              <li>
                <Button className="text-white" variant={"link"}>
                  home
                </Button>
              </li>
              <li>
                <Button className="text-white" variant={"link"}>
                  about
                </Button>
              </li>
              <li>
                <Button className="text-white" variant={"link"}>
                  blog
                </Button>
              </li>
            </ul>
            <ul>
              <li className="text-center leading-loose">inquiries</li>
              <li>
                <Button className="text-white" variant={"link"}>
                  data@gmail.com
                </Button>
              </li>     
              <li>
                <Button className="text-white w-full" variant={"link"}>
                  0969918064
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 mx-28"></div>
        <ul className="flex w-full justify-center items-center space-x-10 my-4">
          <li className="text-center"> © 2024 - 2025 aido Inc.</li>
          <li>
            <Link className="underline" href={"/"}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="underline" href={"/"}>
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link className="underline" href={"/"}>
              Cookie Policy
            </Link>
          </li>
          <li>
            <Link className="underline" href={"/"}>
              Cookie Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
