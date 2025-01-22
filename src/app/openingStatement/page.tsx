import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function OpeningStatement() {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className=" w-[1152px] text-center">
          <h1 className="text-3xl font-bold h-auto">Welcome to aido company.</h1>
          <Button className="my-3">
            <Link style={{ textDecoration: "none" }} href={"/Home"}>
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
