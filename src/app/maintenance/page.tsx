"use client"

import Image from "next/image";
import Message from "@/components/message";
export default function Maintenance() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-[1152px] flex justify-center items-center">
        <Image src="/Maintenance.png" alt="Maintenance" width={450} height={350} />
        <Message
          title="Opps!"
          content="The system is under maintenance."
          linkNext={"/"}
          titleButton="Go home"
        />
      </div>
    </div>
  );
}
