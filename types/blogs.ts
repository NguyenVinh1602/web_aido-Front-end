export interface IBlog{
    id: string,
    title: string,
    author: string,
    categories: string[],
    image?: string,
    slug: string,
    content?: string
}