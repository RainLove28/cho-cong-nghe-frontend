import type { ReactNode } from "react";
import ClientHeader from "@/components/client/Header";
import ClientFooter from "@/components/client/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ClientHeader />
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <ClientFooter />
    </div>
  );
}
