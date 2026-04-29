import { Outlet } from "@tanstack/react-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppTopbar } from "./AppTopbar";
import { FloatingAssistant } from "./FloatingAssistant";

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-subtle">
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0">
          <AppTopbar />
          <main className="flex-1 p-4 md:p-6 animate-fade-in-up">
            <Outlet />
          </main>
        </div>
        <FloatingAssistant />
      </div>
    </SidebarProvider>
  );
}
