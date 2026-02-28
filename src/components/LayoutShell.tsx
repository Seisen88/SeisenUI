"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div 
        className={cn(
          "fixed top-0 left-0 h-full z-40 transition-transform duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        )}
      >
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
      </div>
      
      <main 
        className={cn(
          "flex-1 transition-all duration-300",
          isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <div className={cn(
          "fixed top-4 left-4 z-50 transition-opacity duration-300",
          isSidebarOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        )}>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            title="Open Sidebar"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
