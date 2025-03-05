"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import sampleBlogs from "@/config/sampleblogs";
import ScrollColorText from "@/components/ScrollColorText";

interface Blog {
  id: number;
  title: string;
  author: string;
  categories: string[];
  image?: string;
  slug: string;
}

const BlogList: React.FC<{ sampleBlogs: Blog[] }> = ({ sampleBlogs }) => {
  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ScrollColorText 
        className="text-3xl font-bold mb-6 justify-center text-center"
        text="Our Blogs"
        highlightWords={["Blogs"]} 
        highlightColor="#60a5fa"
        ></ScrollColorText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleBlogs.map((blog, index) => {
          const animationProps =
            index % 3 === 0
              ? { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } }
              : index % 3 === 1
              ? { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 } }
              : { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } };

          return (
            <Link key={blog.id} href={`/blogpost/${blog.slug}`} passHref>
              <motion.div
                className="border rounded-lg overflow-hidden shadow-md cursor-pointer"
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.95 }}
                {...animationProps}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Image
                  src={blog.image ? blog.image : "/blogimg.jpg"}
                  alt={blog.title}
                  width={250}
                  height={100}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="flex gap-2 mb-2">
                    {blog.categories.map((category, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category}
                      </motion.span>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">{blog.author}</span>
                    <motion.span
                      className="font-semibold flex items-center gap-1"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read Now <span>&rarr;</span>
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  return <BlogList sampleBlogs={sampleBlogs} />;
}
