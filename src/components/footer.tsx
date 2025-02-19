import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-auto z-50 bg-black p-8 flex justify-center text-white">
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <div>
          Logo
          <div className="my-3">
            175 Tay Son, <br></br> 203 C5
          </div>
          <div className=""> © 2024 - 2025 Aido Inc.</div>
        </div>

        <ul>
          <li className="leading-loose font-bold">Links</li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              home
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              about
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              blog
            </Button>
          </li>
        </ul>

        <ul>
          <li className="leading-loose font-bold">Contact</li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              data@gmail.com
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              0969918064
            </Button>
          </li>
        </ul>

        <ul>
          <li className="leading-loose font-bold">Help & Support</li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              Privacy Policy
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              Terms & Conditions
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              Cookie Policy
            </Button>
          </li>
          <li>
            <Button className="text-white p-0" variant={"link"}>
              Cookie Settings
            </Button>
          </li>
        </ul>

        <ul>
          <li className="leading-loose font-bold">Social</li>
          <li className="flex space-x-4">
            <FaFacebook size={30} /> <FaGithub size={30}/> <FaTelegram  size={30}/>
          </li>
        </ul>
      </div>
    </div>
  );
}
