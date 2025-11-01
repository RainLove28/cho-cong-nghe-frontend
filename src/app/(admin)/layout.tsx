import type { ReactNode } from "react";
import AdminHeader from "@/components/admin/Header";
import AdminFooter from "@/components/admin/Footer";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="flex-grow pt-[73px] pl-0 md:pl-64 transition-all duration-300">
        <div className="container mx-auto p-6">{children}</div>
      </main>

      <AdminFooter />
    </div>
  );
}
