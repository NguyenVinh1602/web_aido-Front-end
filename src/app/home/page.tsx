"use client";
import Image from "next/image";
import Link from "next/link";

import Message from "@/components/message";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { people } from "@/config/homeContent";

export default function Home() {
  // Setting Slider
  return (
    <div className=" w-screen h-auto flex justify-center">
      {/* Title */}
      <div className="fixed z-0 w-[1152px] flex h-screen justify-between items-center">
        <div className="w-[450px] h-auto space-y-4">
          <h1 className="text-5xl font-bold w-full leading-[54px]">
            Title - Website Headline
          </h1>
          <p className="text-lg font-medium text-[#000] py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia augue nec diam posuere, eu tempor purus scelerisque. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
            augue nec diam posuere, eu tempor purus scelerisque.
          </p>
          <Button>
            <Link
              style={{ textDecoration: "none", fontSize: "12px" }}
              href={"/"}
            >
              Learn more
            </Link>
          </Button>
        </div>
        <img className="h-[360px]" src="test1.png" alt="test" />
      </div>
      {/* Content */}
      <div className="z-10 w-full h-auto mt-[100vh] bg-white py-20 flex flex-col justify-center items-center space-y-24">
        {/* Horizontal card */}
        <div className="w-[1152px]">
          <h1 className="font-bold text-5xl mb-12">
            Horizontal card headline.
          </h1>
          <div claName="w-full flex justify-between items-center">
            <img className="h-[360px]" src="test1.png" alt="test" />
            <p className="w-[460px] text-3xl font-medium text-[#000] py-4">
              Horizontal card description - this is where we describe maybe some
              features or benefits in more detail, provide more context, or just
              show anything we perceive to be important
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="w-[1152px] h-screen flex justify-center items-center">
          <img className="h-[600px] w-full" src="test1.png" alt="video" />
          <p className="font-bold text-3xl absolute text-white">
            "Content in here."
          </p>
        </div>

        {/* Features */}
        <div className="w-[1152px] space-y-8 flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">Features</h1>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <li className="relative mt-4 hover:-translate-y-1">
              <Avatar className="absolute -translate-y-1/2 left-6 h-14 w-14">
                <AvatarFallback className="bg-slate-400">1</AvatarFallback>
              </Avatar>

              <div className="space-y-4 bg-gray-200 p-6 pt-14 rounded-[20px] ">
                <h1 className="text-2xl font-bold">1st Features</h1>
                <p>
                  This is a description of the first feature of our website.
                  We’re goin to briefly outline what this feature does
                </p>
                <div>
                  <Link
                    href={"/"}
                    className="underline font-bold hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative mt-4">
              <Avatar className="absolute -translate-y-1/2 left-6 h-14 w-14">
                <AvatarFallback className="bg-pink-300">2</AvatarFallback>
              </Avatar>

              <div className="space-y-4 bg-gray-200 p-6 pt-14 rounded-[20px] ">
                <h1 className="text-2xl font-bold">2st Features</h1>
                <p>
                  This is a description of the first feature of our website.
                  We’re goin to briefly outline what this feature does
                </p>
                <div>
                  <Link
                    href={"/"}
                    className="underline font-bold hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative mt-4">
              <Avatar className="absolute -translate-y-1/2 left-6 h-14 w-14">
                <AvatarFallback className="bg-blue-300">3</AvatarFallback>
              </Avatar>

              <div className="space-y-4 bg-gray-200 p-6 pt-14 rounded-[20px] ">
                <h1 className="text-2xl font-bold">3st Features</h1>
                <p>
                  This is a description of the first feature of our website.
                  We’re goin to briefly outline what this feature does
                </p>
                <div>
                  <Link
                    href={"/"}
                    className="underline font-bold hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative mt-4">
              <Avatar className="absolute -translate-y-1/2 left-6 h-14 w-14">
                <AvatarFallback className="bg-green-300">4</AvatarFallback>
              </Avatar>

              <div className="space-y-4 bg-gray-200 p-6 pt-14 rounded-[20px] ">
                <h1 className="text-2xl font-bold">4st Features</h1>
                <p>
                  This is a description of the first feature of our website.
                  We’re goin to briefly outline what this feature does
                </p>
                <div>
                  <Link
                    href={"/"}
                    className="underline font-bold hover:opacity-80"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <Button>More about our features</Button>
        </div>

        {/* List member */}
        <div className="w-full space-y-16 flex flex-col justify-center items-center bg-gray-200 pt-16 px-16 pb-8">
          <h1 className="font-bold text-3xl">Hear from our customers</h1>
          <Swiper
            className="w-[1152px] custom-swiper"
            // install Swiper modules
            modules={[Pagination, Navigation]}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
              640: { slidesPerView: 2, spaceBetween: 20 },  // Tablet
              1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
            }}
          >
            {people.map((person) => (
              <SwiperSlide
                key={person.name}
                className="bg-white p-4 rounded-[20px]"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-slate-400">
                      {person.name}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-gray-500">{person.content}</p>
                  <h1 className="text-lg font-bold">{person.name}</h1>
                  <p className="text-sm font-bold text-gray-300">
                    {person.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* {people.map((person) => (
            <div key={person.name} className="relative mt-4 w-60">
              <Avatar className="absolute top-[-10%] right-[50%] translate-x-1/2 h-24 w-24">
                <AvatarFallback className="bg-slate-400">1</AvatarFallback>
              </Avatar>

              <div className="space-y-2 bg-white p-4 pt-20 rounded-[20px] text-center">
                <p className="text-gray-300">
                  “Meo meo meo meo meo meo meo, meo meo meo meo meo. Meo meo
                  meo, meo meo meo meo meo meo. Meo meo meow meow meow meow
                  meow. Meo meo meo meo meo meo meo, meo meo meo meo meo. “
                </p>
                <h1 className="text-lg font-bold">{person.name}</h1>
                <p className="text-sm font-bold text-gray-300">
                  Position @ Company
                </p>
              </div>
            </div>
          ))} */}
        </div>

        {/* Call to Action */}
        <div className="w-[1152px] bg-gray-200 rounded-[20px] space-y-8 flex flex-col items-center py-20">
          <p className="text-lg">Ready to leverage your data for success?</p>
          <p className="font-bold text-4xl w-[60%] text-center">
            Contact us for a personalized strategy that drives your business
            forward.
          </p>
          <Button className="p-6">Get started</Button>
        </div>
      </div>
    </div>
  );
}
