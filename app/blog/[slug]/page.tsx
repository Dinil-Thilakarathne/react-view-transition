import { dummyBlog } from "@/lib/data";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return dummyBlog.map((blog) => ({ slug: blog.slug }));
}

export default function Page({ params }: PageProps) {
  const blog = dummyBlog.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full items-center justify-center flex flex-col">
      <ViewTransition name={`blog-${blog.slug}`}>
        <div className=" flex flex-col gap-y-2 items-start justify-center">
          <ViewTransition name={`blog-ctn-${blog.slug}`}>
            <Link href="/" className="text-sm relative ml-auto">
              Go back
            </Link>
          </ViewTransition>
          <ViewTransition name={`blog-img-${blog.slug}`}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={1020}
              height={1020}
            />
          </ViewTransition>
          <ViewTransition name={`blog-title-${blog.slug}`}>
            <p className="text-4xl font-bold">{blog.title}</p>
          </ViewTransition>
        </div>
      </ViewTransition>
    </main>
  );
}
