"use client"
import Image from "next/image";
import Message from "@/components/message";
export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-[1152px] flex justify-center items-center">
        <Image src="/404.png" alt="404 Not Found" width={450} height={350} />
        <Message
          title="Opps!"
          content="We couldn’t find the page you were looking for."
          linkNext={"/"}
          titleButton="Go home"
        />
      </div>
    </div>
  );
}
