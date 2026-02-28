"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { Sidebar } from "./Sidebar";

export function PagePagination() {
  const pathname = usePathname();

  // Flatten the navigation items into a single linear array
  const allItems = navigation.flatMap((section) => section.items);

  // Find the index of the current page
  const currentIndex = allItems.findIndex((item) => item.href === pathname);

  if (currentIndex === -1) return null;

  const prev = allItems[currentIndex - 1];
  const next = allItems[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto px-8 pb-12 grid grid-cols-2 gap-4 mt-8">
      {prev ? (
        <Link
          href={prev.href}
          className="group block p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors bg-[var(--bg-secondary)]"
        >
          <div className="text-sm text-[var(--text-muted)] mb-1 group-hover:text-[var(--accent)] transition-colors">
            &lt; Previous
          </div>
          <div className="font-medium text-[var(--text-primary)]">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div /> // Empty spacer
      )}

      {next ? (
        <Link
          href={next.href}
          className="group block p-4 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors bg-[var(--bg-secondary)] text-right"
        >
          <div className="text-sm text-[var(--text-muted)] mb-1 group-hover:text-[var(--accent)] transition-colors">
            Next &gt;
          </div>
          <div className="font-medium text-[var(--text-primary)]">
            {next.title}
          </div>
        </Link>
      ) : (
        <div /> // Empty spacer
      )}
    </div>
  );
}
