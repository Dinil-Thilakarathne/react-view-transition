"use client";
import { ProfileCardProps } from "@/lib/data";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";




const ProfileCard: React.FC<ProfileCardProps> = ({ name, jobTitle, desc }) => {
  const router = useTransitionRouter();
  return (
    <ViewTransition>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <Link
          href="/profile"
          className="mb-4"
          onClick={(e) => {
            e.preventDefault();
            router.push("/profile");
          }}
        >
          {" "}
          ← Back
        </Link>
        <ViewTransition name={`profile-${name}`}>
          <h2
            className="text-xl font-bold text-gray-800"
            id={`profile-${name}`}
          >
            {name}
          </h2>
        </ViewTransition>
        <p className="text-sm text-gray-600">{jobTitle}</p>
        <p className="mt-4 text-gray-700">{desc}</p>
      </div>
    </ViewTransition>
  );
};

export default ProfileCard;
