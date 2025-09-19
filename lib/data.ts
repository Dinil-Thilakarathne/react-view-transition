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
