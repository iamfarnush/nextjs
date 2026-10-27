import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";

export default function Sidebar() {
  const [text, setText] = useState("");

  //   const router = useRouter();

  const pathname = usePathname();

  const menuItems = [
    {
      name: "Home",
      href: "/dashboard",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
    },
    {
      name: "Users",
      href: "/dashboard/users",
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
    },
  ];

  return (
    <aside className="w-64 bg-blue-50 p-6 border-r border-blue-100 flex flex-col">
      <div className="mb-8 text-xs font-bold text-blue-500 uppercase tracking-widest font-sans">
        Dashboard Sidebar
      </div>
      <nav className="flex flex-col gap-4">
        <span className="font-bold text-sm text-zinc-400">Navigation</span>

        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`transition-colors ${isActive ? "text-blue-600 font-semibold" : "hover:text-zinc-400 text-zinc-700"}`}
            >
              {item.name}
            </Link>
          );
        })}

        {/* <button
          onClick={() => router.replace("/")}
          className="hover:text-red-600 text-black transition-colors"
        >
          Log Out
        </button> */}
      </nav>

      <div className="mt-auto pt-6 border-t border-blue-200">
        <label className="block text-[10px] font-bold text-blue-400 uppercase mb-2">
          Persistent State
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text saved"
          className="w-full p-2 text-sm border border-blue-200 rounded bg-white text-black focus:ring-2 focus:ring-blur-500 outline-none"
        />
      </div>
    </aside>
  );
}
