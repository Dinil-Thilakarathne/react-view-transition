interface PostProps {
  title: string;
  boxColor: string;
  description: string;
  date: string;
  slug: string; // Added slug property
}

export const posts: PostProps[] = [
  {
    title: "Post 1",
    boxColor: "bg-red-500",
    description: "This is the first post.",
    date: "2023-10-01",
    slug: "post-1", // Added slug value
  },
  {
    title: "Post 2",
    boxColor: "bg-blue-500",
    description: "This is the second post.",
    date: "2023-10-02",
    slug: "post-2", // Added slug value
  },
  {
    title: "Post 3",
    boxColor: "bg-green-500",
    description: "This is the third post.",
    date: "2023-10-03",
    slug: "post-3", // Added slug value
  },
];

export interface BlogPost {
  slug: string;
  image: StaticImageData;
  title: string;
  description: string;
  content: string[];
}

export interface ProfileCardProps {
  imgBgColor: string;
  name: string;
  jobTitle: string;
  desc: string;
  slug: string; // Added slug property
}

export const dummyProfiles: ProfileCardProps[] = [
  {
    slug: "john-doe",
    imgBgColor: "bg-blue-400",
    name: "John Doe",
    jobTitle: "Software Engineer",
    desc: "Passionate about building scalable web applications and exploring new technologies.",
  },
  {
    slug: "jane-smith",
    imgBgColor: "bg-green-400",
    name: "Jane Smith",
    jobTitle: "Product Manager",
    desc: "Experienced in leading cross-functional teams to deliver impactful products.",
  },
  {
    slug: "alice-johnson",
    imgBgColor: "bg-red-400",
    name: "Alice Johnson",
    jobTitle: "UX Designer",
    desc: "Focused on creating intuitive and user-friendly designs for digital products.",
  },
];

import blogImage from "@/public/image.jpg";
import { StaticImageData } from "next/image";

export const dummyBlog: BlogPost[] = [
  {
    slug: "react-view-transitions",
    image: blogImage,
    title: "Exploring React’s New View Transitions API",
    description:
      "A quick demo showing how React’s View Transitions API can create smooth, native-like animations when switching between pages or components.",
    content: [
      "The View Transitions API introduces a new way to handle UI changes in React applications. Instead of abrupt jumps between routes or component states, it enables seamless animations that feel smooth and connected. This approach not only improves the visual flow of an app but also helps users stay oriented as they move through different parts of the interface.",
      "In this demo, I’ve applied the View Transitions API to a simple blog layout. When navigating from the blog list to a single post, the transition is animated to create a more natural experience. While the example is minimal, the same concept can be extended to complex applications, making interactions more engaging without requiring heavy animation libraries.",
    ],
  },
  {
    slug: "nextjs-view-transition-demo",
    image: blogImage,
    title: "Animating Navigation in Next.js",
    description:
      "A walkthrough of wiring the View Transitions API into a Next.js application to add motion to route changes without external libraries.",
    content: [
      "Next.js embraces the View Transitions API through the app router, letting developers animate navigations with very little code. By pairing native transitions with server components, you can deliver fluid page changes that keep users oriented.",
      "This demo highlights how to scope transitions to particular elements, ensuring only the relevant pieces of the UI animate. The result is a polished experience that feels fast and intentional.",
    ],
  },
  {
    slug: "designing-with-transitions",
    image: blogImage,
    title: "Designing Delightful UI with Transitions",
    description:
      "Practical guidance for applying subtle yet effective transitions that improve usability and perceived performance.",
    content: [
      "Thoughtful motion design helps users build a mental model of your interface. With view transitions, you can connect states by animating key elements rather than replacing entire screens instantly.",
      "When introducing transitions, focus on intent: what should remain stable, and what should guide attention? Balancing these considerations yields interfaces that feel both informative and calm.",
    ],
  },
];
