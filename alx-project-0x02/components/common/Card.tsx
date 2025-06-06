// components/common/Card.tsx
import { CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
