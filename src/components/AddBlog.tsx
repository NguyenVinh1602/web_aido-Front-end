import Link from "next/link"
import { Button } from "./ui/button"

const AddBlog = () => {
  return (
    <>
      <Link href={"/admin/newPost"}>
        <Button className="flex justify-end">Add New Blog</Button>
      </Link>
    </>
  )
}

export default AddBlog