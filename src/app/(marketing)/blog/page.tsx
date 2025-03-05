"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sampleBlogs from "@/config/sampleblogs";

// Define Blog Type
interface Blog {
  id: number;
  title: string;
  author: string;
  categories: string[];
  image?: string;
  slug: string;
}

const BlogList: React.FC<{ sampleBlogs: Blog[] }> = ({ sampleBlogs }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(sampleBlogs.flatMap((blog) => blog.categories))
  );

  const filteredBlogs = selectedCategory
    ? sampleBlogs.filter((sampleBlog) => sampleBlog.categories.includes(selectedCategory))
    : sampleBlogs;

  return (
    <div className="container mx-auto my-20 p-8">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full transition-transform transform hover:scale-105 ${!selectedCategory ? "bg-black text-white" : "border border-gray-300"}`}
        >
          All articles
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-transform transform hover:scale-105 ${selectedCategory === category ? "bg-black text-white" : "border border-gray-300"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
            <Image src={blog.image?blog.image : "/blogimg.jpg"} alt={blog.title} width={400} height={300} className="w-full h-64 object-cover" loading="lazy" />
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                {blog.categories.map((category, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-gray-200 rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">{blog.author}</span>
                <Link href={`/blogpost/${blog.slug}`}>
                  <button className="font-semibold flex items-center gap-1">
                    Read Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlogPage() {
  return <BlogList sampleBlogs={sampleBlogs} />;
}
