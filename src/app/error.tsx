"use client"
import Image from "next/image";
import Message from "@/components/message";
export default function Error() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <Image src="/500.png" alt="500 Sever Error" width={450} height={350} />
        <Message
          title="Internal Server Error!"
          content=" We are working towards creating something better.
                    We won’t be long. Please try again later."
          linkNext={"/home"}
          titleButton="Go home"
        />
      </div>
    </div>
  );
}
