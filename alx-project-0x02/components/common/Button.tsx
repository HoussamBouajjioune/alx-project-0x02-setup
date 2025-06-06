import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export default function Button({ label, size = "medium", shape = "rounded-md", onClick }: ButtonProps) {
  const className = `bg-blue-600 text-white ${sizeClasses[size]} ${shape} shadow hover:bg-blue-700 transition`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
