'use client";';
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import React from "react";
import { unstable_ViewTransition as ViewTransition } from "react";

interface PostCardProps {
  boxColor: string;
  title: string;
  date?: string;
  slug: string;
}

const PostCard = ({ boxColor, title, date, slug }: PostCardProps) => {
  return (
    <div>
      <ViewTransition name={`box-${slug}`}>
        <div className={cn(" w-[280px] h-[100px]", boxColor)} />
      </ViewTransition>
      <h1>{title}</h1>
      <span>{date}</span>
      <Link href={`/posts/${slug}`}>{slug}</Link>
    </div>
  );
};

export default PostCard;
