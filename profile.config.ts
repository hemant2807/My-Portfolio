import project1Image from "@/assets/images/project1.png";
import project2Image from "@/assets/images/project2.png";
import project3Image from "@/assets/images/project3.png";
import project4Image from "@/assets/images/project4.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import vedazAvatar from "@/assets/images/vedaz.webp";
import shanzilAvatar from "@/assets/images/shanzil-avatar.webp";

export const toolBoxItems = [];
export const hobbies = [];
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
