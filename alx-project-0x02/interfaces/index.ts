// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
}

// interfaces/index.ts

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

// interfaces/index.ts

export interface PostProps {
  userId: number;
  id?: number;      // optional, as posts have IDs but it's not mandatory for display
  title: string;
  body: string;     // post content
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface UserProps {
  id?: number;
  name: string;
  email: string;
  address: Address;
}
