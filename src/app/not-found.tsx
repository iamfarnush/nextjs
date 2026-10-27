import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-4 bg-red-50 border-2 border-red-500 rounded-md m-auto text-center">
            <h1 className="text-xl font-bold text-red-700">
                404 - Page Not Found
            </h1>
            <p className="text-sm my-2 font-mono">
                The page you are looking for does not exist.
            </p>
            <Link href="/" className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">
                Go Home
            </Link>
        </div>
    )
} 