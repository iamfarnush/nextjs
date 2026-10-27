interface User {
  id: number;
  name: string;
  email: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  const user: User = await response.json();

  return (
    <div>
      <h1>Hello! my name is {user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
}
