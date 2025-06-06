import React from "react";
import { type PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
