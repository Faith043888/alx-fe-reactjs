import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Blog Post #{id}</h2>
      <p className="text-gray-700">
        This is a dynamic route example for post ID {id}.
      </p>
    </div>
  );
}
