import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <main className="min-h-screen w-full items-center justify-center flex flex-col">
      <ViewTransition name="hero">
        <div className=" flex flex-col gap-y-2 items-start justify-center">
          <ViewTransition name="hero-img">
            <img src="img.jpg" alt="image" width={1020} height={1020} />
          </ViewTransition>
          <ViewTransition name="hero-title">
            <p className="mt-4 text-5xl">This is an image</p>
          </ViewTransition>
        </div>
      </ViewTransition>
    </main>
  );
}
