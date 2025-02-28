"use client";

import { Link } from "next-view-transitions";

export default function Page() {
  return (
    <div className="about-box bg-blue-300 w-full min-h-screen">
      <h2>
        This is the <span className="about">about</span>
      </h2>
      <p>OK you just saw the about :)</p>
      <Link href="/">← Back to homepage</Link>
    </div>
  );
}
