
import BlogList from "@/components/BlogList";
import { getAllBlogs } from "../../../../../api";
import Link from "next/link"
import { Button } from "@/components/ui/button";

export default async function Dashboard() {
  const blogs = await getAllBlogs();
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Link href={"/admin/newPost"}>
          <Button className="flex justify-end">Add New Blog</Button>
      </Link>
      </div>
      <BlogList blogs={blogs}/>
    </div>
  );
}
