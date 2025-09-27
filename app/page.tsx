import { Link } from "next-view-transitions";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center flex-col">
      <Link href="/img">image</Link>
      <ViewTransition name="hero">
        <div className=" flex flex-col gap-y-2 items-center justify-center">
          <ViewTransition name="hero-img">
            <img src="img.jpg" alt="image" width={480} height={480} />
          </ViewTransition>
          <ViewTransition name="hero-title">
            <p className="mt-4 text-lg">This is an image</p>
          </ViewTransition>
        </div>
      </ViewTransition>
    </div>
  );
}
