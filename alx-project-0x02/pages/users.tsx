import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await res.json();

    return {
      props: {
        users,
      },
      revalidate: 10, // optional ISR
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
