import { IBlog } from "./types/blogs"

const baseUrl = "http://localhost:3001"

export const getAllBlogs = async (): Promise<IBlog[]> => {
    const res = await fetch(`${baseUrl}/blogs`, { cache:  "no-store" })
    return await res.json()
}

export const getBlogById = async (id: string): Promise<IBlog | null> => {
    const res = await fetch(`${baseUrl}/blogs/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (!res.ok) return null;
    return await res.json();
};

export const addBlog = async (blog: IBlog):Promise<IBlog> => {
    const res = await fetch(`${baseUrl}/blogs`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    return await res.json()
}

export const updateBlog = async (id: string, updatedBlog: IBlog): Promise<IBlog> => {
    const res = await fetch(`${baseUrl}/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
    });
    return await res.json();
};

export const deleteBlog = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/blogs/${id}`,{
        method: 'DELETE'
    })
}