import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const PostsComponent = () => {
  // React Query hook for fetching data
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Loading state
  if (isLoading) return <p className="text-center text-blue-500">Loading posts...</p>;

  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">React Query Posts</h1>
        {/* ✅ Refetch button to demonstrate cache update */}
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Refresh Posts
        </button>
      </div>

      {/* ✅ Cached data shown here */}
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post) => (
          <li
            key={post.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300 bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-700">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
