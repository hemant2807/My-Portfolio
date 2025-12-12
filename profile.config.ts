import project1Image from "@/assets/images/project1.png";
import project2Image from "@/assets/images/project2.png";
import project3Image from "@/assets/images/project3.png";
import project4Image from "@/assets/images/project4.png";

export const toolBoxItems = [];
export const hobbies = [];
export const portfolioProjects = [
  {
    company: "Guftagu",
    year: "2025",
    title: "Real-Time Chat Application",
    results: [
      { title: "Built a Real-Time Messaging Application to connect with friends" },
      { title: "Real-time features using Socket.io like Online Status, Typing Indicator" },
      { title: "Chats and user data are secured using JWT" },
    ],
    link: "https://guftagu-rjks.onrender.com",
    image: project1Image,
    linkText: "Website",
  },
  {
    company: "Aurevo",
    year: "2025",
    title: "AI-Powered LMS SaaS Platform",
    results: [
      { title: "Built a AI-driven Learning Management System secured with NextAuth.js." },
      { title: "Built serverless workflows with Inngest and secured payment gateway with Razorpay." },
      { title: "Leveraged Gemini AI to generate course outlines, study notes, flashcards, and quizzes." },
    ],
    link: "https://github.com/hemant2807/Aurevo",
    image: project2Image,
    linkText: "View Project",
  },
  {
    company: "Lumodraw",
    year: "2025",
    title: "Collaborative Drawing Tool",
    results: [
      { title: "Enables multiple users to collaborate on the same drawing simultaneously using WebSockets." },
      { title: "The application provides a simple and intuitive interface for drawing and creating diagrams," },
      { title: "Customize background color, undo or redo changes, zoom in and out, adjust opacity." },
    ],
    link: "https://github.com/hemant2807/LumoDraw",
    image: project3Image,
    linkText: "View Project",
  },
  {
    company: "Student Hub",
    year: "2025",
    title: "Multi Institution ERP Management System",
    results: [
      { title: "Web-platform for unified student, faculty and admin management across multiple Institutes" },
      { title: "AI-powered Portfolio and Resume generator leveraging ML-OCR pipelines" },
      { title: "Built predictive analytics models in Python and leveraged Microsoft Azure for cloud-based storage" },
    ],
    link: "https://github.com/hemant2807/Student-Hub",
    image: project4Image,
    linkText: "View Project",
  },
];

export const testimonials = [];
export const email = "";
export const footerLinks = [];
