import Link from "next/link";

interface UserProps {
  id: number;
  name: string;
  email: string;
  website: string
}

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const posts: UserProps[] = await res.json();

  return (
    <div className="grid grid-cols-4 gap-4">
      {posts.map((user) => (
        <Link href={`/dashboard/users/${user.id}`} key={user.id} className="">
          <div className="bg-blue-100 p-2 rounded-md border border-blue-600">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
