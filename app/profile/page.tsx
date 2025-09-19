"use client";
import { dummyProfiles } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";
import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

const Page = () => {
  const router = useTransitionRouter();
  return (
    <ViewTransition>
      <div className=" min-h-screen flex items-center justify-center flex-col bg-lime-100">
        <div className=" flex flex-col gap-4">
          {dummyProfiles.map((profile, i) => {
            return (
              <div key={i} className="flex items-center border p-4">
                <div
                  className=" flex  gap-12"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(`/profile/${profile.slug}`);
                  }}
                >
                  <div
                    className={cn("w-4 aspect-square ", profile.imgBgColor)}
                  />
                  <ViewTransition name={`profile-${profile.name}`}>
                    <h2
                      className="text-xl font-bold text-gray-800 inline-block"
                      id={`profile-${profile.name}`}
                    >
                      {profile.name}
                    </h2>
                  </ViewTransition>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ViewTransition>
  );
};

export default Page;
