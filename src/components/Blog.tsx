'use client'

import { IBlog } from "../../types/blogs"
import { TableCell, TableRow } from "./ui/table"
import { FiEdit, FiTrash2 } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/navigation"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteBlog } from "../../api"

interface BlogProps {
  blog: IBlog
}

const Blog: React.FC<BlogProps> = ({ blog }) => {
  const router = useRouter()

  const handleDelete = async () => {
    try{
      await deleteBlog(blog.id)
      router.refresh()
    }catch(error){
      console.error("Error deleting blog:", error)
      alert("An error occurred while deleting the blog.");
    }
  }
  return (
    <TableRow key={blog.id}>
      <TableCell>{blog.title}</TableCell>
      <TableCell>{blog.author}</TableCell>
      <TableCell>{blog.categories}</TableCell>
      <TableCell>{blog.slug}</TableCell>
      <TableCell className="flex gap-5">
        <Link href={`/admin/editPost/${blog.id}`}> 
          <FiEdit
              cursor='pointer'
              className='text-blue-500'
              size={25}
            />
        </Link>
        
        <AlertDialog>
        <AlertDialogTrigger asChild>
        <FiTrash2
            cursor='pointer'
            className='text-red-500'
            size={25}
          />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              blog and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  )
}

export default Blog