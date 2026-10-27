import Link from "next/link";

export const CARS = [
  { id: 1, name: "Porshe" },
  { id: 2, name: "Aston Martin" },
  { id: 3, name: "Audi" },
];

export default function Home() {
  return (
    <main className="p-10 bg-black min-h-screen">
      <h1>The garage</h1>
      <div className="flex gap-4">
        {CARS.map((car) => (
          <Link
            key={car.id}
            href={`/photo/${car.id}`}
            className="p-6 bg-zinc-900 border border-bs-zinc-800 rounded-xl text-white hover:border-bs-neutral-500 transition-all"
          >
            {car.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
