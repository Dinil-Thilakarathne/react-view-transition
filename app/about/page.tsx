"use client";

import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function Page() {
  return (
    <ViewTransition>
      <div className="about-box bg-blue-300 w-full min-h-screen flex justify-between">
        <ViewTransition name="header-tag">
          <p className="text-4xl inline-block z-20 text-gray-700">Lorem</p>
        </ViewTransition>
        <div className="hidden">
          <h2>
            This is the <span className="about">about</span>
          </h2>
          <p>OK you just saw the about :)</p>
        </div>
        <Link href="/">
          <ViewTransition name="icon">
            <span>← nav</span>
          </ViewTransition>
          Back to homepage
        </Link>
      </div>
    </ViewTransition>
  );
}
