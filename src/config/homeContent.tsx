
// Define data type
interface Person {
  name: string;
  title: string;
  content: string;
}

interface Feature{
  id: number;
  title: string;
  content: string;
}

// Data list
export const people: Person[] = [
  {
    name: "John Smith",
    title: "CEO",
    content:
      "John is responsible for the overall strategic direction and growth of the company. He ensures that all departments align with the company’s mission and vision while maintaining a strong organizational culture.",
  },
  {
    name: "Emily Johnson",
    title: "Head of Engineering",
    content:
      "Emily leads the engineering team, overseeing the development of new technologies and ensuring software solutions are scalable, secure, and efficient. She also works closely with other departments to integrate technological innovations.",
  },
  {
    name: "Michael Brown",
    title: "Software Developer",
    content:
      "Michael specializes in designing, coding, and maintaining applications. He collaborates with UI/UX designers and backend engineers to create seamless and high-performance software solutions for clients and internal teams.",
  },
  {
    name: "Sarah Williams",
    title: "HR Manager",
    content:
      "Sarah manages all aspects of human resources, from hiring and onboarding to employee engagement and workplace policies. She ensures the company maintains a positive and productive work environment for all staff.",
  },
  {
    name: "David Jones",
    title: "Sales Manager",
    content:
      "David is responsible for identifying new business opportunities, developing sales strategies, and maintaining relationships with key clients. He ensures the company meets its revenue targets through effective sales and marketing campaigns.",
  },
  {
    name: "Emma Davis",
    title: "UI/UX Designer",
    content:
      "Emma focuses on crafting intuitive and visually appealing digital experiences. She conducts user research, designs wireframes, and collaborates with developers to enhance product usability and customer satisfaction.",
  },
  {
    name: "James Wilson",
    title: "Data Analyst",
    content:
      "James collects, processes, and analyzes large datasets to extract meaningful insights. His reports help the company make data-driven decisions, optimize performance, and improve overall business strategies.",
  },
  {
    name: "Olivia Martinez",
    title: "Customer Support Specialist",
    content:
      "Olivia is dedicated to assisting customers with technical issues, product inquiries, and service concerns. She ensures that customer satisfaction remains a top priority by providing timely and effective solutions.",
  },
  {
    name: "Daniel Taylor",
    title: "Project Manager",
    content:
      "Daniel oversees project timelines, budgets, and resources to ensure successful delivery. He works closely with different teams to ensure smooth coordination and that project goals are met efficiently.",
  },
  {
    name: "Sophia Anderson",
    title: "System Engineer",
    content:
      "Sophia is responsible for managing IT infrastructure, ensuring system security, and optimizing performance. She also implements and maintains cloud-based solutions to support the company’s growing technological needs.",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "1st Features",
    content: "This is a description of the first feature of our website. We’re goin to briefly outline what this feature does",
  },
  {
    id: 2,
    title: "2st Features",
    content: "This is a description of the first feature of our website. We’re goin to briefly outline what this feature does",
  },
  {
    id: 3,
    title: "3st Features",
    content: "This is a description of the first feature of our website. We’re goin to briefly outline what this feature does",
  },
  {
    id: 4,
    title: "4st Features",
    content: "This is a description of the first feature of our website. We’re goin to briefly outline what this feature does",
  },
];

export const cta ={
    "title" : "Ready to leverage your data for success?",
    "content": "Contact us for a personalized strategy that drives your business forward.",
    "highlightWords": ["personalized","drives","your","business","forward."]
};
