import SquareJsIcon from "@/assets/icons/toolbox/square-js.svg";
import SquareTsIcon from "@/assets/icons/toolbox/square-ts.svg";
import SolidityIcon from "@/assets/icons/toolbox/solidity.svg";
import HTML5Icon from "@/assets/icons/toolbox/html5.svg";
import CssIcon from "@/assets/icons/toolbox/css3.svg";
import ReactIcon from "@/assets/icons/toolbox/react.svg";
import ElectronIcon from "@/assets/icons/toolbox/electron.svg";
import GitIcon from "@/assets/icons/toolbox/git.svg";
import PolypaneIcon from "@/assets/icons/toolbox/polypane.svg";
import FirebaseIcon from "@/assets/icons/toolbox/firebase.svg";
import GithubIcon from "@/assets/icons/toolbox/github.svg";
import BunIcon from "@/assets/icons/toolbox/bun.svg";
import PostmanIcon from "@/assets/icons/toolbox/postman.svg";
import TailwindIcon from "@/assets/icons/toolbox/tailwind.svg";
import MongoDBIcon from "@/assets/icons/toolbox/mongo-db.svg";
import PostgressIcon from "@/assets/icons/toolbox/postgress.svg";
import ViteIcon from "@/assets/icons/toolbox/vite.svg";
import VSCodeIcon from "@/assets/icons/toolbox/vs-code.svg";
import VercelIcon from "@/assets/icons/toolbox/vercel.svg";
import SwaggerIcon from "@/assets/icons/toolbox/swagger.svg";
import NodeJsIcon from "@/assets/icons/toolbox/node-js.svg";
import NestIcon from "@/assets/icons/toolbox/nest.svg";
import project1Image from "@/assets/images/project1.png";
import project2Image from "@/assets/images/project2.png";
import project3Image from "@/assets/images/project3.png";
import project4Image from "@/assets/images/project4.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import vedazAvatar from "@/assets/images/vedaz.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";

export const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: SquareJsIcon,
  },
  {
    title: "TypeScript",
    iconType: SquareTsIcon,
  },
  {
    title: "Bun",
    iconType: BunIcon,
  },
  {
    title: "Node.js",
    iconType: NodeJsIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindIcon,
  },
  {
    title: "Solidity",
    iconType: SolidityIcon,
  },
  {
    title: "Nest",
    iconType: NestIcon,
  },
  {
    title: "Swagger",
    iconType: SwaggerIcon,
  },
  {
    title: "Electron",
    iconType: ElectronIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Vite",
    iconType: ViteIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDBIcon,
  },
  {
    title: "Postgress",
    iconType: PostgressIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "Polypane",
    iconType: PolypaneIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Visual Studio Code",
    iconType: VSCodeIcon,
  },
  {
    title: "Vercel",
    iconType: VercelIcon,
  },
];

export const hobbies = [
  {
    title: "Singing Alone",
    emoji: "🎤",
    left: "5%",
    top: "3%",
    zIndex: 0,
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "3%",
    zIndex: 0,
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "33%",
    zIndex: 0,
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
    zIndex: -10,
  },
  {
    title: "Chess",
    emoji: "👑",
    left: "70%",
    top: "45%",
    zIndex: 0,
  },
  {
    title: "Workout & Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
    zIndex: 0,
  },
  {
    title: "Athletics",
    emoji: "🏃🏻",
    left: "45%",
    top: "70%",
    zIndex: 0,
  },
];

export const portfolioProjects = [
  {
    company: "Guftagu",
    year: "2025",
    title: "Real-Time Chat Application",
    results: [
      {
        title:
          "Built a Real-Time Messaging Application to connect with friends",
      },
      {
        title:
          "Real-time features using Socket.io like Online Status, Typing Indicator",
      },
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
      {
        title:
          "Built a AI-driven Learning Management System secured with NextAuth.js.",
      },
      {
        title:
          "Built serverless workflows with Inngest and secured payment gateway with Razorpay.",
      },
      {
        title:
          "Leveraged Gemini AI to generate course outlines, study notes, flashcards, and quizzes.",
      },
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
      {
        title:
          "Enables multiple users to collaborate on the same drawing simultaneously using WebSockets.",
      },
      {
        title:
          "The application provides a simple and intuitive interface for drawing and creating diagrams,",
      },
      {
        title:
          "Customize background color, undo or redo changes, zoom in and out, adjust opacity.",
      },
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
      {
        title:
          "Web-platform for unified student, faculty and admin management across multiple Institutes",
      },
      {
        title:
          "AI-powered Portfolio and Resume generator leveraging ML-OCR pipelines",
      },
      {
        title:
          "Built predictive analytics models in Python and leveraged Microsoft Azure for cloud-based storage",
      },
    ],
    link: "https://github.com/hemant2807/Student-Hub",
    image: project4Image,
    linkText: "View Project",
  },
];

export const testimonials = [
  {
    name: "Savan",
    position: "Owner @Vedaz",
    text: "I just wanted to take a moment to say a big thank you for creating my marketing agency's website. It’s live now and I absolutely love your work — it's even better than I imagined! I really appreciate the effort and creativity you put into it. From now on, whatever projects I get through my agency, I would love to work with you. Looking forward to doing some amazing work together!",
    avatar: vedazAvatar,
  },
  {
    name: "Shanzil",
    position: "Marketing Head @ TotalEdge",
    text: "Hemant has been one of the best backened developers we found, he is a really great person to work with and treats our work as his own. Amazing guy, love from studentpreneur.club",
    avatar: shanzilAvatar,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Hemant's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
];
export const email = "";
export const footerLinks = [];
