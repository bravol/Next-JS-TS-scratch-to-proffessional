import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import paths from "@/paths";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    term: string;
  };
}
export default function SearchPage({ searchParams }: Props) {
  const { term } = searchParams;

  if (!term) {
    redirect(paths.home());
  }
  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>
  );
}
