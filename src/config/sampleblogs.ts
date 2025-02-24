
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
      title: "Mastering React Hooks",
      author: "Jane Doe",
      categories: ["React"],
      image: "",
      slug: "mastering-react-hooks",
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
      title: "CSS Grid vs Flexbox: Which One to Choose?",
      author: "David Lee",
      categories: ["Web Design"],
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      slug: "css-grid-vs-flexbox"
    },
    {
      id: 5,
      title: "Introduction to Python for Data Science",
      author: "Sarah Adams",
      categories: ["Data Science"],
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
      slug: "introduction-python-data-science"
    },
    {
      id: 6,
      title: "Mastering React Hooks",
      author: "Jane Doe",
      categories: ["React"],
      image: "/blogimg.jpg",
      slug: "mastering-react-hooks"
    }
  ];

export default sampleBlogs