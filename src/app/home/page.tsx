
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-auto flex justify-center items-center my-16">
      <div className="w-[1152px] h-auto flex justify-between items-center flex-wrap">
        {/* Title */}
        <div className="flex w-full justify-between h-screen items-center">
          <div className="w-[400px]">
            <h1 className="text-3xl font-bold size-10 w-full">
              Title - Website Headline
            </h1>
            <p className="text-sm font-medium text-[#000] py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia augue nec diam posuere, eu tempor purus scelerisque. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
              augue nec diam posuere, eu tempor purus scelerisque.
            </p>
            <Button>
              <Link style={{ textDecoration: "none", fontSize: "12px" }} href={"/"}>
                Learn more
              </Link>
            </Button>
          </div>
          <img className="h-[400px]" src="test1.png" alt="test" />
        </div>
        {/*  */}
        <div className="w-full my-4 z-20 bg-white">
          <h1 className="font-bold text-3xl">Horizontal card headline.</h1>
          <div className="flex w-full justify-between">
            <img src="test1.png" alt="test" />
          </div>
        </div>
      </div>
    </div>
  );
}
