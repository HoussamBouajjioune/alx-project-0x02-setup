import React from "react";
import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-md p-4 shadow-md hover:shadow-lg transition mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700">
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
