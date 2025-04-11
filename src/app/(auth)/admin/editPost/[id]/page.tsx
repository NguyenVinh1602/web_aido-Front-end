'use client'

import RichTextEditor from '@/components/rich-text-editor';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { FormEventHandler, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';;
import Link from 'next/link';
import { getBlogById, updateBlog } from '../../../../../../api';
import { IBlog } from '../../../../../../types/blogs';
import { useRouter, useParams  } from 'next/navigation';

export default function EditPost() {
    const params = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<IBlog | null>(null)

    useEffect(() => {
        if (!params.id) return;
        const fetchBlog = async () => {
          try {
            const data = await getBlogById(params.id as string);
            setBlog(data);
          } catch (error) {
            console.error('Error fetching blog:', error);
          }
        };
        fetchBlog();
      }, [params.id]);

    const onChange = (content: string | undefined) => {
        setBlog(prev => (prev ? { ...prev, content: content || '' } : prev))
    }

    const handleInputChange = (field: keyof IBlog) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlog(prev => (prev ? { ...prev, [field]: e.target.value } : prev));
    };
    
  const handleUpdateBlog: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!blog) return;
    try {
      await updateBlog(blog.id, blog);
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('An error occurred');
    }
  }

  if (!blog) return <p>Loading...</p>;
  return (
    <div className="w-full p-6 space-y-4">
      <Link href="/admin/dashboard">
        <Button variant="outline" className="mb-2">Go Back</Button>
      </Link>
      <form className="space-y-4" onSubmit={handleUpdateBlog}>
        <h1>Edit post</h1>
        <Separator />
        <Input
          placeholder="Title"
          value={blog!.title}
          onChange={handleInputChange('title')}
          required
        />
        <Input
          placeholder="Categories"
          value={blog!.categories}
          onChange={handleInputChange('categories')}
          required
        />
        <Input
          placeholder="Author"
          value={blog!.author}
          onChange={handleInputChange('author')}
          required
        />
        <Input
          placeholder="Slug"
          value={blog!.slug}
          onChange={handleInputChange('slug')}
          required
        />
        <div className='w-full mx-auto'>
          <RichTextEditor content = {blog.content || ''} onChange={onChange}/>
        </div>
        <Button type="submit" className="">Update</Button> 
      </form>
    </div>
  );
}