import { dummyBlog } from "@/lib/data";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  const blog = dummyBlog[0]; // Assuming you want to display the first blog post
  return (
    <main className="min-h-screen w-full items-center justify-center flex flex-col">
      <ViewTransition name="blog">
        <div className=" flex flex-col gap-y-2 items-start justify-center">
          <ViewTransition name={`blog-ctn`}>
            <Link href="/" className="text-sm relative ml-auto">
              Go back
            </Link>
          </ViewTransition>
          <ViewTransition name="blog-img">
            <Image src={blog.image} alt={blog.title} width={1020} height={1020} />
          </ViewTransition>
          <ViewTransition name={`blog-title`}>
            <p className="text-4xl font-bold">{blog.title}</p>
          </ViewTransition>
        </div>
      </ViewTransition>
    </main>
  );
}
