import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { IBlog } from "../../types/blogs";
import Blog from './Blog';

interface BlogListProps{
  blogs: IBlog[]
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Categories</TableHead>
          <TableHead>Slug</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <Blog key ={blog.id} blog={blog}/>
        ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default BlogList