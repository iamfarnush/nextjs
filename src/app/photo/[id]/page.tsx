interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
        <h1 className="text-5xl font-black uppercase italic">Full Page View</h1>
        <p>You are looking at object whith ID: {id}</p>
    </main>
  );
}
