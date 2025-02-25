
interface Blog {
    id: number;
    title: string;
    author: string;
    categories: string[];
    image: string;
    slug: string;
    content?: string
}

const sampleBlogs: Blog[] = [
    {
      id: 1,
      title: "JavaScript Tutorial",
      author: "Jane Doe",
      categories: ["React"],
      image: "",
      slug: "jsTutorial",
      content: "a"
    },
    {
      id: 2,
      title: "JavaScript Tutorial",
      author: "John Smith",
      categories: ["JavaScript"],
      image: "/blogimg.jpg",
      slug: "jsTutorial"
    },
    {
      id: 3,
      title: "TypeScript Tutorial",
      author: "ABCD",
      categories: ["TypeScript"],
      image: "/blogimg.jpg",
      slug: "tsTutorial"
    },
    {
      id: 4,
      title: "JavaScript Tutorial",
      author: "Jane Doe",
      categories: ["React"],
      image: "",
      slug: "jsTutorial",
      content: "a"
    },
    {
      id: 5,
      title: "JavaScript Tutorial",
      author: "John Smith",
      categories: ["JavaScript"],
      image: "/blogimg.jpg",
      slug: "jsTutorial"
    },
    {
      id: 6,
      title: "TypeScript Tutorial",
      author: "ABCD",
      categories: ["TypeScript"],
      image: "/blogimg.jpg",
      slug: "tsTutorial"
    },
  ];

export default sampleBlogs