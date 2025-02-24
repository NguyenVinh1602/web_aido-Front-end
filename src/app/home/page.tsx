"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";

import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ScrollColorText from "@/components/ScrollColorText";
import BounceText from "@/components/BounceText";
import ParticlesEffect from "@/components/ParticlesEffect";

import { people, features, cta } from "@/config/homeContent";

export default function Home() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.8);

  // Go to Service
  useEffect(() => {
    if (section) {
      scroller.scrollTo(section, {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, [section]);

  // Animation push x y
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Tính khoảng cách từ chuột đến trung tâm hình ảnh
    const diffX = clientX - centerX;
    const diffY = clientY - centerY;

    // Điều chỉnh mức độ lùi lại (có thể tăng giảm số này)
    const moveX = -(diffX / 35);
    const moveY = -(diffY / 35);

    setOffset({ x: moveX, y: moveY });
  };

  // ScrollZoomVideo
  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementById("video");
      if (!video) return;

      const rect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Nếu video đã đi qua màn hình, giữ nguyên kích thước
      if (rect.top < 0) {
        setScale(1);
        return;
      }

      // Tính khoảng cách video đến trung tâm màn hình
      const distanceToCenter = Math.abs(
        rect.top + rect.height / 2 - windowHeight / 2
      );

      // Điều chỉnh scale: càng gần giữa màn hình thì càng phóng to
      const newScale =
        0.8 + (1 - Math.min(distanceToCenter / windowHeight, 1)) * 0.2;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full flex justify-center">
      {/* Title */}
      <div className="container fixed z-0 min-h-screen grid lg:grid-cols-2 place-items-center md:pt-12 md:pb-24 p-8">
        <div className="py-6 lg:order-1 hidden md:block">
        <ParticlesEffect/>
        </div>
        <div className="h-auto space-y-4">
          <BounceText
            className="text-4xl lg:text-5xl xl:text-6xl font-bold w-full"
            text=" Title - Website Headline." 
          />
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
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
      </div>
      {/* Content */}
      <div className="z-10 w-full h-auto mt-[100vh] bg-white py-20 flex flex-col justify-center items-center ">
        {/* Horizontal card */}
        <div className="container p-8">
          {/* <h1 className="text-5xl text-center lg:text-left lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
            Horizontal card headline.
          </h1> */}
          <ScrollColorText
            className="text-5xl text-center lg:text-left lg:text-6xl xl:text-7xl font-semibold lg:tracking-tight xl:tracking-tighter"
            text="AIDO is the Future of AI Technology"
            highlightWords={["Future", "AI", "Technology"]}
            highlightColor="#60a5fa"
          />
          <div
            className="w-full grid lg:grid-cols-2 place-items-center md:pt-6 md:pb-12 "
            onMouseMove={handleMouseMove}
          >
            <div className="py-6 hidden md:block">
              <motion.img
                src="/test1.png"
                alt="Hover Effect"
                className="w-94 h-94 object-cover"
                animate={{ x: offset.x, y: offset.y }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />
            </div>
            <p className="w-[85%] text-3xl font-medium text-[#000] py-4 lg:mt-0 mt-8">
              Horizontal card description - this is where we describe maybe some
              features or benefits in more detail, provide more context, or just
              show anything we perceive to be important
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="container flex flex-col md:flex-row justify-center items-center p-8">
          {/* <Image
            src="/test1.png"
            alt="video"
            height={300}
            width={800}
            layout="responsive"
            className="max-h-[75%]"
          /> */}

          <motion.img
            id="video"
            style={{ scale }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            src="/test1.png"
            height={300}
            width={900}

            // autoPlay
            // loop
            // muted
          >
            {/* <source src="/test1.png" type="video/mp4" /> */}
          </motion.img>
          {/* <p className="font-bold text-white text-lg md:text-2xl lg:text-3xl absolute text-center px-4">
            "Content in here."
          </p> */}
        </div>

        {/* Service */}
        <div id="service" className="container p-8">
          <div className="w-full md:w-[50%] lg:w-[30%]">
            <ScrollColorText
              className="font-bold text-3xl leading-relaxed lg:leading-loose lg:text-5xl"
              text="Our Services"
              highlightWords={["Services"]}
              highlightColor="#60a5fa"
            />
            <p className="text-lg">
              Let us propel your business forward through expert data analysis
              and machine learning strategies.
            </p>
            <hr className="border-t-2 border-gray-600 mt-8 w-[60%]" />
          </div>
        </div>

        {/* Features */}
        <div className="container space-y-8 flex flex-col justify-center items-center p-8">
          <h1 className="font-bold text-5xl">Features</h1>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="relative mt-4 hover:-translate-y-1"
              >
                <Avatar className="absolute -translate-y-1/2 left-6 h-14 w-14">
                  <AvatarFallback className="bg-slate-400"></AvatarFallback>
                </Avatar>

                <div className="space-y-4 bg-gray-200 p-6 pt-14 rounded-[20px] ">
                  <h1 className="text-2xl font-bold">{feature.title}</h1>
                  <p>{feature.content}</p>
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
            ))}
          </ul>
          <Button>More about our features</Button>
        </div>

        {/* List member */}
        <div className="w-full space-y-16 flex flex-col justify-center items-center bg-gray-200 pt-16 p-8">
          <h1 className="font-bold text-3xl text-center">Hear from our customers</h1>
          <Swiper
            className="container custom-swiper"
            // install Swiper modules
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
              640: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
              1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
            }}
          >
            {people.map((person) => (
              <SwiperSlide
                key={person.name}
                className="bg-white p-4 rounded-[20px]"
              >
                <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-slate-400">
                      {person.name}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-gray-500">{person.content}</p>
                  <h1 className="text-lg font-bold">{person.name}</h1>
                  <p className="text-sm font-bold text-blue-400">
                    {person.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl flex flex-col items-center text-center space-y-6">
          <h2 className="text-black text-lg tracking-tight">{cta.title}</h2>
          <ScrollColorText
            className="mt-4 text-2xl font-semibold md:text-4xl text-center justify-center"
            text={cta.content}
            highlightWords={cta.highlightWords}
            highlightColor="#60a5fa"
          />
          <Button className="p-6 rounded-xl">Get started</Button>
        </div>
      </div>
    </div>
  );
}
