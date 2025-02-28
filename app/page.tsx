"use client";

import { useTransitionRouter } from "next-view-transitions";

export default function Page() {
  const router = useTransitionRouter();

  return (
    <div className=" w-full min-h-screen flex items-center justify-center flex-col bg-lime-100">
      <div>
        <h1 className="text-8xl">Lorem</h1>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            router.push("/about", {
              // Optional custom transition
              onTransitionReady: slideInOut,
            });
          }}
        >
          About
        </a>
      </div>
    </div>
  );
}

function slideInOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        borderRadius: "0",
        transform: "translateY(0, 0)",
      },
      {
        opacity: 0,
        scale: 0.9,
        borderRadius: "50%",
        transform: "translateY(100px, 0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translateY(100%)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 400,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
