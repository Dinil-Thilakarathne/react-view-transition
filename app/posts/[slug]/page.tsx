import { posts } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { unstable_ViewTransition as ViewTransition } from "react";

export function generateStaticParams() {
  console.log(posts.map((p) => ({ slug: p.slug })));
  return posts.map((p) => ({ slug: p.slug }));
}

interface postPageProps {
  params: {
    slug: string;
  };
}
export default async function PostPage({ params }: postPageProps) {
  const { slug } = await params; // Awaiting params
  const post = posts.find((post) => post?.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <ViewTransition name={`box-${post.slug}`}>
        <div className={cn("w-[480px] h-[300px]", post.boxColor)}></div>
      </ViewTransition>
      <p>{post.date}</p>
      <h1>{post.title}</h1>
      <Link href={"/posts"}> back</Link>
    </div>
  );
}
