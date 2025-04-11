'use client'

import RichTextEditor from '@/components/rich-text-editor';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FormEventHandler, useState } from 'react';
import { Button } from '@/components/ui/button';;
import Link from 'next/link';
import { addBlog } from '../../../../../api';
import { IBlog } from '../../../../../types/blogs';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

export default function EditorPage() {
  const router = useRouter();
  const [blog, setBlog] = useState<IBlog>({
    id: uuidv4(),
    title: '',
    author: '',
    categories: [],
    slug: '',
    content: ''
  })

  const onChange = (content: string) => {
    setBlog(prev => ({ ...prev, content: content || '' }))
  }

  const handleInputChange = (field: keyof IBlog) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlog(prev => ({...prev, [field]: e.target.value}))
  }

  const handleSubmitNewBlog: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await addBlog(blog);
      setBlog({ id: uuidv4(), title: '', author: '', categories: [], slug: '', content: '' });
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('An error occurred');
    }
  }

  return (
    <div className="w-full p-6 space-y-4">
      <Link href="/admin/dashboard">
        <Button variant="outline" className="mb-2">Go Back</Button>
      </Link>
      <form className="space-y-4" onSubmit={handleSubmitNewBlog}>
        <h1>New post</h1>
        <Separator />
        <Input
          placeholder="Title"
          value={blog.title}
          onChange={handleInputChange('title')}
          required
        />
        <Input
          placeholder="Categories"
          value={blog.categories}
          onChange={handleInputChange('categories')}
          required
        />
        <Input
          placeholder="Author"
          value={blog.author}
          onChange={handleInputChange('author')}
          required
        />
        <Input
          placeholder="Slug"
          value={blog.slug}
          onChange={handleInputChange('slug')}
          required
        />
        <div className='w-full mx-auto'>
          <RichTextEditor content = {blog.content} onChange={onChange}/>
        </div>
        <Button type="submit" className="">Create</Button> 
      </form>
    </div>
  );
}