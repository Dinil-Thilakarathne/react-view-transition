import { Link } from "next-view-transitions";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center flex-col bg-lime-100">
      <div>
        <ViewTransition name="header-tag">
          <h1 className="text-8xl text-gray-700">Lorem</h1>
        </ViewTransition>
        <Link href="/about">
          About
          <ViewTransition name="icon">
            <span>← nav</span>
          </ViewTransition>
        </Link>
      </div>
    </div>
  );
}
