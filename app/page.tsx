import { dummyBlog } from "@/lib/data";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <div className=" w-full min-h-screen flex items-start justify-center flex-col">
      <div className="container mx-auto flex gap-x-6">
        {dummyBlog.map((blog) => (
          <ViewTransition key={blog.slug} name={`blog-${blog.slug}`}>
            <div className=" flex flex-col gap-y-2 items-center justify-center ">
              <ViewTransition name={`blog-img-${blog.slug}`}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={480}
                  height={480}
                  className="rounded-lg"
                />
              </ViewTransition>
              <div className="flex items-center justify-between w-full">
                <ViewTransition name={`blog-title-${blog.slug}`}>
                  <p className="text-lg">{blog.title}</p>
                </ViewTransition>
                <ViewTransition name={`blog-ctn-${blog.slug}`}>
                  <Link href={`/blog/${blog.slug}`} className="text-sm">
                    Read more
                  </Link>
                </ViewTransition>
              </div>
            </div>
          </ViewTransition>
        ))}
      </div>
    </div>
  );
}
