"use client";

import Sidebar from "@/components/layout/sidebar";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-row h-[100vh] border-4 border-blue-500 rounded-xl m-4 overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-white p-8">{children}</main>
    </div>
  );
}
