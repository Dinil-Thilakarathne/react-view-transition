import PostCard from "@/components/PostCard";
import { posts } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div>
      {posts.map((post, i) => {
        return (
          <PostCard
            key={i}
            boxColor={post.boxColor}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        );
      })}
    </div>
  );
};

export default page;
